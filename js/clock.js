let userName=prompt("Isminizi Giriniz:")

let myName=document.querySelector("#myName")

myName.innerHTML=userName

const weekdays = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

const d = new Date()
let hour = d.getHours()
let minute=d.getMinutes()
let day=weekdays[d.getDay()]

let myClock=document.querySelector("#myClock")

myClock.innerHTML=`${hour}:${minute} ${day}`