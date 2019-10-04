/*
주석에 달려 있는 내용처럼 활용하면 가독성도 안좋고, 어떤 내용인지 알기 어려워진다.
따라서 밑의 코드처럼 작성한다.
const counter = new CounterClass({ num: 100 });
const showcountEl = document.querySelector('.showCount'); //이렇게 구분하는 것이 좋다


document.querySelector('.showCount').innerHTML = counter.getCount();
document.querySelector('.increment').addEventListener('click', function(event){
   const interval = document.querySelector('.interval').value*1;
   counter.increment(interval);
   document.querySelector('.showCount').innerHTML = counter.getCount();
});
document.querySelector('.decrement').addEventListener('click', function(event){
   const interval = document.querySelector('.interval').value*1;
   counter.decrement(interval);
   document.querySelector('.showCount').innerHTML = counter.getCount();
});
*/

/*
 *  1. 선언부
 *    1.1. naming : El(Element), $(jQuery) 등으로 구분을 해준다면, 어떤 인스턴스인지 알기 쉬워진다.
 *    1.2. class : '-'를 활용한 네이밍이 좋다.
 */
const numEl = document.querySelector('.show-count');   //CamelCase보다 '-'로 구분하도록 한다.
const intervalEl = document.querySelector('.interval');
const decrementEl = document.querySelector('.decrement');
const incrementEl = document.querySelector('.increment');
const resetEl = document.querySelector('.reset');

/*
 *  2. 초기화
 *    2.1. 초기화를 정해주면 어느 부분이 초기화되는 것인지 일목요연하게 확인이 가능하다. 가능한 적극적으로 활용하자.
 */
function init() {
   /*
    *  3. parameter를 Object형태로 활용한다면 다음과 같은 이점이 존재한다.
    *    3.1. paramter는 순서가 중요하나, 객체로 전달하면 순서와 무관하여 자유롭게 확장이 가능하다.
    *    3.2. 초기화에도 용이하다.
    */
   const counter = new CounterClass({ num: 0 });

   decrementEl.addEventListener('click', decreseCount);  //addEventListener의 세번째 parameter는 추가적으로 공부해두자.
   incrementEl.addEventListener('click', increseCount);
   resetEl.addEventListener('click', reset);
   
   numEl.innerHTML = counter.getCount();
   intervalEl.value = 1;
   
   function decreseCount(event) {
      counter.decrement(intervalEl.value);
      numEl.innerHTML = counter.getCount();
   }
   
   function increseCount(event) {
      counter.increment(intervalEl.value);
      numEl.innerHTML = counter.getCount();
   }
   
   function reset(event) {
      counter.reset();
      numEl.innerHTML = counter.getCount();
   }

}

window.onload = function() {
   this.init();
}