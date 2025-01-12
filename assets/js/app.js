const date1 = new Date("10/28/2024");
const date2 = new Date();
const Difference_In_Time = date2.getTime() - date1.getTime();
let Difference_In_Days =Math.round(Difference_In_Time / (1000 * 3600 * 24));
const result= document.getElementById("result");
result.innerHTML=`<h3>Total number of days iPhone purchased is </h3><h1 style="font-size:76px">${Difference_In_Days}</h1>`;


const date3 = new Date("09/03/2018");
const Difference_In_Time_ = date2.getTime() - date3.getTime();
let Difference_In_Days_ =Math.round(Difference_In_Time_ / (1000 * 3600 * 24));
const result_= document.getElementById("result_");
result_.innerHTML=`<h3>Total number of days Ntorq purchased is </h3><h1 style="font-size:76px">${Difference_In_Days_}</h1>`;

const date4 = new Date("08/31/2021");
const Difference_In_Time__ = date2.getTime() - date4.getTime();
let Difference_In_Days__ =Math.round(Difference_In_Time__ / (1000 * 3600 * 24));
const result__= document.getElementById("result__");
result__.innerHTML=`<h3>Total number of days HP victus purchased is </h3><h1 style="font-size:76px">${Difference_In_Days__}</h1>`;

console.log(Difference_In_Days__);