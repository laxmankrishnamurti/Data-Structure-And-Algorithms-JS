function pattern1(n){
    let str = "*";
    let i = 1;
    while(i <= n){
        console.log(str.repeat(n));
        i++;
    }
}
// pattern1(5)

function pattern2(n){
    let str = "*";
    let i = 1; 
    while(i <= n){
        console.log(str.repeat(i));
        i++;
    }
}
// pattern2(5)

function pattern3(n){
    let str = ""
    let i = 1; 
    while(i <= n){
        str += `${i} `;
        console.log(str)
        i++;
    }
}
// pattern3(5)

function pattern4(n){
    let i = 1;
    let str = "";
    while(i <= n){
        str = `${i} `
        console.log(str.repeat(i))
        i++;
    }
}
// pattern4(5)

function pattern5(n){
    let str = "* ";
    while(n){
        console.log(str.repeat(n));
        n--;
    }
}
// pattern5(5)

function pattern6(n = 5){
    let str = "";
    let i = 1; 
    while(i <= n){
        for(let i = 1; i <= n; i++){
            str += `${i} `;
        }
        console.log(str)
        str = ""
        n--;
    }
}
// pattern6(5)

function pattern7(n){
    let str = "*"
    let num = 1;
    while(n){
        console.log(" ".repeat(n),str.repeat(num))
        num += 2;
        n--;
    }
}
// pattern7(5)