#front-end-beginer
#javascript30

#01-Javascript Drum Kit
1. css에서 실행되는 애니메이션이 있는데, 이를 제어할 수 있다. 
    - 'transitionend'로, 'transition'이 마치는 시점에서 이벤트를 활용하는 것으로 추측.
2. HTML tag audio를 활용해 재생을 컨트롤 가능하다.
    - 재생가능
    - 재생시점을 초기화가능
3. JQuery를 활용하지 않아도 document.querySelector()를 활용하면 JQuery selector와 동일하게 사용가능하다.
4. ES6 문법
    - 백틱 내 `abcde ${variable}` ${}의 위치에 소스코드를 대입하여 넣을 수 있다.
    - '=>' arrow function은 다소 익숙해질 필요가 있어보인다.


#02-CSS+JS_Clock
1. css에서 애니메이션을 담당하는 transition, 형태를 변하게 하는 transform을 활용
    - transform-origin: 100%; /*default : 0%, -?% ~ ?%, 중앙지점을 기준으로 모양을 변하게 한다.*/
    - transform: rotate(?deg); /*default: 0deg, 회전을 하며 각도를 지정한다.*/
    - transition: all 0.05s; /*에니메이션이 동작하는 총 시간을 설정한다. 이 부분을 빼먹어서 원하는 애니메이션이 동작하지 않았다.*/
    - transition-timing-function: cubic-bezier(?, ?, ?, ?); /*에니메이션이 동작하는 방식을 설정한다. chrome의 개발자도구를 활용하면 어떤 애니메이션으로 동작할지 시각화하여 볼 수 있고, 미리 활용도 가능하다. 잘 활용한다면 유려한 UI를 만들 수 있을 것으로 기대된다.*/
2. 굳이 jQuery를 활용하지 않아도 쉽게 style을 변경할 수 있다.
    - hourHand.style.transform = `rotate(${hourDegrees}deg)`;
3. setInterval(function(){}, microSeconds);
    - 자주 활용되는 문구이기는하나, 과거 무거운 function은 활용했다가 browser가 뻗어버리는 경우가 있었다. 조심히 활용토록 하자.


#03-Playing with CSS vatiables and JS
1. css의 변수(variable)을 관리가 가능.
    - document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      ; 위와 같은 형식으로 해당 변수를 수정이 가능하게끔 해두었다. 상세한 컨트롤 방법은 css에 대한 학습이 필요한 것으로 생각된다.
2. EventListener
    - change : 값이 변경된 후를 감지함. 드래그하는 동안의 값의 변경은 감지하지 않음
    - mousemove : 마우스가 이동하는 것음 감지한다. 추후 강의에서 함수를 추가하게 되는데, 모든 움직임을 감지하기 때문에 리소스를 줄여주기 위한 함수를 추가해야 한다.
3. input의 type
    - range : 값의 범위를 드래그하여 사용한다.
    - color : 색을 지정할 수 있는 타입.
4. html tag 내 data 관리
    - tag 내 'data-'라는 접두어를 붙여서 데이터를 관리할 수 있다.
    - const suffix = this.dataset.sizing || '';
        ; this는 해당 tag의 인스턴스를 뜻하며, dataset을 호출하면 해당 인스턴스의 모든 'data-'로 나타낸 것들을 객체형태로 호출할 수 있다.


#04-Array Cardio Day 1
1. Array 내 prototype 함수 중 유용한 것들이 다음과 같이 있다.
    - 1.1. Array.prototype.filter()
        ; 해당 배열을 순회하면서 필터링을 한 값을 return해준다. true를 return하면 해당 element가 담긴 배열을 return 한다.
    - 1.2. Array.prototype.map()
        ; 해당 배열을 순회하면서 가공된 값이 담긴 배열을 return한다.
    - 1.3. Array.prototype.sort()
        ; 해당 배열을 순회하면서 오름차순, 내림차순으로 정렬한다.
    - 1.4. Array.prototype.reduce()
        ; map()의 경우 element마다 가공된 값을 배열으로 return했다면, reduce()의 경우는 customizing하게 가공한 값을 전달할 수 있다.
        -- map() :: element만 가공하여 배열에 담는다. 순회하면서 정리된 누적값, 이전 element와의 비교는 할 수 없다.
        -- reduce() :: map()보다 포괄적인 return이 가능하다. 순회하면서 return된 값을 토대로 편집이 가능하다. 이를 위해서는 반드시 return하는 값의 datatype을 일치해줘야 한다.

