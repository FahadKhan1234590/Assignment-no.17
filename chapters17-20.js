//ARRAYS AND LOOP

//Q1
var empty_multidimensional_array;
empty_multidimensional_array = [[[],[]],[],[]]

//Q2
var multidimensional_array;
multidimensional_array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

for (var i = 0; i < multidimensional_array.length; i++) {
    document.write(`<h2>${multidimensional_array[i]}</h2>`)
}

//Q3
document.write("<br>")
for (let i = 1; i < 11; i++) {
    document.write(`<h2>${i}</h2>`)
}

//Q4
document.write("<br>")
var table_number = +prompt("Enter a number to show its multiplication table")
var table_length = parseInt(prompt("Enter length multiplication table"))

document.write(`<h2>Multiplication table of ${table_number}<h2>`)
document.write(`<h2>Length ${table_length}<h2><br>`)

for(let i = 1;i < table_length + 1;i++){
    document.write(`${table_number} x ${i} = ${table_number*i}<br>`)
}

//Q5
document.write('<br>')
var fruits = ["apple","banana","mango","orange","strawberry"]

for (var i = 0; i < fruits.length; i++) {
    document.write(`<h2>${fruits[i]}</h2>`)
}

document.write('<br>')

for (var i = 0; i < fruits.length; i++) {
    document.write(`<h2>Element at index ${i} is ${fruits[i]}</h2>`)
}

//Q6
//a (Counting)
document.write("<br><h2>Counting:</h2>")
for (let i = 1; i < 16; i++) {
    document.write(`<b>${i},</b> `)
}

//b (Reverse Counting)
document.write("<br><h2>Reverse counting:</h2>")
for (let i = 10; i > 0; i--) {
    document.write(`<b>${i},</b> `)
}

//c (Even numbers)
document.write("<br><h2>Even:</h2>")
for (let i = 0; i < 21; i++) {
    if(i%2 == 0){
        document.write(`<b>${i},</b> `)
    }
    }

//d (Odd numbers)
document.write("<br><h2>Odd:</h2>")
for (let i = 1; i < 20; i++) {
    if(i%2 !=0){
        document.write(`<b>${i},</b>`)
    }
}

//e (Series numbers)
document.write("<br><h2>Series:</h2>")
for (let i = 1; i < 21; i++) {
    if(i%2 ==0){
        document.write(`<b>${i}k, </b>`)
    }
}

//Q7
document.write("<br>")

var bakery_items = ["cake","apple pie","cookie","chips","patties"]
var search_bakery_items = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var lower_case_bakery_items_name;
if(search_bakery_items != null){
     lower_case_bakery_items_name = search_bakery_items.toLowerCase()
}
else{
    console.log("")
}
var flag = false;

for (let i = 0; i < bakery_items.length; i++) {
    if(lower_case_bakery_items_name == bakery_items[i]){
      flag = true
    }
}

if(flag){
    alert(`${lower_case_bakery_items_name} is available at index ${i} in our bakery`)
}
else{
    alert(`We are sorry. ${search_bakery_items} is not available in our bakery `)
}

//Q8
var numbers = [24, 53, 78, 91, 12]
document.write(`<h2>Array Items: ${numbers} </h2>`)
var ordered_numbers = numbers.sort()
var largest_number_in_numbers_array = ordered_numbers.pop()

document.write(`<h2>The largest number is: ${largest_number_in_numbers_array} </h2><br>`)

//Q9
var numbers = [24, 53, 78, 91, 12]
document.write(`<h2>Array Items: ${numbers} </h2>`)
var ordered_numbers = numbers.sort()
var smallest_number_in_numbers_array = ordered_numbers.shift()

document.write(`<h2>The smallest number is: ${smallest_number_in_numbers_array} </h2><br>`)


//Q10
for (let i = 1;i < 21; i++){
   document.write(`<b>${i*5},</b> `)
}


document.write(`<br><br><h1><a href="questionspdf14-20.html" target="_blank">Questions PDF 14-20</a></h1>`)