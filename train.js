//MITTASK 

/*TASK F:

Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. 
Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
*/

//Solution 1: 

function findDoublers(a){
    let seen = {};

    for(const item of a){
        if(seen[item]){
            return true;
        }
        seen[item] = true;
    }
    return false;
};
console.log(findDoublers("hello"));


//Solution 2: 

function findDoublers1(b){
    const seen1 = [];

    for (const item1 of b){
        if(seen1.includes(item1)){
            return true;
        }
        seen1.push(item1);
    }
    return false
}
console.log(findDoublers1("bello"))






/*TASK E:
Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

//Solution:

// function getReverse(a){
//     const reversed = a.split("").reverse().join("");
//     return reversed;
// }

// console.log(getReverse("hello"));



/*TASK D
Shunday function tuzing, u 2ta string parametr ega bolsin, 
hamda agar har ikkala string bir hil harflardan 
iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

//Solution 
// function wordComparing(a, b){
//     if(a.length !== b.length){
//         return falsez
//     }else if(a.split("").sort().join("") === b.split("").sort().join("")){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(wordComparing("mitgroup", "gmtiprou"));


/*
MITASK-C 
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 
3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, 
biri qoldiq, biri sotish va biri qabul. Har bir method ishga 
tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & 
shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 
5ta lagmon va 6ta cola mavjud!
@MITASK


//TASK C
/*Masalana yechimi:
// const moment = require("moment") 
// const time = moment().format("hh:mm a");

// class Shop{
//     products = ["lagmon", "non", "cola"];

//     constructor(lagmon, non, cola){
//         this.non = non; // =5 
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     qabul(mahsulot, miqdor){
//         if(!this.products.includes(mahsulot) || miqdor <= 0){
//             console.log("Iltimos to'g'ri mahsulot va miqdorni kiriting")
//             return;
//         }
//         this[mahsulot] += miqdor;
//         console.log(`Dokonimizga ${time} da, ${miqdor} ta ${mahsulot} qabul qilindi`);
//     }

//     sotish(mahsulot, miqdor){
//         if(!this.products.includes(mahsulot)){
//             console.log("Bunday mahsulot mavjud emas");
//         }else if(miqdor <= 0){
//             console.log("Miqdor noto'g'ri")
//         }else if(this[mahsulot]<miqdor){
//             console.log(`Hozir ${time} ${this[mahsulot]} ta ${mahsulot} mavjud`)
//         }else{
//             this[mahsulot] -= miqdor;
//             console.log(`Do'konimizdan  ${time} da, ${miqdor} ta ${mahsulot} sotildi.`);
//         }
//     }

//     qoldiq(){
//         return `Dokonomizda ${time} vaqt bo'yicha ${this.non} ta non, ${this.cola} ta cola va ${this.lagmon} ta lagmon mavjud`;
//     }
// }
// const shop = new Shop (4, 5, 2);
// console.log(shop.qoldiq());
// shop.sotish("non", 5);
// shop.qabul("cola", 4);
// console.log(shop.qoldiq());

//TASK B
// function countDigit(a){
//     let count = 0;
//     for(let char of a){
//         if(char >= '0' && char <= '9'){
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(countDigit("ad2a54y79wet0sfgb9"));
*/



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