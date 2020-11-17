# jeju

* 프런트
- 자바스크립트
- 리액트

* 백엔드
- 노드js
- mysql

### 배포에 참고한 사이트
https://medium.com/@bdv111/aws-ec2%EC%97%90%EC%84%9C-nginx%EB%A1%9C-react-%EC%95%B1-%EC%A7%81%EC%A0%91-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-c1e09639171e

### client
* http://52.79.237.69:3000
* pm2 start npm -- start
* 추후에 nginx으로 build 정적 배포 하도록 수정하기

### server
* http://52.79.237.69:3001/api
* pm2 start server.js

### 호스팅에 도움이 된 블로그
* https://velog.io/@pinot/AWS-Ubuntu%EB%A1%9C-nginx-reverse-proxy-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

### 터미널 접속
* ssh -i jeju.pem ubuntu@52.79.160.44 