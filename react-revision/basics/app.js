// let a =10 ;
// let b = 20;
// document.writeln("sum is = "+(a+b));
// document.writeln("type is = "+typeof(a+b));


// let c =10 ;
// let d= "20";
// document.writeln("sum is = "+(c+d));
// document.writeln("type is = "+typeof(c+d));
// // agar hm number aur string ko ek sath add krte hai to string bnta hai jise "concatnation" kahte hai

// let c =10 ;
// let d= 20;
// document.writeln("sum is = "+(c+d));
// document.writeln("type is = "+typeof(c+d));//ye concatnation nahi hai but agar yahi aisa ho to


// let c =10 ;
// let d= 20;
 
// document.writeln("sum of 10 and 20 = "+ c+d);// yha pr concatnation hai kyuki pahle string uske baad number hai 
// // jaha pr phle string uske baad number hota hai vha pr concantation hota hai.
// //javascript jisne bnaaya tha usne bola tha ki jo + {plus} ka symbol hai aage string aur pichhe number hoga to vo add nahi krega concat krega 

// let c =10 ;
// let d= 20;
 
// document.writeln( c+d + " is sum of 10 and 20 ");// yha pr phle number hai uske baad string hai to yha 
// //phle sum hoga fir uske baad string hai isliye ye concatnation nahi hoga.


// "Type cortion "

// console.log("1"+1)// output is 11 because concatnation 
// console.log("1"-1)//output is 0 typortion ye compiler me string ko convirt kr deta hai number me  
// console.log("2"*2)//output is 4 yha pe multiply ho rha hai 


// ======================
// Prompt 
// let a = 10
// console.log(a);
// // prompt kisi bhi value ko string format me hi leta hai ya srting bna deta hai 
// let age = prompt("whats your age ");
//     age = Number(age);// abb  ye number me convirt ho skta hai 
//     //number ek function hai aur agr iske ander koi bhi number ko string formate me likhenge to ye us string me likhe numbers ko number formate me convirt ke dega .
//     //agr number ke jaga character hoga to vo outpu me nan dega 
// console.log(age)

//** ek type ko dusre type me convirt krte hai to usko type conversion/type casting kahte hai  kahte hai 


console.log(Math.pow(2,5));// first perameter ka secon parameter powe hota hai 2 ka power 5 =  32 
console.log(Math.sqrt(16));// ye function kisi number ka squaroot nikal ke dega like 16 ka 4 
console.log(Math.cbrt(8));//self search
console.log(Math.abs(-18))//negative number ko positive bna dega keval negative value.
console.log(Math.max(28,32,43,12,22,11))//in sab me se max number nikal ke dega. 
console.log(Math.min(21,22,12,3,43,55,4,3,33,23))// sb me se minmum nuber nikal kr dega.
console.log(Math.random());// ye function 0 se leke 1 ke bich random number laaker deta hai.
console.log(Math.trunc(Math.random()*900000+10000));//otp math.trunc kisi number ke point ke baad ka saari value hta deta hai. 
//10000 isliye + kiya hai kui random number 0 se hi start hota hai aur jaise hi 100000 likha abhi random number 100001 yha se start hoga 
const aa = 12.099876570;
console.log(aa.toFixed(2));// point ke baad jitna nu,ber rkhna ho utna rkh skte hai. yha pr 2 hai to point ke baad sirf do number dikhenge baaki saare remove ho jaayenge.





