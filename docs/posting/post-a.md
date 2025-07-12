# 백엔드가 NestJS로 API를 바꿨다는데... 프론트는 어디부터 봐야 할까?

## 들어가며

얼마 전, 우리 팀 백엔드가 기존 API를 싹 갈아엎었다. 그것도 FastAPI에서 NestJS로. "바뀌었습니다\~" 라는 메시지를 보고 PR을 열어보긴 했는데, 처음 보는 Nest 구조에 머리가 띵해졌다. 익숙한 FastAPI의 함수 스타일이 아니라 controller, service, dto 같은 생소한 단어들이 폴더마다 흩어져 있는 구조였다.

프론트엔드 입장에서는 이럴 때가 가장 당황스럽다. 응답 구조가 바뀌었는지, 요청에 필요한 필드가 추가됐는지, 아니면 URL 자체가 사라졌는지조차 알기 어렵기 때문이다. 그래서 "도대체 어디부터 봐야 하지?"를 기준으로, FastAPI 경험자 입장에서 NestJS를 빠르게 따라잡는 두 가지 실전 꿀팁을 공유해 본다.

## 왜 이런 팁이 필요한가?

프론트엔드는 결국 백엔드 API에 강하게 의존한다. API 스펙이 바뀌면 화면 로직, 변수명, 에러 처리까지 다 고쳐야 한다. 근데 문제는 NestJS 구조가 생각보다 복잡하다는 점. "아 이거 어디서 처리되더라?" 싶은 순간들이 많다.

실제로 나도 처음엔 controller만 보면 되겠지 했는데, 응답 구조는 dto에서, 내부 로직은 service에서 따로 처리되고 있었다. 결국 디렉토리 전체를 뚫어져라 봐야 겨우 이해가 되는 구조였다.

그래서 정리한 것이 이 두 가지다:

1. Git 히스토리로 어떤 API가 바뀌었는지 빠르게 찾기
2. FastAPI 구조에 빗대어 NestJS 파일 구조를 빠르게 파악하기

## 개념 설명: FastAPI vs NestJS 구조 비교

FastAPI는 함수 하나에 모든 로직이 들어있는 간단한 구조다. 반면 NestJS는 OOP 기반이라 역할이 명확히 나뉜다. 익숙한 FastAPI 기준으로 NestJS를 정리하면 다음과 같다:

| 역할        | FastAPI 예시           | NestJS 예시                                | 설명              |
| --------- | -------------------- | ---------------------------------------- | --------------- |
| 라우팅       | `@app.get("/users")` | `@Get()`, `@Post()` in `*.controller.ts` | API URL, 메서드 정의 |
| 비즈니스 로직   | 함수 내부                | `*.service.ts`                           | 실제 동작 처리        |
| 모델/스키마 정의 | `pydantic.BaseModel` | `*.dto.ts`, `*.entity.ts`                | 요청/응답 구조 정의     |
| 전체 흐름     | 하나의 함수로 구성           | Controller → Service 구조 (OOP 기반)         | 분리 구조           |

✅ **전체 구조: NestJS에서 API 코드 흐름 이해하기**

| 순서  | NestJS 파일 역할      | FastAPI 대응                   |
| --- | ----------------- | ---------------------------- |
| 1️⃣ | Controller (라우팅)  | @app.get, @app.post 데코레이터 함수 |
| 2️⃣ | Service (비즈니스 로직) | Python 함수나 class 로직          |
| 3️⃣ | Module (연결/등록)    | FastAPI엔 없음 (자동 Wiring)      |
| 4️⃣ | DTO (요청/응답 구조 정의) | pydantic.BaseModel           |
| 5️⃣ | Entity (DB 모델)    | SQLAlchemy 모델                |
| 6️⃣ | Route             | FastAPI의 라우터 구조와 유사          |

## 실무 적용 팁 1: Git History로 변경 내용 빠르게 추적하기

일단 무턱대고 코드를 보기보다, Git 기록을 먼저 확인하자. 실무에선 이게 훨씬 빠르다.

### 🔍 Git Log에서 API 관련 커밋 찾기

```bash
git log --grep="api" --oneline
```

`"feat: update user API"` 같은 커밋 메시지가 보이면 바로 체크.

### 🔍 특정 파일 변경 내역 확인

```bash
git log -p path/to/user.controller.ts
```

어떤 엔드포인트가 추가/삭제/수정됐는지 바로 알 수 있다.

### 🔍 GitHub Pull Request 확인

PR에 설명이 잘 써 있는 경우가 많다. "회원 가입 API에서 password 필드가 없어졌습니다" 같은 문장이 한 줄만 있어도 큰 도움이 된다.

## 실무 적용 팁 2: NestJS 구조를 FastAPI 관점에서 분석하기

