const date1 = new Date("10/28/2024");
const date2 = new Date();
const Difference_In_Time = date2.getTime() - date1.getTime();
let Difference_In_Days =Math.round(Difference_In_Time / (1000 * 3600 * 24));
const result= document.getElementById("result");
result.innerHTML=`<h3>Total number of days iPhone purchased is </h3><h1 style="font-size:140px">${Difference_In_Days}</h1>`;


