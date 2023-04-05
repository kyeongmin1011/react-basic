# 프로젝트로 배우는 리액트
-  https://github.com/kossiecoder/react-redux-basic

## Install JSON Server
- `npm install json-server`

## Start JSON Server
- `json-server --watch db.json` 매번 이렇게 쓸 수 없으니 
- `package.json` 파일의 scripts 아래 부부에 `"db": "json-server --watch db.json --port 3001"` 추가 후
- `npm run db` 로 server start


## JSON Server 
- https://github.com/typicode/json-server
- `GET /posts?_page=5&_limit=10`  한페이지에 10개의 리스트를 5페이지씩 보여준다는 뜻 
- https://github.com/typicode/json-server#paginate
- `GET /posts?_sort=user,views&_order=desc,asc`