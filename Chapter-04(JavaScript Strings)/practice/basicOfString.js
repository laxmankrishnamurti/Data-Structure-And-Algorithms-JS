let username = "Laxman Krishnamurti"
console.log(username.charAt(1))     //output :- a

console.log(username.substring(0,6))    //output :- Laxman
console.log(username.substring(0))      //output :- Laxman Krishnamurt

//Note :- If we don't pass the final index value(last index) in the substring() function it will return all the character 
//values from the specified start position untill the end.