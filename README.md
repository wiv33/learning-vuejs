# aws-s3-bucket-file-upload

## S3 버킷 생성
- https://s3.console.aws.amazon.com/s3/home
  * ***[1]버킷 이름***
  * 리전 선택
  * 새 ACL(액세스 제어 목록)을 통해 부여된 버킷 및 객체에 대한 퍼블릭 액세스 ***___차단 해제___***
    - S3은 새로 추가된 버킷 또는 객체에 적용되는 퍼블릭 액세스 권한을 차단하며, 기존 버킷 및 객체에 대한 새 퍼블릭 액세스 ACL 생성을 금지합니다. 이 설정은 ACL을 사용하여 S3 리소스에 대한 퍼블릭 액세스를 허용하는 기존 권한을 변경하지 않습니다.
  * 임의의 ACL(액세스 제어 목록)을 통해 부여된 버킷 및 객체에 대한 퍼블릭 액세스 ***___차단 해제___***
    - S3은 버킷 및 객체에 대한 퍼블릭 액세스를 부여하는 모든 ACL을 무시합니다.

### 버킷 권한 설정
- CORS 구성 변경
  * XML 문서 설정 ***CORSConfiguration***
    - [Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html)
    
    
### 자격 증명 풀 생성
- [Amazon Cognito](https://ap-northeast-2.console.aws.amazon.com/cognito/home?region=ap-northeast-2)
  - 자격 증명 풀 이름 입력
  - 인증되지 않은 자격 증명에 대한 액세스 활성화 체크
  - 생성
    - ***unauthenticated*** 의 정책 문서 보기 ___클릭___
    - [편집 후 확인](https://aws-amplify.github.io/docs/android/authentication#d0e908)
    - [허용할 정책 정의](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html)
      * example.com/* 의 부분에 앞서 생성한 ***[1] 버킷 이름*** 을 대입.
        - ex) ***[1] 버킷 이름***/*, ***[1] 버킷 이름***
      * action 배열의 값 변경 - s3:GetObject -> s3:*
      * Sid 삭제
      * Principal 삭제
      
### 자격 증명 풀
- [샘플 코드](https://ap-northeast-2.console.aws.amazon.com/cognito/code/)
  * 플랫폼을 선택(개발 언어 - javascript)
  * [javascript 개발자 안내서](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html)
    * Step 에 맞춰 진행
    * [script latest](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
  
