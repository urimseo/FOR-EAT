# FOR:EAT

![logo](README.assets/logo.png)

## 목차

​	[1. FOR:EAT](#for:eat)

​	[2. 주요 기능](#주요-기능)

​	[3. Development Stack](#development-stack)

​	[4. Getting Started](#getting-started)

​	[5. Document](#document)

​	[6. Team Introduce](#team-introduce)



## FOR:EAT

**FOR:EAT**은 유저의 취향, 냉장고에 있는 재료를 반영하여 다양한 알고리즘을 통해 사용자 맞춤형으로 레시피를 추천하는 서비스입니다. 

🍴 [**사용자 맞춤 레시피 추천 서비스 FOR:EAT**](https://j6a103.p.ssafy.io/)

💡 **Team 포릿 Notion**



## 주요 기능

### 사용자 맞춤형 레시피 추천

![feed](README.assets/feed.PNG)



<hr/>

### 레시피 상세 정보

![detail](README.assets/detail.PNG)

<hr/>

### 브라우저

![browse](README.assets/browse.PNG)

<hr/>

### Weekly Report

![WeeklyReport](README.assets/WeeklyReport.png)





## Development Stack

![워드 클라우드](README.assets/워드 클라우드.jpg)**협업**
- Jira
- Gitlab
- Notion
- Gather
- Mattermost

**Frontend**

- React
- Recoil
- Javascript
- React-router

**Backend**

- Python
- Django
- Pandas
- Scipy
- Numpy
- Scikit learn
- MySQL
- Visual Studio Code, Postman, Mysql Workbench, Sourcetree





## Getting Started

front/back 의 `.env` 파일은 sercret key 문제로 요청 시 보내드리겠습니다.

### Github Clone

- clone 받기

  ```
  git clone https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103.git
  ```

### Frontend

- 시스템 버전
    - node : @16.14.0
    - npm : @8.3.1
- /frontend 디렉토리로 이동
- React 모듈 설치
  
    ```
      npm install
    ```
    
- React 어플리케이션 실행
  
    ```
      npm start
    ```
    

### Backend

- 시스템 버전
    - Django: 3.2.12
    - Python: 3.9.7
    - mysql: 8.0.28
- 소스코드 pull
  
    ```
    python -m venv venv
    source venv/Scripts/activate
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    python manage.py loaddata recipes/fixtures/ingredient.json
    python manage.py loaddata recipes/fixtures/keyword.json
    python manage.py loaddata recipes/fixtures/allergy.json
    python manage.py loaddata recipes/fixtures/category.json
    python manage.py loaddata recipes/fixtures/recipe_final.json
    ```
    

### 배포

- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/exec/%ED%8F%AC%ED%8C%85%20%EB%A7%A4%EB%89%B4%EC%96%BC.md">배포 관련 문서</a>



## Document

- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/docs/API_%EB%AA%85%EC%84%B8%EC%84%9C.pdf">API 명세서</a>
- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/docs/ERD.pdf">ERD</a>
- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/docs/%ED%99%94%EB%A9%B4%EA%B5%AC%EC%A1%B0%EB%8F%84.pdf">화면구조도</a>
- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/docs/%EA%B8%B0%EB%8A%A5%EC%A0%95%EC%9D%98%EC%84%9C.pdf">기능 정의서</a>
- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/docs/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84.pdf">와이어프레임</a>
- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/docs/%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98.pdf">아키텍처</a>
- <a href="https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103/-/blob/develop/docs/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98.md">추천 알고리즘</a>



## Team Introduce

|                김윤하                |                           김현규                           |                 서우림                 |                  이재경                  |                     장준범                     |                  한슬기                  |
| :----------------------------------: | :--------------------------------------------------------: | :------------------------------------: | :--------------------------------------: | :--------------------------------------------: | :--------------------------------------: |
|  ![로키2](README.assets/로키2.png)   |              ![현규](README.assets/현규.png)               |    ![둥이](README.assets/둥이.png)     | ![고슴도치](README.assets/고슴도치.png)  | ![준범-16492589299933](README.assets/준범.png) |     ![초코](README.assets/초코.jpg)      |
|        팀장, Frontend, UI/UX         | 서버 관리 및 배포, <br>추천 알고리즘 분석, <br>Backend API |  Backend API, <br>추천 알고리즘 분석   |   Backend API, <br>추천 알고리즘 분석    |                Frontend, UI/UX                 |             Frontend, UI/UX              |
| [@yulloe](https://github.com/yulloe) |             [@HQkim](https://github.com/HQkim)             | [@urimseo](https://github.com/urimseo) | [@aletsire](https://github.com/aletsire) |    [@UNILION](https://github.com/UNILION/)     | [@1seul357](https://github.com/1seul357) |

