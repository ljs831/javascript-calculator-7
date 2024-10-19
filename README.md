# javascript-calculator-precourse

# **🤜 week 1 : 문자열 덧셈 계산기**

## ✅ 구현 기능 목록

- [x] 사용자에게 입력 받아 저장하기
- [x] 입력받은 값을 구분자를 기준으로 숫자 분리해 저장하기
- [x] 분리한 숫자의 합 구하기
- [ ] 결과 출력하기
- [ ] 커스텀 구분자 입력받기
- [ ] 커스텀 구분자를 받은 경우, 커스텀 구분자를 기준으로 숫자 분리해 저장하기
- [ ] 입력이 잘못된 경우 에러메시지를 출력 후 종료하기

## 💡 문제 분석

- 입력값에서 숫자들만 뽑아서 더하는 프로그램
- 숫자는 구분자를 통해 구분하며, 기본 구분자는 `,` , `:`
- 사용자가 구분자를 지정(=커스텀 구분자) 할 수 있으며, `//{커스텀구분자}\n` 의 형식으로 입력
- 이 외의 잘못된 입력이 들어오면 `[ERROR]` 메시지를 출력하고 종료
