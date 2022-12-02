# Pull Up State

> 가끔 일부 컴포넌트가 동일한 변경 데이터를 보여줘야 할 필요가 있다. 이 경우 공통 부모에 state 끌어올리는 걸 권장한다.

* 실시간 입력을 받을 때, 같은 부모를 가진 자식 컴포넌트의 state를 props로 변경하여 부모 컴포넌트의 메서드를 호출한다.
* 다음 `./src/example_source/temp_calc.js`는 state 끌어올리기 예시이다.

**temp_calc.js**
1. `<input>`에 입력값이 바뀔때마다 `onChange` 이벤트가 발생하고 `TemperatureInput` 컴포넌트의 `handleChange` 메서드를 수행한다.
2. `handleChange` 메서드는 부모의 `onTemperatureChange` 메서드를 호출하게 되고 `Calculator` 컴포넌트 내 섭씨, 화씨 컴포넌트에 대해서 각각 `this.handleCelsiusChange`와 `this.handleFahrenheitChange` 메서드로 정의된다.
3. 따라서 수정한 입력에 따라 두 `Calculator` 메서드 중 하나가 호출되는데 이는 지정한 `scale`과 `tryConvert`함수에 의해 변환되거나 혹은 바로 반환될 `celsius`와 `fahrenheit`에 의해 `setState`된다.
4. `Calculator` 컴포넌트에서 새롭게 렌더링되어 계산된 `props`는 `TemperatureInput`의 `render` 메서드를 호출된다.
> 다음과 같은 수행을 통해 `input`이 동기화 상태를 유지한다.
