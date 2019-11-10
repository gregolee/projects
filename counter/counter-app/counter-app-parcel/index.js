const numEl = document.querySelector('.show-count'); //CamelCase보다 '-'로 구분하도록 한다.
const msgEl = document.querySelector('.show-msg');
const intervalEl = document.querySelector('.interval');
const decrementEl = document.querySelector('.decrement');
const incrementEl = document.querySelector('.increment');
const resetEl = document.querySelector('.reset');


import {createStore, applyMiddleware} from 'redux';

const INCREMENT = '@action/increment';
const DECREMENT = '@action/decrement';
const RESET = '@action/reset';

//초기상태
const initState = {
   count: 0,
   message: '안녕하세요!!!',
};

//Reducer
function reducer(state = initState, action) {
   switch (action.type) {
      case INCREMENT:
         return {
            ...state,
            count: state.count + action.interval,
            message: action.payload,
         };
      case DECREMENT:
         return {
            ...state,
            count: state.count - action.interval,
            message: action.payload,
         };
      case RESET:
         return {
            ...state,
            count: 0,
            message: action.payload || state.message,
         };
      default:
         return state;
   }
}

const beholder = Store => next => action => {
   setTimeout(() => {
      if (action.type===RESET) {
         next({
            type: RESET,
            payload: '이제 아무 것도 안하는 건가요?'
         });
      }
   }, 5000);

   return next(action);
}

function render() {
   const { count, message } = Store.getState();
   numEl.innerHTML = count;
   msgEl.innerHTML = message;
}

// Store
const Store = createStore(reducer, applyMiddleware(beholder));

// Subscribe : 상태가 바뀔때마다 subscribe()를 실행한다.
Store.subscribe(function() {
   console.log(Store.getState());
   render();
})


function init() {

   Store.dispatch({
      type: RESET,
   });

   decrementEl.addEventListener('click', decreseCount);  //addEventListener의 세번째 parameter는 추가적으로 공부해두자.
   incrementEl.addEventListener('click', increseCount);
   resetEl.addEventListener('click', reset);
   
   intervalEl.value = 1;
   
   function decreseCount(event) {
      Store.dispatch({
         type: DECREMENT,
         interval: intervalEl.value*1,
         payload: `${intervalEl.value} 감소했습니다!`
      });
   }
   
   function increseCount(event) {
      Store.dispatch({
         type: INCREMENT,
         interval: intervalEl.value*1,
         payload: `${intervalEl.value} 증가했습니다!`
      });
   }
   
   function reset(event) {
      Store.dispatch({
         type: RESET,
         payload: `초기화 되었습니다.`
      });
   }
}

window.onload = function() {
   init();
}