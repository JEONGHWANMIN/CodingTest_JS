function solution(number, limit, power) {
    var answer = 0;
    
    for (let i = 1 ; i <= number; i++) {
        const len = findDivisors(i).length
        if (len <= limit) {
            answer += len;
        } else {
            answer += power
        }
        
    }
    
    return answer;
}

function findDivisors(num) {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    
    return divisors;
}