FastAPI 경험자라면 NestJS의 파일 구조가 처음엔 낯설게 느껴질 수 있다. 하지만 역할을 대입해서 보면 빠르게 익숙해질 수 있다.

✅ **지금 상황: 백엔드가 API를 수정했다고 함 → 어디서부터 봐야 할까?**

### 1️⃣ Controller에서 URL 경로 찾기

```ts
// 예시: user.controller.ts
@Controller('users')  // → "/users" 경로
export class UserController {
  @Get()
  getAllUsers() {
    ...
  }

  @Post('create')  // → POST /users/create
  createUser(@Body() dto: CreateUserDto) {
    ...
  }
}
```

→ FastAPI의 `@app.get("/users")`와 같은 역할입니다.

### 2️⃣ 수정된 API가 무엇인지 명세를 먼저 파악

질문 예시:

* 어떤 HTTP 메서드가 수정되었나요? (GET, POST, PATCH, DELETE)
* 어떤 URL인가요? (`/users/:id`, `/order/create` 등)
* 응답 JSON이 달라졌나요? 아니면 파라미터가 바뀌었나요?

→ 이걸 알면 controller 파일에서 바로 해당 핸들러를 찾을 수 있습니다.

### 3️⃣ controller → service 흐름으로 들어가면서 로직 파악

```ts
@Post()
create(@Body() dto: CreateDto) {
  return this.userService.create(dto);
}
```

→ FastAPI의 `def create_user(dto): ...`과 똑같은 구조 → 이때 비즈니스 로직은 `user.service.ts` 안에서 처리

### 4️⃣ DTO와 Entity는 FastAPI의 Pydantic / SQLAlchemy와 동일 개념

```ts
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
```

→ FastAPI에서 `class CreateUser(BaseModel):`로 하던 것과 거의 동일

### 🎯 실전 팁: 내가 NestJS에서 백엔드 수정 확인할 때 어디를 본다?

| 단계 | 체크 포인트                                                 |
| -- | ------------------------------------------------------ |
| 1. | URL, Method 먼저 확인 → controller 파일에서 `@Get`, `@Post` 확인 |
| 2. | 핸들러가 어떤 서비스 호출하는지 → `this.xxxService.someMethod()` 확인  |
| 3. | 실제 로직은 서비스 파일 안에 있음 → `service.ts` 열어서 메서드 본문 분석       |
| 4. | DTO로 받은 입력값 구조 확인 → `dto.ts` 파일에서 필드와 유효성 검사 보기        |
| 5. | DB까지 바뀌었는지 보려면 → `entity.ts` 파일 확인 (TypeORM)           |

### 🧩 FastAPI vs NestJS 비교 예시 (POST /user)

| FastAPI                           | NestJS |
| --------------------------------- | ------ |
| \`\`\`python                      |        |
| @app.post("/user")                |   def create\_user(dto: UserCreate):     |
| return create_user_logic(dto)|@Post('user') create(@Body() dto: UserCreateDto) { return this.userService.create(dto); } |



→ 거의 대응되지만 NestJS는 `@Controller`와 `@Module`로 구조를 분리했다는 차이뿐입니다.


## 다른 기술과의 비교 및 한계

| 항목 | FastAPI | NestJS |
|------|---------|--------|
| 구조 이해 난이도 | 낮음 | 높음 (처음엔 어렵지만 유지보수엔 유리) |
| API 탐색 속도 | 빠름 | 구조를 이해해야 빠르게 가능함 |
| 타입 안정성 | 낮음 | 높음 (TypeScript 기반) |
| 커뮤니티/도큐먼트 | 빠르게 성장 중 | 방대하고 정형화되어 있음 |

NestJS는 러닝커브가 있지만, 일단 익숙해지면 구조적이라 협업에 강하다. 하지만 입문 시엔 다소 복잡하게 느껴질 수 있다.


## 마무리 요약 및 학습 리소스 추천

NestJS가 낯선 프론트엔드 입장에서, API 변경이 생겼을 때 아래 두 가지만 기억하면 된다:

1. **Git으로 바뀐 API 지점을 빠르게 찾기**
2. **FastAPI 관점에서 controller, service, dto 파일 순서로 확인하기**

처음엔 낯설어도 익숙한 관점으로 접근하면 구조가 눈에 들어오기 시작한다. 그리고 무엇보다, 백엔드에게 변경된 API 문서나 설명을 요청하는 것도 절대 부끄러운 일이 아니다 :)

### 📚 추천 학습 자료
- [NestJS 공식 문서](https://docs.nestjs.com/controllers)
- [실전 NestJS 강의 (Inflearn)](https://www.inflearn.com/course/nest-js)
- [NestJS 실무 구조 해설 블로그](https://velog.io/@tagged/nestjs)


## #해시태그

#NestJS #FastAPI #프론트엔드 #백엔드API변경 #실무팁 #Git히스토리 #API디버깅

```
