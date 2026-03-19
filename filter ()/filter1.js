<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style3.css">
</head>
<body>

    <script src="new.js"></script>
    
</body>
</html>

------------------------------------------------------------------------------

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);


console.log(evenNums);

function isEven(element){
    return element % 2 == 0;33
} 

function isOdd(element){
    return element % 2 !== 0;
}

