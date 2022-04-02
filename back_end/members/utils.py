import jwt

from decouple import config
from .models import Member
from rest_framework.response import Response
from rest_framework import status
def login_decorator(func):

    def wrapper(self, request, *args, **kwargs): 

        if "Authorization" not in request.headers:
            data = {
                "msg" : "유효하지 않은 토큰입니다.",
                "status": 401
            }
            return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)
        
        encode_token = request.headers["Authorization"][7:].strip('"')

        # google token decode
        try:
            try:
                data = jwt.decode(encode_token, verify=False)
                member = Member.objects.get(google_id=data['sub'])
                request.member = member 

            except jwt.DecodeError:
                data = {
                    "msg" : "유효하지 않은 토큰입니다.",
                    "status": 401
                }
                return Response(data=data, status=status.HTTP_401_UNAUTHORIZED)
            except Member.DoesNotExist:
                data = {
                    "msg" : "존재하지 않는 유저입니다.",
                    "status": 404
                }
                return Response(data=data, status=status.HTTP_404_NOT_FOUND)

            return func(self, request, *args, **kwargs)
        # kakao token decode
        except:
            try:
                data = jwt.decode(jwt=encode_token, key=config("JWT_SECRET_KEY"), algorithm=config("JWT_ALGORITHM"))
                member = Member.objects.get(member_seq=data["member_seq"])
                request.member = member
            
            except jwt.DecodeError:
                data = {
                    "msg" : "유효하지 않은 토큰입니다.",
                    "status": 401
                }
                return Response(data=data, status=status.HTTP_401_UNAUTHORIZED) 
            except Member.DoesNotExist:
                data = {
                    "msg" : "존재하지 않는 유저입니다.",
                    "status": 404
                }
                return Response(data=data, status=status.HTTP_404_NOT_FOUND)

            return func(self, request, *args, **kwargs)

    return wrapper
