# TypeORM 500에러 트러블슈팅: column does not exist 오류 해결기

## 🧭 문제 상황 요약

- NestJS + TypeORM 환경에서 API 목록 조회 시 Swagger에서 **500 Internal Server Error** 발생
- 콘솔 로그에 다음과 같은 오류 메시지 출력됨:

```bash
QueryFailedError: column extern_apis.path does not exist
```

## 🧩 원인 분석

### 1. Entity에 스키마 지정이 되어 있음

```ts
@Entity({ name: 'extern_apis', schema: 'api_adapter2' })
```

- TypeORM은 해당 테이블을 **"api_adapter2.extern_apis"** 로 인식
- 실제 DB에 `api_adapter2`라는 **스키마가 존재하지 않음** → `column does not exist` 오류 발생

### 2. 데이터베이스에 테이블 및 컬럼이 자동 생성되지 않음

- `synchronize: false`로 되어 있었던 경우, DB에는 아직 테이블 구조가 반영되지 않음
- 즉, 엔티티에만 정의되어 있고 DB에는 존재하지 않는 컬럼에 대해 SELECT 쿼리 실행됨

---

## ✅ 해결 방법

### 1. Entity에서 schema 제거

```ts
// before
@Entity({ name: 'extern_apis', schema: 'api_adapter2' })

// after
@Entity({ name: 'extern_apis' })
```

### 2. TypeORM 설정에서 synchronize: true 적용 (개발 환경 한정)

```ts
// database.config.ts 또는 ormconfig.ts
synchronize: true; // 개발환경에서만 권장
```

적용 후 NestJS 재시작 시 DB에 테이블이 자동 생성되고, 오류 사라짐

---

## ⚠️ 주의사항: 운영 환경에서의 synchronize 사용 금지

`synchronize: true`는 개발에는 편리하지만 운영 환경에선 다음과 같은 이유로 금지됨:

- 기존 데이터 손실 가능성
- 예기치 않은 스키마 변경 반영
- 마이그레이션 이력 관리 불가

### 🛠️ 운영환경에서는 이렇게

- `synchronize: false`
- `typeorm migration:generate`로 마이그레이션 생성
- `typeorm migration:run`으로 안전하게 반영

---

## ✅ 트러블슈팅 결과 요약

| 항목         | 결과                                  |
| ------------ | ------------------------------------- |
| 오류 원인    | 잘못된 스키마 설정 + 테이블 미생성    |
| 해결 방법    | 스키마 제거 + synchronize: true 적용  |
| Swagger 동작 | ✅ 성공적으로 API 목록 조회 가능      |
| 향후 계획    | 운영환경에서는 마이그레이션 사용 예정 |

---

## 📌 참고 쿼리 (실제 오류 쿼리)

```sql
SELECT "extern_apis"."path" FROM "extern_apis" ...
-- → DB에 extern_apis 테이블이 없거나, path 컬럼이 존재하지 않으면 실패
```

---

## 📚 관련 키워드

- NestJS
- TypeORM
- Entity
- synchronize
- schema
- PostgreSQL
- 마이그레이션 전략
