"use strict"

// class Animal{
//     constructor(speed){
//         this.speed = speed;
//     }
// }


// class Fish extends Animal{
//     constructor(name, age){
//         super(700);
//         this.name = name,
//         this.age = age
//     }

//     test(){
//         console.log("testes");

//     }
// }

// let newObject = new Fish("Asatrin",4)

// console.log(newObject.speed);

// console.log(newObject.name);

// newObject.test();


let nums = [1, 2, 4, 5, 6];

// nums.forEach((element, i) => {
//     nums[i] = element * 2;
// });

// console.log(nums);


// let datas = nums.map(num =>{
//     return num * 2
// })

// console.log(datas);


// let surname = "Ismayilzade";

// String.prototype.search = function(text){
//     return this.includes(text)
// }

// console.log(surname.search("D"));

// let num1 = 55;

// Number.prototype.test = "Salam Cavid muellim"

// console.log(num1.test)

// sessionStorage.setItem("name","Eldar")

// localStorage.setItem("name","Ferdi")
// localStorage.setItem("surname","Ismayilzade")
// localStorage.setItem('name',"Aqil")


// localStorage.removeItem("surname")

// alert(localStorage.getItem("name"))

// localStorage.clear();


let datas = ["Nihat", "Nergiz", "Terxan", "Samir"];

// localStorage.setItem("students", JSON.stringify(datas))



// console.log(JSON.parse(localStorage.getItem("students")))

// let storageDatas = JSON.parse(localStorage.getItem("students"))

// storageDatas.forEach(element => {
//     console.log(element);

// });


// document.querySelector("button").addEventListener("click", function(){
//     datas.push("Ferdi");
//     localStorage.setItem("students", JSON.stringify(datas))

//     let storageDatas = JSON.parse(localStorage.getItem("students"))

//     storageDatas.forEach(element => {
//         console.log(element);

//     });
// })


// localStorage.setItem("name",JSON.stringify("Valeh"))

// console.log(JSON.parse(localStorage.getItem("name")));



let student = {
    fullName: "Nihat Soltanov",
    age: 18,
    teachers: ["Cavid","Ulvi"],
    group: {
        name: "PB102",
        capacity: 15
    },
    room:{
        name:"Titan",
        capacity: 13
    }
}


// console.log(student);

// let res = [];

// student.teachers.forEach(element =>{
//     res.push(element);
// })

// res.push(student.group.name)

// res.forEach(element => {
//    console.log(element);
    
// });

// document.querySelector("h1").innerText = res.join(" ")

// localStorage.setItem("student",JSON.stringify(student))


// console.log(JSON.parse(localStorage.getItem("student")));

// let date = new Date;

// console.log(date.getMilliseconds());

// let math = Math.sqrt(25);
// console.log(math);

// console.log(Math.pow(5,3));

// console.log(Math.round(5.5))

// let h1 = document.getElementsByTagName("h1");

// let div  = document.getElementsByClassName("container")

// let section = document.getElementById("box")

// let section = document.querySelectorAll("h1")

// let li = document.querySelector("#box ol li:nth-child(5)")

let h1 = document.querySelector("#box h1")

// console.log(h1.innerText)
// alert(h1.innerText.toLowerCase().includes("H".toLowerCase()))

// h1.innerText = "Sagolun";

let section = document.querySelector("#box")

// console.log(section.innerHTML);

// h1.innerHTML = "<span>Necesiz Cavid muellim?</span>"

// h1.style.backgroundColor = "red";
// h1.style.color = "white";

// section.style.padding = "20px";
// section.style.backgroundColor = "blue";

// let itemDiv = document.querySelector(".item")

// let h2 = document.createElement("h2");

// h2.innerText = "Ders oxumaq lazimdi!";

// itemDiv.append(h2)

// console.log(h2);

// h1.className = "text-success"

let button = document.querySelector(".online-btn")

// button.className = "change-style";

// button.classList.add("change-style")

// button.classList.remove("online-btn")

// console.log(button.classList.contains("online-btn"))

// let aAttr = document.querySelector("a").getAttribute("href");


// document.querySelector("a").setAttribute("test","test attr")

// console.log(document.querySelector("a").hasAttribute("href"));


// button.addEventListener("click", function(){
//     this.style.backgroundColor = "red";
//     this.style.color = "black";
//     this.style.padding = "40px"
// })



let btns = document.querySelectorAll("button")

btns.forEach(element => {
    element.addEventListener("click", function(){
        this.style.backgroundColor = this.getAttribute("color")
    })
});


