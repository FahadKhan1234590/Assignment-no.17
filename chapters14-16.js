//Chapters 14-16

//ARRAYS

//Q1
var array = [];

//Q2
//var arr = newArray();

//Q3
var strarray = [];
strarray = ["String 1","String 2"];

//Q4
var numarray = [];
numarray = [1,2];

//Q5
var boolarray = [];
boolarray = [true];

//Q6
var mixedarray = [];
mixedarray = ["String",2,true];

//Q7
var available_education_qualifications_Pakistan = []
available_education_qualifications_Pakistan = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"]

document.write("<h2>Qualifications:</h2>")
for (let i = 0; i < available_education_qualifications_Pakistan.length; i++) {
    document.write(`<h2>${i+1} ) ${available_education_qualifications_Pakistan[i]} <br></h2>`)
}

//Q8
var student_names = ["Michael","John","Tony"]
var student_marks = [320,230,480]
var total_marks_of_each_student = 500

document.write("<br><br>")
for(let i = 0; i < student_names.length; i++){
    var percentage = student_marks[i] / total_marks_of_each_student * 100
    document.write(`<h2>Score of ${student_names[i]} is ${student_marks[i]}. Percentage: ${percentage}%</h2>`)
}

//Q9
var colors;
colors = ["red"," green"," blue"]
document.write(`<br><h2> ${colors} </h2>`)


var prompt_1 = prompt("Which color do you like to add in the beginning?")
colors.unshift(prompt_1)
document.write(`<br><h2> ${colors} </h2>`)

var prompt_2 = prompt("Which color do you like to add in the end?")
colors.push(prompt_2)
document.write(`<br><h2> ${colors} </h2>`)

var prompt_3 = prompt("Tell two more colors to add in the beginning(add 1st color)")
var prompt_4 = prompt("add 2nd color")

colors.unshift(prompt_3,prompt_4)
document.write(`<br><h2> ${colors} </h2>`)

colors.shift()
document.write(`<br><h2> ${colors} </h2>`)

colors.pop()
document.write(`<br><h2> ${colors} </h2>`)

var prompt_5 = parseInt(prompt("tell the index in which you want to add color (note: index 0 = 1)"))
var prompt_6 = prompt("tell color name")

colors[prompt_5] = prompt_6
console.log(colors)
document.write(`<br><h2> ${colors} </h2>`)

var prompt_7 = parseInt(prompt("tell the index from which you want to delete color"))
var prompt_8 = parseInt(prompt("now tell how much you want to delete from that index")) 

colors.splice(prompt_7,prompt_8)
document.write(`<br><h2> ${colors} </h2>`)

//Q10
var students_scores = [320,230,480,120]

document.write(
    `<br><h2>Scores of Students: ${students_scores}</h2>`+
    `<h2>Ordered Scores of Students: ${students_scores.sort()}</h2><br>`
    )

//Q11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selected_cities = cities.slice(0,3)
console.log(selected_cities)

document.write(
    `<h2>Cities list:</h2>`+
    `<h2>${cities}</h2>`+
    `<h2>Selected cities list:</h2>`+
    `<h2>${selected_cities}</h2><br>`
)

//Q12
var arr = ["This","is","my","cat"]
var joined_arr = arr.join(" ")
document.write(`<h2>Array:<br>${arr}</h2>`)
document.write(`<h2>String:<br>${joined_arr}</h2><br>`)

//Q13
var devices = ["keyboard","mouse","printer","monitor"]

document.write(
    `<h2>Devices: <br>
     ${devices}<br></h2>`
)
for(let i = 0; i < devices.length;i++){
   document.write(
    `<h2>
         Out:<br>
         ${devices[i]}
    </h2>
    `
)
}

//Q14
var devices_in_reverse_order = ["keyboard","mouse","printer","monitor"]

document.write(
    `<br><h2>Devices: <br>
     ${devices_in_reverse_order}<br></h2>`
)
for(let i = devices_in_reverse_order.length-1; i > -1;i--){
   document.write(
    `<h2>
         Out:<br>
         ${devices[i]}
    </h2>
    `
)
}

//Q15
var phone_manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

document.write(
        `<h1>Phone Manufaturers<br>`+
        `<select>
         <option>
         ${phone_manufacturers[0]}
         </option>
         <option>
         ${phone_manufacturers[1]}
         </option>
         <option>
         ${phone_manufacturers[2]}
         </option>
         <option>
         ${phone_manufacturers[3]}
         </option>
         <option>
         ${phone_manufacturers[4]}
         </option>
         <option>
         ${phone_manufacturers[5]}
         </option>
         </select>
        `
    )
    
document.write(`<br><br><h1><a href="chapters17-20.html" target="_blank">Chapters 17-20</a></h1>`)