let fib_sequence_1 = new Array; 
//Initial conditions of [0,1]
fib_sequence_1.push(0);
fib_sequence_1.push(1);

//Allow for variants
let fib_sequence_2 = new Array; 
//Initial conditions of [1,3]
fib_sequence_2.push(1);
fib_sequence_2.push(3);

let items = 30;
//////////////////////////////////////////


Calculate sequences 
let algorithmIterations = 0;
for(; algorithmIterations < items; algorithmIterations++) {
    fib_sequence_1.push(fib_sequence_1[algorithmIterations] + fib_sequence_1[algorithmIterations + 1]);
     fib_sequence_2.push(fib_sequence_2[algorithmIterations] + fib_sequence_2[algorithmIterations + 1]);
}

console.log(fib_sequence_1);
console.log(fib_sequence_2);

//Golden Ratio approximations
console.log(fib_sequence_1[i] / fib_sequence_1[i - 1]);
console.log(fib_sequence_2[i] / fib_sequence_2[i - 1]);
