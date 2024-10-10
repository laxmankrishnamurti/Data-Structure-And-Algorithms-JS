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
    let num = 1;
    while(n){
        console.log(" ".repeat(n),"*".repeat(num))
        num += 2;
        n--;
    }
}
// pattern7(5)

function pattern8(n){
    let space = 0;
    while(n){
        console.log(" ".repeat(space),"*".repeat(n + (n - 1)));
        space++;
        n--;
    }
}
// pattern8(5)

function pattern9(n){
    pattern7(n)
    pattern8(n)
}
// pattern9(5)

function patternNine(n){
    let num1 = n;
    let str1 = 1;
    while(num1){
        console.log(" ".repeat(num1 - 1), "*".repeat(str1))
        str1 += 2;
        num1--;
    }   
    let space = 0;
    while(n){
        console.log(" ".repeat(space), "*".repeat(n + (n - 1)))
        space++;
        n--;
    }
}
// patternNine(5)

function pattern10(n){
    let input = n;
    let col = 1;
    while(input){
        console.log("*".repeat(col))
        col++;
        input--;
    }
    while(n-1){
        console.log("*".repeat(n-1))
        n--;
    }
}
// pattern10(5)

function pattern11(n){
    const arr = [1]
    let i = 1;
    while(i <= n){
        if(i > 1){
            arr.unshift(i % 2)
        }
        console.log(arr.join(" "))
        i++;
    }
}
// pattern11(5)

function pattern12(n){
    let num = n;
    let count = 1;
    let str = "";
    let reverse = "";
    while(count <= num){
        str += `${count}`
        reverse = ""
        for(let i = (str.length - 1); i >= 0; i--){
            reverse += str.charAt(i)
        }
        if(count < n){
            console.log(str+" ".repeat((n - count) * 2)+reverse)
        }else {
            console.log(str+reverse)
        }
        count++;
    }
}
// pattern12(4)

function pattern13(n){
    let num = 1;
    let row = 1;
    while(row <= n){
        let line = ""
        for(let i = 1; i <= row; i++){
            line += num + " ";
            num++
        }
        console.log(line)
        row++;
    }
}
// pattern13(5)

function pattern14(n){
    let str = "";
    for(let i = 0; i < n; i++){
        str += String.fromCharCode(65 + i)
        console.log(str)
    }
}
// pattern14(5)

function pattern15(n){
    let str = "";
    while(n){
        str = ""
        for(let i = 0; i < n; i++){
            str += String.fromCharCode(65 + i)
        }
        console.log(str)
        n--;
    }
}
// pattern15(5)

function pattern16(n){
    let str = ""
    let row = 0; 
    while(row < n){
        str = ""
        for(let i = 0; i <= row; i++){
            str += String.fromCharCode(65 + row)
        }
        console.log(str)
        row++
    }
}
// pattern16(5)

function pattern17(n){
    let str = "";
    let reverse = "";
    let row = 1; 
    while(row <= n){
        str = ""
        for(let i = 0; i < row; i++){
            str += String.fromCharCode(65 + i)
        }
        reverse = ""
        if(str.length > 1){
            for(let i = 0; i < (str.length-1); i++){
                reverse += str.charAt(i)
            }
        }
        console.log(" ".repeat(n - row)+str+reverse)
        row++
    }
}
// pattern17(4)

function pattern18(n){
    let str = "";
    let reverse = "";
    let row = 1; 
    while(row <= n){
        str = ""
        reverse = ""
        for(let i = 1; i <= row; i++){
            str += String.fromCharCode(65 + (n - i))
        }
        for(let i = (str.length-1); i >= 0; i--){
            reverse += str.charAt(i) + " "
        }
        console.log(reverse)
        row++;
    }
}
// pattern18(5)

function pattern19(n){
    let topLeftStr = topLeft(n).split("\n");
    let topRightStr = topRight(n).split("\n");
    let bottomLeftStr = bottomLeft(n).split("\n");
    let bottomRightStr = bottomRight(n).split("\n");
    
    let finalPattern = "";

    // Merge the top half (topLeft + topRight)
    for (let i = 0; i < n; i++) {
        finalPattern += topLeftStr[i] + topRightStr[i] + "\n";
    }

    // Merge the bottom half (bottomLeft + bottomRight)
    for (let i = 0; i < n; i++) {
        finalPattern += bottomLeftStr[i] + bottomRightStr[i] + "\n";
    }

    console.log(finalPattern);
}

function topLeft(n){
    let space = 0;
    let str = ""
    while(n){
        str += `${("*".repeat(n)+" ".repeat(space))}\n`;
        space++;
        n--;
    }
    return str
}

function topRight(n){
    let space = 0;
    let str = ""
    while(n){
        str += `${(" ".repeat(space) + "*".repeat(n))}\n`;
        n--;
        space++;
    }
    return str
}
function bottomLeft(n){
    let row = 1;
    let str = ""
    while(row <= n){
        str += `${("*".repeat(row) + " ".repeat(n - row))}\n`
        row++;
    }
    return str
    
}
function bottomRight(n){
    let row = 1; 
    let str = ""
    while(row <= n){
        str += `${(" ".repeat(n - row) + "*".repeat(row))}\n`
        row++;
    }
    return str
}
// pattern19(15)

function pattern20(n){
    let topLeftStr = topLeft(n-1).split("\n");
    let topRightStr = topRight(n-1).split("\n");
    let bottomLeftStr = bottomLeft(n).split("\n");
    let bottomRightStr = bottomRight(n).split("\n");

    let finalPattern = "";
    for(let i = 0; i < n; i++){
        finalPattern += bottomLeftStr[i] + bottomRightStr[i] + "\n"
    }
    for(let i = 0;  i < (n-1); i++){
        finalPattern += topLeftStr[i] + " " + " " + topRightStr[i] + "\n"
    }
    console.log(finalPattern)
}
// pattern20(5)

function pattern21(n){
    let row = 1;
    while(row <= n){
        if(row === 1){
            console.log("*".repeat(n))
        }else if(row === n){
            console.log("*".repeat(n))
        }else {
            console.log("*" + " ".repeat(n - 2) + "*")
        }
        row++;
    }
}
pattern21(10)