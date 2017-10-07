// Exercise #1
// Write your solution below
function printTriangle(char,totalRows){
    for (var row=1;row<=totalRows;row++) {
        var printout = char;        
        for(var y=1;y<row;y++){
            printout += char;
        }
        console.log(printout);
    }
}
printTriangle('#',7);
printTriangle('$',15);

/* 
Write your explanation for Exercise #1 here
Function that takes two parameters, a character/string and an int.
c: character or string to be printed in each row.
totalRows: number of rows of the triangle.
1st row will print the character once, 2nd row twice and so on.
*/

//Hands-on Challenge
for(var i=1;i<=100;i++) {
    if(i % 5 == 0 && i % 3 == 0)
        console.log("fizzbuzz");
    else
        if(i % 5 == 0)
            console.log("fizz");
        else if(i % 3 == 0)
            console.log("buzz");
        else
            console.log(i);
}

// Exercise #2
// Write your solution below
function isEven(number) {
    if(number % 2 == 0)
        console.log('the number is even!');
    else
        console.log('the number is odd!')
}

isEven(7);
isEven(4);

/* 
Write your explanation for Exercise #2 here
Modulo operator returns the remainder of the division.
Even numbers have a remainder of 0 when divided by 2.
Odd numbers have a remainder of 1 when diveded by 2.
*/

//Hands-on Challenge
function printGrid(char1,char2,maxRows) {
    for(var x=1;x<=maxRows;x++) { //x = row
        var printout = '';
        for(var y=1;y<=maxRows;y++){ //y = column
            if((x%2 != 0 && y%2 != 0) || (x%2 == 0 && y%2 == 0))
                printout += char1;
            else   
                printout += char2;
        }
        console.log(printout);
    }        
}
printGrid('#',' ',8);
printGrid('X','O',10);