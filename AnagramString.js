/**
 * Created by rocker on 6/21/17.
 */

/**
 * Write a function/method utilizing Java, Javascript, Objective-C or Swift to determine whether two strings are anagrams or not
 * Logic
 1. Take two strings and sort each character.
 2. Compare sorted string if its same.
 **/

/**
 * Notes:
 * Ignore space if two words.
 * Don't know about special characters so treating them as regular character.
 * **/


var string1 = 'punishments';
var string2 = 'nine thump';

isAnagrams(string1,string2) ? console.log(string1 + " & " + string2 + " are anagrams")
    : console.log(string1 + " & " + string2 + " are  not anagrams");

function isAnagrams(string1,string2){

    var sortedString1 = string1.split("").sort().join("");
    var sortedString2 = string2.split("").sort().join("");

    return (sortedString1 === sortedString2);
}