import jwt
import base64
import datetime
from decouple import config
from .models import Member

def generate_token(payload, type):

    if type == "access":
        # 2시간
        exp = datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    elif type == "refresh":
        # 2주
        exp = datetime.datetime.utcnow() + datetime.timedelta(weeks=4)
    else:
        raise Exception("Invalid tokenType")
    
    payload['exp'] = exp
    payload['iat'] = datetime.datetime.utcnow()
    encoded = jwt.encode(payload, config("JWT_SECRET_KEY"), algorithm=config("JWT_ALGORITHM"))

    return encoded

def decode_token(token):

    # google token decode
    try:
        payload = jwt.decode(token, verify=False)
        # print('google', payload)
        member_seq = payload
        member_id = payload['sub']
        member = Member.objects.get(google_id=member_id)
        return member

    # kakao token decode
    except:
        try:
            payload = jwt.decode(jwt=token, key=config("JWT_SECRET_KEY"), algorithm=config("JWT_ALGORITHM"))
            # print('kakao', payload)
            member_seq = payload['member_seq']
            member = Member.objects.get(member_seq=member_seq)
            return member

        except:
            return None
    
