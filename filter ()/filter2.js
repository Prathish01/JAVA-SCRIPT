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
=============================================================================
  
const ages = [10, 22, 35, 43, 57, 62, 79];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);


console.log(adults);

function isAdult(element){
    return element >= 18;

} 

function isChild(element){
    return element < 18;
}
