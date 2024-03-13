//Chapter 14 (If statements nested)

//Q1
var password = 4
if (password != null){
    if(password >! 5){
      alert("Password must be greater than 5")
    }
    if(password > 5){
        alert("OK")
    }
    else{
        console.log("")
    }
}
else{
    console.log("")
}

//Q2
var a = 1
var c = "Max"
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

//Q3
if (a === 1 && c === "Max"){
    alert("OK")
}

//Q4
var num1 = 2
var num2 = 2 

if(num1 == num2){
    if(num1 <= num2){
       alert("Yes")
    }
}


//Chapter 15 (Array I)

//Q1
var array = []

//Q2
var array = ["string"]

//Q3
var alphabet = ["h","i","j","k"]
alert(alphabet[2])

//Q4
var alphabet=["h","i","j","k", "l","m,","n","o"]
alert(`total lenth of alphabet array is ${alphabet.length}`)

//Q5
var array = [1]
array[1] = ["string"]
alert(array[1])


//Chapter 16 (Array II)

//Q1
var array = ["Str"]
array.push(2)
alert(array.pop())

//Q2
var alphabet = ["h","i","j","k"]
alphabet.pop()
alert(alphabet)

//Q3
var alphabet = ["h","i","j","k"]
alphabet.push(4)
alert(alphabet)


//Chapter 16 (Array III)

//Q1
var sizes = ["S","M","XL","XXL","XXXL"]
sizes.shift()
alert(sizes)

//Q2
var sizes = ["S","M","XL","XXL","XXXL"]
sizes.unshift(1,2,3)
alert(sizes)

//Q3
var array = [2]
array.unshift(1)
alert(array.shift())

//Q4
var sizes = ["S","M","XL","XXL","XXXL"]
sizes.splice(2,0,"L")
alert(sizes)

//Q5
var sizes = ["S","M","XL","XXL","XXXL"]
var regSizes = sizes.slice(0,3)
alert(regSizes)

//Q6
var pets = ["dog","cat","ox","duck","frog"]
pets.splice(1,3,"pigeon","parrot")
alert(pets)

//Q7
var pets = ["dog","cat","ox","duck","frog"]
pets.splice(1,2)
alert(pets)

//Q8
var pets = ["dog","cat","ox","duck","frog","flea"]
pets = pets.slice(3,5)
alert(pets)


//Chapter 17 - 20 (for Loops)

//Q1
for (let i = 1; i < 11; i++) {
  console.log(i)
}

//Q2
for (let i = 0; i <= 12; i++) {
  console.log(i)
}

//Q3
for (var i=0;i<=4;i++){
 console.log("fixed")   
}

//Q4
for (let j = 0; j < 100; j++) {
  console.log("done")
}

//Q5
for (let i = 6; i > 3 ; i--) {
  console.log(i)
}

//Q6
var array = [1,true,"string"]

//Q7
var flag = true

//Q8
for (let i = 0; i < pets.length; i++) {
  console.log(i)
}

//Q9
for (let i = 0; i < 11; i++) {
  if(i === 1){
    alert(i)
    break
  }
}

//Q10
var user_names = []
var firstName = prompt("Enter first name")

user_names.push(firstName)

for (let i = 0; i < user_names.length; i++) {
  if(user_names[i] === firstName ){
    alert("Name Entered")
  }
  else{
    alert("Please wrtie correct user name")
  }
}

//Q11
var matchFound = false
var list = [1]
var userInput = [1]
for (var i = 0; i < list.length; i++){
   if (userInput === list[i]) {
    alert("Match found");
    matchFound = true; 
    break;
   }
   else{
    alert('match not found')
   }
}

//Q12
var firstArr = ["a","b","c","d","e","f"]
var secondArr = [1,2,3,4,5,6]

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    document.write(`<h2>${firstArr[i] + secondArr[j]}</h2>`)
    
  }
  
}