function overTime(arr) {
	const startHour = arr[0];
	const endHour = arr[1];
	const hourlyRate = arr[2];
	const overTimePay = arr[3]; 
	 
	 let pay = 0;
  

if(endHour<= 17){
   pay = (endHour - startHour) * hourlyRate ;
}
else if(endHour > 17 && startHour > 17){
    pay = (endHour - startHour)* hourlyRate * overTimePay;
}else if(endHour > 17 && startHour < 17){
    pay = ((endHour - startHour) * hourlyRate + (endHour - 17) * hourlyRate * overTimePay);
}else{
    var overPay  = ((endHour - 17)* hourlyRate  * overTimePay);
    pay = (Math.abs(17 - startHour)* hourlyRate) + overPay;
}
	 

    return "$"+pay.toFixed(2);
}







function finalCountdown(arr) {
	const finalResult= [];
    // movinf from right to left
    for(let i = arr.length - 1; i>=0  ;i--){
        if(arr[i]=== 1){
            finalResult.unshift([arr[i]]);
        }
        if (arr[i]+ 1=== arr[i-1] && finalResult[0] && finalResult[0][0]+1 === arr[i - 1]){
            finalResult[0].unshift(arr[i-1])
        }
    }
   return [finalResult.length,finalResult];
}

console.log(finalCountdown([4,4,8,3,2,1]))



function minPalindromeSteps(str) {
    for(let i = 0; i < str.length; i++){
       substring = str.slice(0,i);
      if (isPalindrome(str + stringReverse(substring)))
      return i;
    }  
  }
  
  // function for checking if the str is already palindrom
  function stringReverse(str){
      return str.split("").reverse().join("")
  }
  
  function isPalindrome(str){
      return str === stringReverse(str)
  }
  
  console.log(minPalindromeSteps("manish"))