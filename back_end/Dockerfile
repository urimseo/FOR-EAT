# /docker-server/server_dev/Dockerfile
# 생성하는 docker의 python 버전
FROM python:3.9.6  

ENV PYTHONUNBUFFERED 1 

RUN apt-get -y update 
# docker 안에서 vi 설치 (안해도됨)
RUN apt-get -y install vim 
RUN apt-get -y install python3-dev default-libmysqlclient-dev build-essential

# docker안에 srv/docker-server 폴더 생성
RUN mkdir /srv/docker-server 
# 현재 디렉토리를 srv/docker-server 폴더에 복사
ADD . /srv/docker-server 


# 작업 디렉토리 설정
WORKDIR /srv/docker-server 


# pip 업글
RUN pip install --upgrade pip 
# 필수 패키지 설치
RUN pip install -r requirements.txt 

# makemigrations, migrate, loaddata 해줘야함


EXPOSE 8000
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "foreat.wsgi:application"]
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]