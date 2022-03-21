from email.policy import HTTP
from functools import partial
from xml.dom import ValidationErr
from django.forms import ValidationError
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
import requests
# from foreat.settings import SOCIAL_OUTH_CONFIG
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from members.models import Member, MemberSurvey
from .serializers import KaKaoMemberSerializer, GoogleMemberSerializer, MemberProfileSerializer
from .token import generate_token, decode_token
from django.contrib.auth import get_user_model
import json
from decouple import config

from members import serializers

# Django에서 인가코드 요청할 경우 사용 할 수 있다. (클라이언트에서 줘야함)
# @api_view(['GET'])
# @permission_classes([AllowAny, ])
# def kakao_get_login(request):
#     CLIENT_ID = "b4e70d34154f3107fd39de575768f82d"
#     REDIRECT_URL = "http://localhost:8000/members/kakao/login"
#     # CLIENT_ID = SOCIAL_OUTH_CONFIG['KAKAO_REST_API_KEY']
#     # REDIRECT_URL = SOCIAL_OUTH_CONFIG['KAKAO_REDIRECT_URI']
#     url = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={0}&redirect_uri={1}".format(
#         CLIENT_ID, REDIRECT_URL)
#     res = redirect(url)
#     return res

# 인가코드로 token 받기
@api_view(['GET', 'POST'])
@permission_classes([AllowAny, ])
def kakao_get_user_info(request):
    CODE = request.data['code']
    url = "https://kauth.kakao.com/oauth/token"
    res = {
        'grant_type': 'authorization_code',
        'client_id': config("KAKAO_CLIENT_ID"),
        'redirect_url': config("KAKAO_REDIRECT_URL"),
        'code': CODE
    }
    headers = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    response = requests.post(url, data=res, headers=headers)
    if response.status_code == 200:
        token_json = response.json()
        
        user_url = "https://kapi.kakao.com/v2/user/me"
        auth = "Bearer " + token_json['access_token']
        HEADER = {
            "Authorization": auth,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
        }
        res = requests.get(user_url, headers=HEADER)
        data = json.loads(res.text)

        return check_kakao_user(data)
    else:
        data = {
            "data": {
                "msg": "카카오 서버 상 문제 발생.",
                "status": 400
            }
        }
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)

# db에 유저정보가 있는지 확인  
def check_kakao_user(request):
    if Member.objects.filter(kakao_id=request['id']).exists():
        return kakao_login(request)
    else:
        return kakao_signup(request)

def kakao_signup(request):
    try:
        data = {
            'id': request['id'],
            'kakao_id': request['id'],
            'nickname': request['properties']['nickname'],
            'profile_image_url': request['kakao_account']['profile']['profile_image_url'],
        }
        serializer = KaKaoMemberSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            member = serializer.save()
            member.save()
            return kakao_login(request)
    except:
        data = {
            "data": {
                "msg": "카카오 데이터 형식 오류",
                "status": 400
            }
        }
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)        


def kakao_login(request):
    member = Member.objects.get(kakao_id=request['id'])
    member_seq = member.member_seq
    kakao_id = member.kakao_id
    nickname = member.nickname
    profile_image_url = member.profile_image_url
    # 건강 설문 조사 여부 확인 
    try :
        isSurvey = MemberSurvey.objects.get(member_seq=member.member_seq)
        isSurvey = True
    except:
        isSurvey = False
    

    print(isSurvey)
    try:
        payload = {
            "subject": kakao_id,
            "member_seq": member_seq,
            "nickname": nickname,
        }
        access_token = generate_token(payload, "access")
        data = {
            "data": {
                "user": {
                    "member_seq": member_seq,
                    "nickname": nickname,
                    "profile_image_url": profile_image_url,
                    "isSurvey": isSurvey,
                },
                "access_token": access_token,
                "status": 200,
                "msg":'카카오 로그인 성공'                                                      
            }
        }
        return Response(data=data, status=status.HTTP_200_OK)

    except Member.DoesNotExist:
        data = {
            "data": {
                "msg": "유저 정보가 올바르지 않습니다.",
                "status": 401
            }
        }
        return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)

    except Exception as e:
        data = {
            "data": {
                "msg": "정상적인 접근이 아닙니다.",
                "status": 500
            }
        }
        return Response(data=data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# google login
@api_view(['POST'])
@permission_classes([AllowAny, ])
@csrf_exempt
def check_google_user(request):
    if Member.objects.filter(google_id=request.data['data']['googleId']).exists():
        return google_login(request)
    else:
        return google_signup(request)

# 
def google_signup(request):
    try:
        data = {
            'id': request.data['data']['googleId'],
            'google_id': request.data['data']['googleId'],
            'nickname': request.data['data']['name'],
            'profile_image_url': request.data['data']['imageUrl'],
        }

        serializer = GoogleMemberSerializer(data=data)

        if serializer.is_valid(raise_exception=True):
            member = serializer.save()
            member.save()
            return google_login(request)

    except:
        data = {
            "data": {
                "msg": "구글 데이터 형식 오류",
                "status": 400
            }
        }
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)        


def google_login(request):

    # 건강 data 존재 여부를 확인하여 추가로 data에 담아서 보내줘야 함 
    # try :
    #     isSurvey = MemberSurvey.objects.get(member_seq=member.member_seq)
    #     isSurvey = True
    # except:
    #     isSurvey = False


    try:
        data = {
            "data": {
                "user": {
                "isSurvey": True,
                "status": 200,
                "msg":'구글 로그인 성공'                                                      
            }
        }}
        return Response(data=data, status=status.HTTP_200_OK)

    except Member.DoesNotExist:
        data = {
            "data": {
                "msg": "유저 정보가 올바르지 않습니다.",
                "status": 401
            }
        }
        return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)

    except Exception as e:
        data = {
            "data": {
                "msg": "정상적인 접근이 아닙니다.",
                "status": 500
            }
        }
        return Response(data=data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# 회원 정보(닉네임, 프로필)
@permission_classes([])
class MemberProfile(APIView):
   
    def get_member(self, pk):
        try:
            found_user = Member.objects.get(member_seq=pk)
            return found_user
        except Member.DoesNotExist:
            return None
    

    def get(self, request, pk, format=None):
        member = self.get_member(pk)
        serializer = MemberProfileSerializer(member)
        return Response(data=serializer.data, status=status.HTTP_200_OK) 
        

    def patch(self, request, pk, format=None):
        found_user = self.get_member(pk)
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        member_seq = decode_token(request, token)

        if found_user is None or pk != member_seq:
            data = {
                data: {
                    "msg": "유저 정보가 올바르지 않습니다.",
                    "satus": 401
                }
            }
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        elif member_seq != pk:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        else:
            data = {
                "nickname" : request.data['nickname'],
                "profile_image_url": request.data['profile_image_url']
            }
            serializer = MemberProfileSerializer(found_user, data=data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    


        
