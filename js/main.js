// var str = "salom";
// var str2 = "salom2";
// var str3 = "salom3";
// var str4 = "salom4";
// var str5 = "salom5";
// var str6 = "salom6";
// var str7 = "salom7";
// var str8 = "salom8";
// var str9 = "salom9";
// var str10 = "salom10";


// var numbers = ["srt1", 234 , "fd" , "fdd" , "fdddfd"];
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[3]);

// numbers.unshift("salom");
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

// numbers.push("dytfuyf7ugb");
// console.log(numbers);

// 1-masala 
var arr = [3,2,5,6];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(`Arraydagi ${arr} sonlar bir-biriga qo'shilganda ${sum} bo'ladi!`);    
}
arraySum(arr);

// 2-masala 
var evenNumber = [2,4,];
var oddNumber = [1,3,];

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form-input");
var elResult = document.querySelector(".result");

var divisor = 2;



elForm.addEventListener ("submit" , function(evt) {
    evt.preventDefault();
    
    var inputvalue = elInput.value;

    if (inputvalue <= 0) {
        elResult.textContent = `0 dan katta raqam kiriting`;
        elResult.classList.remove("color-green");
        elResult.classList.remove("color-brown");
        elResult.classList.add("color-red");
    }
    if(inputvalue % divisor == 0 && inputvalue >= 2){
        elResult.textContent = `${inputvalue} juft sonlar ro'yhatiga qo'shildi`;
        elResult.classList.remove("color-red");
        elResult.classList.remove("color-brown");
        elResult.classList.add("color-green");

        console.log(evenNumber);
        evenNumber.push(inputvalue);
        console.log(evenNumber);

        elInput.value = ""; 
     } 
     if(inputvalue % divisor !== 0) {
        elResult.textContent = `${inputvalue} toq sonlar ro'yhatiga qo'shildi`;
        elResult.classList.remove("color-red");
        elResult.classList.remove("color-green");
        elResult.classList.add("color-brown");

        console.log(oddNumber);
        oddNumber.push(inputvalue);
        console.log(oddNumber);
        
        elInput.value = ""; 
     }
     
})


