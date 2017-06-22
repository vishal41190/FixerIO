/**
 * Created by rocker on 6/21/17.
 */

/**
 * Write a method in Java, Javascript, Objective-C or Swift to generate the nth Fibonacci number
 * Formula: F(n) = F(n-1) + F(n-2)
 *
 * A. Recursive approach.
 *  1. Call the same function to find value of F(n-1) and F(n-2)
 *  2. Return 1 if n is less than or equal to 1
 *
 * B. Iterative approach
 *  1. Start from the 0 and 1 and loop till the nth number
 *  2. Add total at end of each loop
 **/

var n  = 10;

console.log("Nth Fibonacci number using recursive approach: " + recursiveApproach(n));
console.log("Nth Fibonacci number using iterative approach: " + iterativeApproach(n));


function recursiveApproach(n){

    if(n<=2) return 1;

    return recursiveApproach(n-1) + recursiveApproach(n-2);

}

function iterativeApproach(n){

    var j=0,k=1,temp = 1;

    for(var i = 2; i <= n; i++) {
        temp = j + k;
        j = k;
        k = temp;
    }
    return temp;
}