// 1. Object literal
const CounterLiteral = {
    count: 0,
    getCount: function() {
        return this.count;
    },
    increment: function(num) {
        this.count = this.count + num*1;
    },
    decrement: function(num) {
        this.count = this.count + num*-1;
    }
}


// 2. Constructor (lagacy) : 모든 javacript 버전에서 사용가능
const CounterConstructor = function ({ num }) {
    this.count = num;
}

CounterConstructor.prototype.getCount = function() {
    return this.count;
}
CounterConstructor.prototype.increment = function(num) {
    this.count += num*1
}
CounterConstructor.prototype.decrement = function(num) {
    this.count += num*-1
}


// 3. Class (Modern / ES2015+ === ES6)
class CounterClass {
    constructor({ num }) {
        this.count = num;
        this.initCount = num;
    }
    getCount() {
        return this.count;
    }
    increment(num=1) {
        this.count += num * 1;
    }
    decrement(num=1) {
        this.count -= num * 1;
    }
    reset() {
        this.count = this.initCount;
    }
}

// 4. Closure & IIFE
const CounterAppClosure = (function() {
    let count = 0;
    return {
        increment: function() {
            count = count + 1;
        },
        getCount: function() {
            return count;
        }
    }
})();