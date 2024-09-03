//Soal 1
    const n: number = 25;

    if (n % 2 === 0) {
        console.log("even number");
    } else {
        console.log("odd number");
    };

//Soal 2

const p: number = 831739;
let isPrima: boolean = true;

for (let i = 2; i <= Math.sqrt(p); i++) {
  if (p % i === 0) {
    isPrima = false;
    break;
  }
}

if (p <= 1) {
  isPrima = false;
}

if (isPrima) {
  console.log(`${p} is a prime number`);
} else {
  console.log(`${p} is not a prime number`);
}


//soal 3
const N: number = 5; // replace with the desired value of N
let sum: number = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

let result: string = `The sum of numbers from 1 to ${N} is ${sum}`;

console.log(result);

//soal 4
const N: number = 4; // replace with the desired value of N
let factorial: number = 1;

for (let i = 1; i <= N; i++) {
  factorial *= i;
}

let result: string = `${N}! is ${factorial}`;

console.log(result);

//soal 5
function fibonacci(N: number): void {
    let fibArray: number[] = [0, 1];
    let a: number = 0;
    let b: number = 1;
  
    for (let i = 2; i < N; i++) {
      let temp: number = a + b;
      a = b;
      b = temp;
      fibArray.push(temp);
    }
  
    console.log(`The first ${N} Fibonacci numbers are: ${fibArray.join(" ")}`);
  }
  
  const N: number = 15; // replace with the desired value of N
  fibonacci(N);