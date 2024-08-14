# 급여관리 시스템

<!--배지-->
![Repository Size][repository-size-shield] ![Issue open][issue-open-shield] ![Issue Closed][issue-closed-shield] ![Issue PR][issue-PR-shield] ![Issue PRClosed][issue-PRclosed-shield]

<!--프로젝트 대문 이미지-->
![Project Title](https://github.com/user-attachments/assets/e198b681-7bd5-435f-9bce-15eb4e42eee8)

### [프로젝트 사이트](https://toy-project-2.web.app/)
#### ID: `test1@gmail.com` PW: `123123`
<!--목차-->
# 목차
- [📚 프로젝트 설명](#-프로젝트-설명)
  - [프로젝트 목적](#프로젝트-목적)
  - [프로젝트 기대효과](#프로젝트-기대효과)
  - [🛠️ Tech Stack](#️-tech-stack)
- [📷 프로젝트 예시](#-프로젝트-예시)
- [⚙️ 시작하기](#️-시작하기)
  - [사전 준비사항](#사전-준비사항)
  - [설치](#설치)
  - [구성](#구성)

# 📚 프로젝트 설명

- 급여관리 시스템을 설계하고 개발합니다. 이 시스템은 관리자용과 사용자용으로 구분하여 개발이 필요합니다. 사용자는 개인 급여 내역 확인, 정정 신청, 일정 관리를 할 수 있습니다.

## 프로젝트 목적

1. 급여 관리의 효율성 극대화:
급여 관리 시스템을 통해 급여 정보의 조회, 정정 신청, 일정 관리 등을 효율적으로 수행하여 조직 전체의 업무 효율성을 극대화합니다.

2. 사용자 편의성 제공:
사용자가 쉽게 접근하고 사용할 수 있는 시스템을 구축하여, 직원 모두에게 편리한 서비스를 제공합니다.

3. 데이터 정확성 보장:
정정 신청 기능을 통해 데이터의 정확성을 보장하고, 급여 처리의 오류를 최소화합니다.

4. 조직 전체 일정 관리:
캘린더 기능을 통해 조직 전체의 일정 관리와 조정을 용이하게 합니다.

## 프로젝트 기대효과

1. 업무 효율성 향상:
급여 관리 시스템을 통해 직원 모두 급여 정보를 쉽게 접근하고 관리할 수 있습니다. 정정 신청 절차를 간소화하여 업무 효율성을 높일 수 있습니다.

2. 정확한 급여 처리:
정정 신청 기능을 통해 급여 오류를 최소화하고 정확한 급여 처리를 보장할 수 있습니다.

3. 일정 관리 개선:
캘린더 기능을 통해 직원들은 자신의 업무 일정을 효율적으로 관리하고, 관리자는 조직 전체의 일정을 감독할 수 있습니다.

4. 사용자 만족도 증가:
직관적이고 사용하기 쉬운 인터페이스를 제공하여 사용자의 만족도를 높일 수 있습니다. 직원들은 급여 정보를 쉽게 확인하고, 필요시 정정 신청을 할 수 있습니다.

## 🛠️ Tech Stack

### 🧑‍💻 Front-End 🧑‍💻

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

### 🧑‍💻 Back-End 🧑‍💻

![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

### 💻 기타 💻

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

# 📷 프로젝트 예시

## 🔎 [사용자 페이지]

| 사용자 페이지 |
|----------|
|![사용자 페이지](https://github.com/user-attachments/assets/0932644f-3445-4f96-b7d4-04faf40864b8)

---

# ⚙️ 시작하기

## 사전 준비사항

- [Firebase](https://firebase.google.com/?hl=ko)
- pnpm

```bash
npm install -g pnpm
```

## 설치

1. Repository 클론

```bash
https://github.com/sbs1253/toy-project-ii-solo.git
```

2. packages 설치

```bash
pnpm i
```

## 구성

- `firevase.js`에 있는 Config파일에 [firebase](https://firebase.google.com/?hl=ko)에 있는 SDK 입력

```bash
const firebaseConfig = {
  apiKey: 
  authDomain: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId: 
}
```

- DB에 저장된 데이터 형식에 맞게 변환 후 사용

<!--Url for Badges-->
[repository-size-shield]: https://img.shields.io/github/repo-size/sbs1253/toy-project-ii-solo
[issue-open-shield]: https://img.shields.io/github/issues/sbs1253/toy-project-ii-solo?color=abcdef
[issue-closed-shield]: https://img.shields.io/github/issues-closed/sbs1253/toy-project-ii-solo?color=4ec920
[issue-PR-shield]: https://img.shields.io/github/issues-pr/sbs1253/toy-project-ii-solo?color=abcdef
[issue-PRclosed-shield]: https://img.shields.io/github/issues-pr-closed/sbs1253/toy-project-ii-solo?color=4ec920

<!--Url for Buttons
[readme-eng-shield]: 
[view-demo-shield]:
[view-demo-url]: 
[report-bug-shield]:
[report-bug-url]:
[request-feature-shield]:
[request-feature-url]:
-->

<!--URLS-->
