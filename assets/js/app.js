const date1 = new Date("10/28/2024");
const date2 = new Date();
const Difference_In_Time = date2.getTime() - date1.getTime();
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
const result = document.getElementById("result");
result.innerHTML = `<h3>Total number of days iPhone owned:</h3><h1 style="font-size:60px">${Difference_In_Days}</h1>`;

const date3 = new Date("09/03/2018");
const Difference_In_Time_ = date2.getTime() - date3.getTime();
let Difference_In_Days_ = Math.round(Difference_In_Time_ / (1000 * 3600 * 24));
const result_ = document.getElementById("result_");
result_.innerHTML = `<h3>Total number of days Ntorq owned:</h3><h1 style="font-size:60px">${Difference_In_Days_}</h1>`;

const date4 = new Date("08/31/2021");
const Difference_In_Time__ = date2.getTime() - date4.getTime();
let Difference_In_Days__ = Math.round(
  Difference_In_Time__ / (1000 * 3600 * 24)
);
const result__ = document.getElementById("result__");
result__.innerHTML = `<h3>Total number of days HP victus owned:</h3><h1 style="font-size:60px">${Difference_In_Days__}</h1>`;

const date5 = new Date("12/24/2024");
const Difference_In_Time__anker = date2.getTime() - date5.getTime();
let Difference_In_Days__anker = Math.round(
  Difference_In_Time__anker / (1000 * 3600 * 24)
);
const result__anker = document.getElementById("acc_result_1");
result__anker.innerHTML = `<h3 style=color:white;>Total number of anker screen protector owned :</h3><h1 style="font-size:26px;color:white;">${Difference_In_Days__anker}</h1>`;

const date6 = new Date("12/21/2024");
const Difference_In_Time__ringke = date2.getTime() - date6.getTime();
let Difference_In_Days__ringke = Math.round(
  Difference_In_Time__ringke / (1000 * 3600 * 24)
);
const result__ringke = document.getElementById("acc_result_2");
result__ringke.innerHTML = `<h3 style=color:white;>Total number of ringke onyx owned :</h3><h1 style="font-size:26px;color:white;">${Difference_In_Days__ringke}</h1>`;

$(document).ready(() => {

  $("#btn-reveal").click(() => {
    $(".accessory").slideToggle(1000);
  });

});