2. 1번에서 설명한 함수들을 활용하기 위해서는 datatype이 Array로 변경되어야 사용할 수 있다.
    - const links = category.querySelectorAll('a');     //datatype이 nodeList로서 map()이 prototype에 들어 있지 않음. 이에 따라 Array로 변경해줘야 함.
    - const links = Array.from(category.querySelectorAll('a'));   //ES6 이전
    - const links = [...category.querySelectorAll('a')];   //ES6

3. 1번의 함수들은 java에서는 stream으로 검색하면 활용이 가능하다.
    - java에서는 datatype에 대한 조건이 까다로워서, javascript처럼 동일하게 사용할 수는 없다.

4. 1번의 함수들은 과거 for문(statement)보다 훨씬 빠른 순회가 가능하다.
    - java의 stream에서 해당 내용을 정리할 예정.

5. 배열을 리턴하는 일부 함수의 경우 다음과 같이 활용이 가능하다.
    - const parts = lastOne.split(', ');          //이와 같이 하면 코드가 지저분해지기 쉽다. 불필요하게 길어지는 경우가 존재한다.
    - const [aLast, aFirst] = lastOne.split(', ');  //현재와 같이 사용하면 간결하고 명시적으로 활용이 가능하다.


#05-Flex-Panels-Image-Gallery
1. CSS에 대한 이해가 많이 필요하다...
    - .panels { display: flex; } : 해당 tag의 하위 html tag들을 flex로 보여주는 역할을 한다. default로 가로로 배열을 보여주게끔한다.
    - .panel {
        flex: 1;     : 가로로 정렬된 패널이 각 1:1:1:1:1의 비율로 정돈하게끔 해준다. 이 값이 없으면 화면이 조정됨에 따른 유동적인 변화가 이뤄지지 않는다.
        justify-content: center;        : https://css-tricks.com/almanac/properties/j/justify-content/
        align-items: center;        : https://css-tricks.com/almanac/properties/a/align-items/
        display: flex;      : flex 활용
        flex-direction: column;     : flex가 정렬되는 방향
      }
    - .panel > * {             : 하위의 자식 노드를 모두 선택. 자식의 자식까지 해당하지는 않는다.
        border: 1px solid red;
        flex: 1 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    -   .panel > *:first-child { transform: translateY(-100%); }
        .panel.open-active > *:first-child { transform: translateY(0); }
        .panel > *:last-child { transform: translateY(100%); }
        .panel.open-active > *:last-child { transform: translateY(0); }
        ; first-child, last-child - css에서 자식노드 중 선택할 수 있는 예약어로 추측된다.

2. this.classList.toggle('open-active');
    - classList : class를 List로 반환
    - toggle('open-active') : 켰다, 껐다하는 on/off 스위치처럼 'open-active'라는 class가 없으면 추가하고, 존재하면 없앤다.


#06-Ajax Type Ahead
1. fetch API
    - Request나 Response와 같은 HTTP의 파이프라인을 구성하는 요소를 조작하는것이 가능
    - fetch() 메서드를 이용하는 것으로 비동기 네트워크 통신을 알기쉽게 기술할 수 있음
    - 상세 내용은 다음을 참조 : https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95

2. fetch API보다 axios가 더 많은 기능을 제공하므로 이런 기능이 javascript 기본 기능에 제공한다는 것을 기억해두자.
    - axios를 활용하지 못하는 환경이라면 해당 api를 활용할 수도 있을 것이다.

3. ES6 문법
    - cities.push(data) : cities[?] 인 인덱스에 1000개의 배열데이터를 집어 넣는다.
    - cities.push(...data) : [ES6] cities의 n ~ n+999 마다 데이터를 push한다.


#07-Array_Cardio_Day2
1. Array.prototype.some()
    - Array 중 작성한 function의 하나라도 true로 리턴되면, 결과값으로 true를 리턴한다.

2. Array.prototype.every()
    - Array 중 모든 index의 값이 전부 true가 되어야만, 결과값으로 true를 리턴한다.

3. Array.prototype.find()
    - 조건에 부합하는 value를 리턴한다.
    - 배열을 모두 순회하여 조건에 부합하는 모든 것을 찾아주는 것이 아닌, 0으로부터 가장 가까운 위치에 존재하는 value를 리턴한다.

4. Array.prototype.findIndex()
    - 3번과 동일한 로직이나 이 매서드는 인덱스를 리턴한다.


#08-Fun with HTML5 Canvas
1. addEventListener({eventName}, {Function})
    - mousedown : 마우스 클릭시 이벤트 발생
    - mousemove : 마우스 이동시 이벤트 발생
    - mouseup : 마우스 클릭 후 떼었을때
    - mouseout : 마우스가 해당 브라우저를 벗어나면 발생
2. Event
    - e.offsetX, e.offsetY : 이벤트가 발생한 위치의 좌표
3. Canvas
    - 선을 그리는 다양한 방법이 존재함. 예제는 해당 소스를 참조하여 확인하는 것이 나음


#09-14 Must know dev tool tricks
1. Chrome dev tool을 활용한 방법들 중 console.???()을 활용한 방법들을 기술함
    - console.log()
        -- console.log('Hello I am a %s string!', 'abcdef'); //format을 활용한 대체
        -- console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue'); //스타일 적용도 가능, %c가 반드시 들어가야 한다.
    - console.warn() : 경고시 활용
    - console.error() : 흔히 오류가 나는 상황에 많이 접하는 메시지 형태.
    - console.info() : log()보다 조금더 높은 수준의 log
    - console.assert() : 첫번째 argument위치의 있는 값이 falsy이면 두번째 argument에 위치한 문자열이 error() 메소드 형태로 출력된다. 즉, 테스트 하는 것이라 보면 된다.
    - console.clear() : console의 내용을 삭제한다.
    - console > grouping
        -- console.group(), console.groupCollapsed() : 그룹이 시작이 되는 지점을 뜻하며, 그룹이 끝나는 지점(gorupEnd())까지 그룹화한다. group()은 하위 노드의 모든 내용을 펼쳐서 보여주고, groupCollapsed()는 그룹화한 후 펼펴서 보여주지는 않는다.
        -- console.groupEnd() : 그룹이 끝나는 위치
    - console.count() : parameter로 전달하는 값이 일치하는 들이면 console.count()를 호출한만큼 카운팅한다.
    - time(), timeEnd() : 시작 지점부터 끝지점까지 걸린 시간을 계산한다.
    - console.table() : console에 표(테이블)의 형태로 값을 보여준다. 배열(array, list)의 값을 조회할때 유용하다.

#10-Hold Shift and check checkboxes
1. 범위를 지정할때 매우 유용한 생각이며, 단순하고 직관적인 코딩이 적혀 있다.
    - 상세내용은 꼭 소스를 참조하는 것이 좋을것 같다.

#11-CUSTOM HTML5 Video player
1. Video와 관련된 eventListener 들이 있다.
    - pause : 일시정지
    - play : 재생
    - timeupdate : 재생시간의 변경

2. Video와 연관된 property가 있으니 참고한다.

3. input
    - range : 최소/최대/간격을 설정하는 것이 존재한다. 자주 활용할 수 있으니 알아두면 도움될 것 같다.