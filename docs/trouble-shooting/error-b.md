# ApiInfoResponse DTO 수정기

프론트엔드 폼 초기화가 자꾸 깨질 때, DTO와 Swagger를 다시 보게 된 이유

## 들어가며

최근 팀에서 API 상세 정보를 활용해 프론트엔드 폼을 자동 초기화하는 기능을 개발하던 중, 이상하게도 `form.baseUrl`, `form.httpMethod` 등이 `undefined`로 로딩되는 문제가 반복해서 발생했습니다. API 요청은 분명히 정상인데, 콘솔 로그로 찍어보면 데이터가 누락된 듯한 느낌이었죠.

처음에는 프론트 코드만 들여다봤지만, 결국 문제는 백엔드에서 응답 객체를 정의하는 `ApiInfoResponse` DTO에 있었습니다. 이 글에서는 이 문제를 어떻게 진단하고 해결했는지를 기록합니다.

## 왜 이 수정이 필요했는가?

### 기존 문제

프론트엔드에서는 다음 필드들이 `undefined`로 표시되었습니다:

* `baseUrl`
* `httpMethod`
* `pathTemplate`

디버깅 결과, 이 값들은 백엔드에서 아예 내려오지 않고 있었고, Swagger 문서에서도 빠져 있었습니다.

### 원인 분석

* `ApiInfoResponse`는 API 응답의 shape을 정의하는 DTO입니다.
* 이 클래스에 해당 필드들이 포함되지 않으면, NestJS는 직렬화하지 않고 클라이언트에 전달하지 않습니다.
* Swagger에서도 `@ApiProperty()` 데코레이터로 명시되지 않으면 문서에 포함되지 않습니다.
* 특히 enum 타입의 경우 `type: FooEnum`이 아닌 `enum: FooEnum`으로 지정해야 스펙이 Swagger에 노출됩니다.

## 어떤 수정을 했는가?

### 1. DTO 필드 추가

```ts
export class ApiInfoResponse {
  @ApiProperty({ enum: HttpMethod })
  httpMethod: HttpMethod;

  @ApiProperty()
  baseUrl: string;

  @ApiProperty()
  pathTemplate: string;

  @ApiProperty({ type: [ParameterType] })
  params: ParameterType[];

  constructor(api: ExternApi) {
    this.httpMethod = api.httpMethod;
    this.baseUrl = api.baseUrl;
    this.pathTemplate = api.pathTemplate;
    this.params = api.params;
  }

  static of(api: ExternApi): ApiInfoResponse {
    return new ApiInfoResponse(api);
  }
}
```

### 2. Swagger 데코레이터 보완

기존에는 `@ApiProperty({ type: FooEnum })`으로 작성되어 Swagger에 enum 값이 나오지 않았습니다. 올바른 방식은 `@ApiProperty({ enum: FooEnum })`입니다.

## 무엇이 달라졌는가?

| 항목                   | 내용                                      |
| -------------------- | --------------------------------------- |
| 🧩 정확한 데이터 전달        | `ExternApi`의 모든 필드를 프론트에 정확히 전달         |
| 🔍 디버깅 가능성 향상        | `console.log(apiData)` 시 필요한 정보가 모두 확인됨 |
| 📑 Swagger 문서 완성도 향상 | `/swagger` 문서에서 enum 포함 모든 필드가 노출됨      |
| 🛠 프론트 폼 초기화 문제 해결   | `form.baseUrl` 등 undefined 문제 해결        |
| 🧼 코드 가독성 향상         | DTO ↔ 엔티티 매핑 구조가 명시적으로 연결됨              |

## 마무리 요약 및 리소스

이번 수정은 작아 보이지만, API 응답의 신뢰성과 프론트 개발의 안정성을 동시에 확보할 수 있던 작업이었습니다. 특히 Swagger 문서를 제대로 정리하는 것만으로도 개발자 간의 커뮤니케이션 효율이 크게 향상됩니다.

### 참고한 공식 문서

* [NestJS Swagger 공식 문서](https://docs.nestjs.com/openapi/introduction)
* [TypeScript Enums 문서](https://www.typescriptlang.org/docs/handbook/enums.html)

---

## #해시태그

\#NestJS #Swagger #DTO #백엔드개발 #API문서화 #프론트백엔드연동 #개발일지
