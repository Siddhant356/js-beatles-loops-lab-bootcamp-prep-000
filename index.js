// add solution here
function theBeatlesPlay(musicians,instrument){
 var array=[]
 for(var i=0;i<musicians.length;i++){
   array[i]=`${musicians[i]} plays ${instrument[i]}` 
 }
 return array
}
function johnLennonFacts(array1){
  var i=0
  while(array1.length-1!==i){
    array1[i]=array1[i]+'!!!'
    i++
  }
  return array1
}