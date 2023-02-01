let arr = [1, 34, 3, 90, 8, 19, 10, 0];
	
function general(array) {
  let even = 0;
  let odd = 0;
  let nullElements = 0;
	
  array.forEach((item, index)=> {
      if (item === 0){
           nullElements++;
	  } else if (item % 2 === 0) {
	       even++;
	  } else odd++;
  
})
  console.log(`Количество четных элементов - ${even}, количество нечетных элементов - ${odd}`);
  console.log(`Количество нулевых элементов - ${nullElements}`);
}
	
general(arr);