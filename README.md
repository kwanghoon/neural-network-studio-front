# Socket

[ Socket 관련 Dto, Event ](https://github.com/Stonebridge-soma12/otherFronts/tree/feat/src/core/Socket)

## Page

- 접근 가능한 페이지
  - 메인 페이지
  - 로그인 페이지
  - 회원가입 페이지

- 접근 불가능한 페이지 (로그인 해야함)
  - 에셋 페이지
  - 프로젝트 페이지
  - 프로젝트 설정 페이지
  - 대시보드 페이지
  - 프로필 페이지
  - 프로필 수정 페이지
  - 대시보드 생성 화면
  - 프로젝트 공유 페이지
  - 프로젝트 설정 공유 페이지

## Page에서 생기는 Event

- 페이지 접속
  - 로그인 하지 않은 상태
    - 접근 가능한 페이지
      1. [x] 그대로 접속
    - 접근 가능하지 않은 페이지
      1. [x] 로그인 페이지로 이동
      2. [x] 로그인을 해야지 접속할 수 있다는 메시지 출력

- 로그인
  - 로그인 성공
    1. [x] 메인 페이지로 진입
  - 로그인 실패
    1. [x] 로그인 실패 메시지 출력

- 로그아웃
  - 로그아웃 성공
    1. [x] 메인 페이지로 이동
    2. [x] 로그아웃 성공 메시지 출력
  - 로그아웃 실패
    1. [x] 로그아웃 실패 메시지 출력

- 회원가입
  - 회원가입 성공
    1. [x] 메인페이지로 이동
    2. [x] 회원가입 성공 메시지 출력
  - 회원가입 실패
    1. [x] 회원가입 실패 메시지 출력

- 비밀번호 수정
  - 비밀번호 수정 성공
    1. [ ] 메인 페이지로 이동
    2. [ ] 비밀번호 수정 성공 메시지 출력
  - 비밀번호 수정 실패
    1. [ ] 비밀번호 실패 메시지 출력

- 프로필 수정
  - 프로필 수정 성공
    1. [ ] 프로필 화면으로 이동
    2. [ ] 프로필 수정 성공 메시지 출력
  - 프로필 수정 실패
    1. [ ] 프로필 수정 실패 메시지 출력

- 프로젝트 생성
  - 프로젝트 생성 성공
    1. [ ] 대시보드 페이지 or 생성한 프로젝트 페이지 선택 모달 출력
      1. 대시보드 페이지 선택
        1. [ ] 대시보드 페이지로 이동
      2. 프로젝트 페이지 선택
        1. [ ] 프로젝트 페이지로 이동

- 프로젝트 페이지 접속
  1. [ ] 첫번째 프로젝트면 설명하는 모달 출력

- PythonCode 추출
  - PythonCode 추출 성공
    1. [ ] PythonCode 추출 성공 메시지 출력
  - PythonCode 추출 실패
    1. [ ] PythonCode 추출 실패 메시지 출력

- Project 저장
  - Project 저장 성공
    1. [ ] Project 저장 성공 메시지 출력
  - Project 저장 실패
    1. [ ] Project 저장 실패 메시지 출력
      - [ ] Node 이름이 중복될 경우
      - [ ] Input Type이 안맞을 경우


- Project Config 저장
  - Project Config 저장성공
    1. [ ] Project Config 저장 성공 메시지 출력
  - Project Config 저장실패
    1. [ ] Project Config 저장 실패 메시지 출력

- Project Share
  - 프로젝트 입장시
    1. [ ] 프로젝트 입장한 사람 이름 메시지 출력
  - 프로젝트 퇴장시
    1. [ ] 프로젝트 퇴장한 사람 이름 메시지 출력
