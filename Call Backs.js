Callback is function that is passed as an argument to another function.

          used to handle asynchronous operations:
                    1. Reading a file
                    2. Network requests
                    3. Interacting with databases

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

======================================================================

hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}



