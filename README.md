# 📖 프로젝트 소개

**마루는 강쥐! 게시판(프론트엔드)**는 **Spring Framework와 React를 활용한 커뮤니티형 웹 애플리케이션**입니다.
사용자는 로그인 후 자유롭게 게시글을 작성하고, 게시물 목록을 확인하며 소통할 수 있습니다. 또한, react-session-api를 활용하여 **세션 기반 로그인 유지 기능**을 구현하여 보안성과 편의성을 높였습니다.

- **개발기간**: 2024.10.28 ~ 2024.10.30 (2일)
- **개발인원**: 1인 (개인 프로젝트)
- **프론트엔드 프로젝트**: https://github.com/ujin302/SpringReactProject
- **주요기능**
  - react-session-api를 활용한 로그인 & 로그아웃
  - 로그인 상태에 따른 메뉴바 동적 변경
  - 게시물 목록 출력
  - 로그인 시, 게시물 작성
  - 게시물 상세 보기
  
---

## 🔧 기술 스택
- **백엔드**: Spring Framework, MyBatis
- **프론트엔드**: React, HTML, CSS, JavaScript
- **데이터베이스**: NCP(DB 구축), MySQL

---
## 🎰 주요 기능 및 스크린 샷

### 1. **로그인 화면**
- ‘로그인’ 메뉴 클릭 시, 로그인 화면 출력
- 아이디와 비밀번호 유효성 검사
- 로그인 실패 시, 실패 팝업 발생과 함께 실패 문구 ‘로그인 정보가 올바르지 않습니다.’ 노출


![로그인](https://github.com/user-attachments/assets/563f1523-c095-4c68-b037-a023816537cf)로그인화면 | ![유효성검사](https://github.com/user-attachments/assets/b536e3ff-1c0e-49c4-8009-ff33ed7b2dad)유효성 검사 |
---|---|

![로그인 실패](https://github.com/user-attachments/assets/cd6c3b67-4771-4137-8419-539c65b1d877)로그인 실패 팝업 | ![로그인 실패 2](https://github.com/user-attachments/assets/722b68c8-0b76-4ffa-913a-2dc41d1d3a25)로그인 실패 문구 |
---|---|


### 2. **로그인 상태에 따른 메뉴바 동적 변경**
- 기존 ‘로그인’에서 ‘로그아웃’ 으로 기능 변경
- 상단바에 계정 이름 노출되며 메인화면으로 자동 이동


![로그인 전](https://github.com/user-attachments/assets/c215be11-8146-4cc2-ae26-50b9f9ad83d0) 로그인 전 메인화면 | ![로그인성공](https://github.com/user-attachments/assets/7c55630f-73b6-4743-9d4b-8c7991d149e3)로그인 후 메인화면 |
---|---|


### 3. **게시물 목목**
- ‘게시물’ 메뉴 클릭 시, 게시물 목록 출력
- 로그인 전에 ‘게시물 작성’ 버튼 클릭 시, ‘로그인 후, 사용 가능한 기능입니다.’ 팝업 발생
- 로그인 판단은 `react-session-api`  활용함

![게시물 목록](https://github.com/user-attachments/assets/29d8dd61-3bc8-478b-af8d-f593fb8cd41b)게시물 목록 | ![회원 기능](https://github.com/user-attachments/assets/f21b3e48-9f20-4b34-8116-572b2fb2cf44)회원 기능 | 
---|---|


### 4. **게시물 작성**
- 제목과 내용을 입력하지 않고 ‘작성’ 버튼 클릭 시, ‘필수 입력 사항을 확인하세요.’ 문구 노출
- 제목과 내용 모두 입력 시, 게시물 작성 가능
- 게시물 작성 성공 시, 게시물 목록 화면으로 이동하며 가장 마지막에 게시물 확인 가능


![유효성 검사](https://github.com/user-attachments/assets/624d9537-05ce-4b6e-b3a5-286f499678b9)유효성 검사 | ![게시물 작성](https://github.com/user-attachments/assets/59572b6b-89f5-4cd3-a03f-5d38170dfcfa) 게시물 작성 | ![작성 성공](https://github.com/user-attachments/assets/2a60161c-f767-489b-a7c9-3e2c4f3da057) 게시물 작성 성공
---|---|---|


### 5. 게시물 상세보기
- 게시물 상세보기는 로그인 전에도 확인 가능


![로그인 후](https://github.com/user-attachments/assets/3f018cc5-21a2-43e3-a869-2a5e05817319)로그인 전 | ![로그인 전](https://github.com/user-attachments/assets/88056c1a-5609-4e0a-9e7a-befc42207fdb)로그인 후 |
---|---|
