
function isValidCard(number){
    arr=[];
    for (var i = 0; i < number.length ; i++) {
          arr.push(number[i]);
  }
   var reverse = arr.reverse();

   for (var j = 0; j < reverse.length ; j+=2){
        var mult = reverse[j] * 2
        if(mult>9){
        for (var k = 0; k < mult.length ; k++){
          var sum = mult[k] + mult[k+1]
        }

        }else{
          mult = reverse[j] * 2; 
        
        }
   }

   for(var i = 0; i < number.length ; i++){}
}

isValidCard(prompt('Ingrese numero de Tarjeta'));