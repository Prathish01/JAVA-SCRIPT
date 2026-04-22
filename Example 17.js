<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style3.css">
</head>
<body>

    <h1 id="myH1"></h1>
    <script src="new.js"></script>
    
</body>
</html>
======================================
sum(displayConsole, 1, 2);
function sum(Callback, x, y){
    let result = x + y;
    Callback(result);

}
function displayConsole(result){
    console.log(result);

}
function displayPage(result){
    document.getElementById("myH1").textContent = result;

}
