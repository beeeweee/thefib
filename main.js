function fibTwoPointer(n){
//temp variable to hold the sum of previous fib calc sum. starts at 1 since it will only be called after if statement   
let prevSum = 1;
//temp variable to hold the sum of previous fib calc sum. starts at 0
let currentSum = 0;
//temp variable to hold the prev sum when looping
let tempSum = 0; 
//if statement for anything below 1 - returns n since both 0 and 1 inputs equal eachother
        if(n <= 1){
            return n;
        }
    
//Count starts at 2 since the if statement handle inputs for 0 and 1; total accounts for the sum of 1
    let count = 2;
//while loop - while the count starting at 2 is less than the input of fib, keep running
        while( count <= n ){
            currentSum = prevSum+tempSum;
            tempSum = prevSum;
            prevSum = currentSum;
            count++
            }

    return currentSum;
}  
console.log("Two Pointer Approach",fibTwoPointer(7))



function fibRecursive(n){
//This if statement sums to 1 since 0,1,2 inputs sum to 1,
    if(n <=2){
        return 1;
    } else {
        //calling itself until false
    return fibRecursive(n-1) + fibRecursive(n-2);
    }
}

console.log("Recursive Fib Approach",fibRecursive(7))


function fibMemoizedFib(n, prevValues = []){

    //storing previous sums so we know that we don't need to recalculate
    if(prevValues[n] != null){
        return prevValues[n]
    }
    let result;
    //if input is less than or equal 2 = 1 since both 1,2 result in 1
    if(n <= 2){
        //sum = 1
        result = 1
    } else {
        //rescursive - calling the functions again but providing the prevValues into the array parameter allow the function to check if the values are already there
        result =fibMemoizedFib(n-1, prevValues) + fibMemoizedFib(n-2,prevValues)
    }
    prevValues[n] = result;
    return result;
}



console.log("Memoized Fib Recursive Approach",fibMemoizedFib(1000000000))




// const getFibFromApi = (n) =>{
//     let url = fib.api.com/fib/`${n}`

// }


// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// 0 = 0-1 + 0-2 = 0
// 1 = 1-1 + 1-2 = 1
// 2 = 2-1 + 2-2 = 1
// 3 = 1+1= 2
//4 = 1+2 = 3
//5 = 2+3  = 5
//6 = 3 + 5 = 8
//7 5 + 8 = 13