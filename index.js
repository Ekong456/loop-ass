// 1

let i = 3
while (i) {
    alert(i);
    i--   
}
// the last value is 1

// 2

let eat = 0
while (++eat < 5) {
    alert(eat);
}
// outputs from 1-4
let ate = 0
while (ate++ < 5) {
    alert(ate)
}
// outputs from 1-5

// 3

for (let red = 0; red < 5; red++) {
    alert(red);
    
}
// outputs from 0-4
for (let re = 0; re < 5; ++re) {
    alert(re);
    
}
// outputs from 0-4

// 4

for (let num = 2; num <= 10; num++) {
    if (num % 2 ==0) {
        console.log(num); 
    }
}

// 5

let de = 0;
while (de < 3) {
    alert(`Number ${de}!`);
    de++
} 

// 7

let n = promt('Enter an integer value');

prime:
    for (let fr = 2; fr <= n; fr++){
        for (let j = 2; j < fr; j++){
            if (fr % j == 0)continue prime; 
        }
        alert(fr)
    }