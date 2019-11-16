import { observable, observe, autorun, reaction, computed } from 'mobx';

const counterState = observable({
   count: 0,
   message: `안녕하세요. counter-app에 오신 것을 환영합니다.`,
});

const someValue = computed(() => {
   return counterState.count + '번';
});

// const diposer = observe(counterState, 'count', change => {
//    console.log(`${change.oldValue} ====>  ${change.newValue}`);
// })

const numEl = document.querySelector('.show-count');   //CamelCase보다 '-'로 구분하도록 한다.
const messageEl = document.querySelector('.show-message');
const intervalEl = document.querySelector('.interval');
const decrementEl = document.querySelector('.decrement');
const incrementEl = document.querySelector('.increment');
const resetEl = document.querySelector('.reset');

let intervalId = null;

function render() {
   numEl.innerHTML = counterState.count;
   messageEl.innerHTML = counterState.message;
}

// reaction
autorun(() => {
   render();
});

reaction(
   () => counterState.count,
   (value, reaction) => {
      if(value===0 && intervalId===null) {
         intervalId = setInterval(() => {
            counterState.message = `${counterState.message} 뭐라도 해볼까요?`;
         }, 2000);
      }
      else
      {
         clearInterval(intervalId);
      }
   },
);

function init() 
{
   decrementEl.addEventListener('click', decreseCount);  //addEventListener의 세번째 parameter는 추가적으로 공부해두자.
   incrementEl.addEventListener('click', increseCount);
   resetEl.addEventListener('click', reset);
   
   numEl.innerHTML = counterState.count;
   messageEl.innerHTML = counterState.message;
   intervalEl.value = 1;
   
   function decreseCount(event) {
      counterState.count = counterState.count - 1;
      counterState.message = '감소했습니다.';
   }
   
   function increseCount(event) {
      counterState.count = counterState.count + 1;
      counterState.message = '증가했습니다.';
   }
   
   function reset(event) {
      counterState.count = 0;
      counterState.message = '초기화했습니다.';
   }

}

window.onload = function() {
   init();
}