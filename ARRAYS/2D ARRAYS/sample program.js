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

----------------------------------------
  
const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                ['*', 0, '#']];


for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}
