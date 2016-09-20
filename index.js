function callback(element, index){
  console.log(`${index}: ${element}`)
}
function iterativeLog(array){
  array.forEach(callback)
}

function iterate(callback){
  var array = [1,2,3,4,5];
  array.forEach(callback);
  return array
}

function doToArray(array, callback){
  array.forEach(callback);
}
