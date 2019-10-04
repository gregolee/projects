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
