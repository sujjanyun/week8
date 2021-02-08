// 3. write a program that return all prime numbers up to a given max
// a prime number is only divisible by itself and one

// 3. PRIME NUMBERS UP TO MAX // FILTER

// to let you know the number is prime
// function prime (num) {
//     let prime_numbers = [];
//     for (let i = 0; i < num.length; i++) {
//         if (max)
//     }
// }


function prime (max) {
    array = [];
    for (j = 2; j <= max; j++){
        let prime = is_prime(j)
        prime !== null ? array.push(prime) : null;
    }
    return array;
}

function is_prime (num) {
    for (i=2; i<=num; i++) {
        if (i === num){
            return num;
        }
        if (num % i === 0) {
            return null;
        }
    }
}

console.log(prime(100))