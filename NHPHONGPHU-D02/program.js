let n = parseInt(prompt("Vui long nhap N "));
let fibonacci = [];
for(let i = 0; i < n; i++){
    if(i == 0 || i == 1){
        fibonacci.push(1);
    } else{
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
    }
}
console.log(fibonacci)
// document.write(fibonacci)