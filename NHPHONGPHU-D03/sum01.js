let str01 = prompt("Nhap int A: ");
let str02 = prompt("Nhap int B: ");
// let str01 = "19";
// let str02 = "19";

sum(str01, str02)


function sum(str01, str02){
    let total = "";
    let count = 1;
    let ith = 0;
    let remem = 0;
    let tmp =0;

    if(str02.length > str01.length)
    {
        let swap = str02;
        str02 = str01;
        str01 = swap;
    }
// alert(str01 + "        " +str02)

    for(let i = str01.length-1; i > -1; i--)
    {
        let a= parseInt(str01.charAt(str01.length-count));
        let b= parseInt(str02.charAt(str02.length-count));

        b = (b) ? b : 0;
    tmp = (a + b + ith)
    if(i == 0)
    {
        total = tmp + total;
        remem = tmp % 10;
        
    }
    else if(tmp > 9)
    {
        remem = tmp % 10;
        total = remem + total;
        ith = 1;
    }else
    {
        total = tmp + total;
    }
    count++;

    }
    
    alert(total);
}
