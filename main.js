var firstNoArray = document.getElementsByClassName('firstno');
var secondNoArray = document.getElementsByClassName('secondno');
var resultArray = document.getElementsByClassName('result');
console.log(firstNoArray);

for(var i=0;i<firstNoArray.length;i++)
  { 
  resultArray[i].textContent = parseInt(firstNoArray[i].textContent) + parseInt(secondNoArray[i].textContent);
    }
