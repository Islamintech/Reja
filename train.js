//TASK B
function countDigit(a){
    let count = 0;
    for(let char of a){
        if(char >= '0' && char <= '9'){
            count ++;
        }
    }
    return count;
}
console.log(countDigit("ad2a54y79wet0sfgb9"));




//TASK A 

// function wordCounter(letter, word){
//     let count = 0;
//     for (let char of word){
//         if(char == letter){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(wordCounter("e", "engineer"));


//Callback functions

// console.log("Jack Ma maslahatlari:");
// const list = [
//     "Yaxshi talaba bo'ling!", //-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "O'zingiz uchun ishlashni boshlanag", //30-40
//     "Siz kuchli bolgan narsalarni qiling", //40-50
//     "Yoshlarga investitsiya qiling", //50-60
//     "Endi dam oling", //60
// ];

// function advice(a, callback){
//     if (typeof a !== "number") callback("Please insert number", null);
//     else if(a <= 20)callback(null, list[0]);
//     else if(a > 20 && a <= 30)callback(null, list[1]);
//     else if(a > 30 && a <= 40)callback(null, list[2]);
//     else if(a > 40 && a <= 50)callback(null, list[3]);
//     else if(a > 50 && a <= 60)callback(null, list[4]);
//     else{
//         setInterval(function(){
//             callback(null, list[5]);
//         }, 1000)
//     }
// }

// console.log("Passed here 0");
// advice(90, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else{
//         console.log("Javob:", data);
//     }
// })
// console.log("Passed here 1");


//ASYNC functions

// console.log("Jack Ma maslahatlari:");
// const list = [
//     "Yaxshi talaba bo'ling!", //-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "O'zingiz uchun ishlashni boshlanag", //30-40
//     "Siz kuchli bolgan narsalarni qiling", //40-50
//     "Yoshlarga investitsiya qiling", //50-60
//     "Endi dam oling", //60
// ];

// async function advice(a){
//     if (typeof a !== "number") throw new Error("Please Insert number");
//     else if(a <= 20) return (list[0]);
//     else if(a > 20 && a <= 30) return (list[1]);
//     else if(a > 30 && a <= 40) return (list[2]);
//     else if(a > 40 && a <= 50) return (list[3]);
//     else if(a > 50 && a <= 60) return (list[4]);
//     else{
//         return new Promise((resolve, reject) => {
//             setInterval(()=> {
//                 resolve(list[5]);
//             }, 1000);
//         });
//     }
// }


//then/catch

// console.log("Passed here 0");
// advice(90)
//     .then((data)=>{
//         console.log("Javob:", data);
//     })
//     .catch((err)=>{
//         console.log("ERROR:", err);
//     })
// console.log("Passed here 1");


//async / await
// async function run() {
//     let javob = await advice(80);
//     console.log(javob);
// }
// run();