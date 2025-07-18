# 🛠️ Axios Invalid URL 오류 트러블슈티닝

## 📌 문제 상황

Vue3 + Element Plus 기반의 API 수정 페이지에서 API 테스트 또는 저장 시 다음과 같은 오류 발생:

```
Failed to construct 'URL': Invalid URL
```

---

## 🔍 원인 발생

Axios 내부에서는 URL을 조합할 때 다음것과 같은 방식으로 `baseURL`과 요청 경로를 합치며:

```ts
new URL(path, baseURL)
```

### 오류 발생 원인

* `baseURL` 또는 `path` 값이 유형한 URL 형식이 아닙을 경우
* 두 값의 조합이 올바른 절대 URL을 생성하지 못할 경우

---

## ✅ 재현 조건

프론트에서 입력한 API 정보 예시:

```json
{
  "baseUrl": "https://api.example.com/v1/api",
  "pathTemplate": "customers/{username}/info"
}
```

### 조합 결과

```ts
const url = baseUrl + pathTemplate
// → https://api.example.com/v1/apicustomers/{username}/info ← ❌ 슬래시 없음
```

이 조합은 **유형한 URL이 아닌데로 오류 발생**

---

## ✅ 해결 방법

### 1. pathTemplate 앞에 반복적으로 슬래시(`/`)를 포함할 것

```json
"pathTemplate": "/customers/{username}/info"
```

### 2. 또는 API 요청 코드에서 슬래시 자동 보정 로지크 추가

```ts
const joinUrl = (base: string, path: string) =>
  `${base.replace(/\/+$|$/, '')}/${path.replace(/^\/+/, '')}`;
```

---

## ✅ 추가 디버깅 포인트

### 1. API 수정 폼 제주 지점 로그 확인

```ts
console.log('[DEBUG] baseUrl:', form.baseUrl);
console.log('[DEBUG] pathTemplate:', form.pathTemplate);
```

### 2. 최종 호출 URL 로그 출력

```ts
console.log('[DEBUG] 최종 URL:', joinUrl(form.baseUrl, form.pathTemplate));
```

---

## 🧹 할 수 가 있는 감싸지

* API 수정 폼 입력값 유헌성 검사가가에 `pathTemplate`의 시작이 `/`인지 체크
* API 저장 전 `baseUrl`, `pathTemplate` 조합이 유형한지 사전 검증 단계 추가
* Axios 인스턴스 생성 시 `baseURL`과 `url` 분리 사용 방식 명확하게 구분

---

## ✅ 결단

| 항목 | 내용                                          |
| -- | ------------------------------------------- |
| 문제 | Axios 요청 시 Invalid URL 오류                   |
| 원인 | baseUrl과 pathTemplate 조합에서 슬래시 누르기          |
| 해결 | pathTemplate 앞에 슬래시(`/`) 포함 또는 URL 조합 함수 사용 |
