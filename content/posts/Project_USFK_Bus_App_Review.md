---
title: 'USFK Bus Schedule 앱 제작 후기 및 Troubleshooting'
date: '2022-06-25'
template: 'post'
draft: false
slug: 'usfk_bus_production_review'
category: 'Projects'
tags:
description: 'React Native 라이브러리로 앱을, Django와 MySQL DB 기반으로 서버를 제작하며 배운 점들'
socialImage: '/ryan.png'
---

캠프 험프리스 내 셔틀버스 시간표 앱이 있으면 좋겠다는 의견이 있었다. 마침 App Store에는 Playstore만큼 좋은 퀄리티의 시간표 앱이 없어서 직접 제작해보기로 했다. 수요는 많이 없겠지만 작년에 열심히 썼던 React Native 복습 + 새로 배운 Django 프레임워크 활용을 연습해보는 목적이었다.

## 1. React Native

### forwardRef()의 사용

Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공한다. useRef 메소드로 ref를 생성해서 react-native-map, scrollview등의 컴포넌트에 쓸 수 있다. 이 때 다른 컴포넌트에서 이 Ref를 참조하고 조작하려 할 때 일반적인 Props로 넘겨주면 오류가 난다.
이유는 **함수 컴포넌트는 인스턴스가 없기 때문에 함수 컴포넌트에 ref 어트리뷰트를 사용할 수 없기 때문**.

이때는 React Native의 forwardRef() 메소드로 해당 컴포넌트를 감싸서 넘겨주어야 한다.

```javascript
export default forwardRef(component);
```

참고:
https://merrily-code.tistory.com/121  
https://ko.reactjs.org/docs/refs-and-the-dom.html

### install react-native-reanimated

특정 library를 사용하기 위해 react-native-reanimated를 설치해야 했는데, 과정이 까다로워서 남겨둬야겠다.  
당연히도 yarn또는 npm으로 설치 후 pod install까지 해준다.

```shell
yarn install react-native-reanimated
cd ios && pod install && cd ..
```

이후 babel.config.js를 아래처럼 수정해주어야 한다.

```javascript
// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
```

이후에 캐시를 삭제하고 다시 시도해봐도 설치 오류가 나서 헤맸는데, 결국 답은 맥북 다시시작이었다... 껐다 키니까 빌드가 성공하는 매직!  
참고 : https://github.com/software-mansion/react-native-reanimated/issues/2774

## 2. MySQL

사실 백엔드쪽을 스스로 제작해보는 것은 이번이 처음이라, Django와 MySQL을 독학으로 공부할 수 밖에 없었다.

### SQL vs NoSQL

**SQL - 관계형 데이터베이스**
엄밀하게 말하자면 SQL은 Structured Query Language의 약자로 데이터베이스와 상호작용할 때 쓰이는 언어이지만, 일반적으로 관계형 데이터베이스를 말한다.

- SQL에는 엄격한 데이터 구조(schema)에 따라 데이터가 저장된다. 즉 하나의 테이블에 저장된 데이터는 모두 같은 구조를 가져야만 한다.
- **DB 정규화(Normalization)** : SQL에는 각 데이터가 중복 없이 단 한번씩만 저장되어야 하기 때문에(이를 **무결성**이라고 한다), 구조 사이의 관계를 통해 여러 테이블에 분산된다.  
  정규화에 대한 좋은 설명 : https://mangkyu.tistory.com/110
- 언제 사용하는가? : 관계를 맺고 있는 **데이터가 자주 변경되고 수정되는 경우** 혹은 데이터의 스키마가 명확하여 DB를 구성할 때 중요한 경우
- 종류: Oracle, MySQL

**NoSQL - 비관계형 데이터베이스**
관계형 DB의 한계를 해결하기 위해 제시된 방법으로, 스키마와 관계에 의존하지 않는다. 그렇기에 훨씬 유연하고 가변적인 데이터의 저장이 가능하고
데이터를 가져오는 속도가 빨라진다.

- 종류: MongoDB

### Default Table 지우기

django에서 기본으로 제공하는 테이블이 있어서 makemigrations 후 migrate하면 sql에 테이블이 이미 여러개가 생성되어 있다. 이번 앱에서는 관리자 기능이나 authorization이 필요가 없으므로 기본 app과 middleware를 지워줄 필요가 있었다.

```python
# settings.py
INSTALLED_APPS = [
    # 'django.contrib.admin',
    # 'django.contrib.auth',
    # 'django.contrib.contenttypes',
    # 'django.contrib.sessions',
    # 'django.contrib.messages'
    'django.contrib.staticfiles',
    'rest_framework',
]
MIDDLEWARE = [
    # 'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

### Django Server에서 MySQL DB 이용

Mysql을 처음 구동한다면 설치후 초기 user를 생성해야 한다.

```shell
  pip3 install mysqlclient
```

```shell
  Mysql.server start
  mysql -u root -p
```

### import .csv file to MySQL DB

csv파일에 저장된 data를 DB에 넣는 방법은 두 가지가 있다. MySQLWorkbench를 이용하는 방법과, python code로 Django ORM을 통해 DB에 데이터를 추가하는 방법이다. 처음에는 전자를 이용했는데, DB를 직접 건드린다는 리스크가 있을 뿐더러 배포용 DB를 새로 만들 때에도 확장성이 부족하여 후자를 사용하는 편이 좋은 것 같다.

manage.py가 있는 디렉토리에 db_insert.py를 아래처럼 만들었다.

```python
import os
import django
import csv

os.environ.setdefault("DJANGO_SETTINGS_MODULE", 'appname.settings.prod')
# python이 실행될 때 DJANGO_SETTINGS_MODULE라는 환경 변수에
# 현재 프로젝트의 settings.py 파일 경로를 등록
django.setup() # python manage.py shell 을 실행하는 것이랑 비슷한 방법이다. 즉 파이썬 파일에서도 django를 실행 시킬수 있다.

def insert_data():
    with open('data/data.csv', newline='', encoding='utf8') as csvfile:
        data_reader = csv.reader(csvfile)
        for row in data_reader:
        #csv파일의 각각의 row에 대해 각 원소를 row[i]로 접근하여 model.objects.create()로 생성해주면 된다.
        print('DATA UPLOADED SUCCESSFULY!')

```

## 3. 백엔드 서버 배포 과정

--- TBA ---
