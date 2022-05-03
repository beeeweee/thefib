const numberArray= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

const binarySearch = (array,val) => {
    //beginning of the array;
    let lower = 0;
    let upper = array.length-1;

    while (lower <= upper){
        console.log('tries', 1)
        let  middle = lower + Math.floor((upper - lower) /2)
        if(array[middle] === val){
            return console.log('val found', val)
        } else if(val < array[middle]){
            upper = middle - 1;
        } else {
            lower = middle +1;
        }
    }
    return console.log('not found')
}

binarySearch(numberArray, 21)


