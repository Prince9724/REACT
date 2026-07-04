// swap
// swaping ko three method ke sath kiya jaa skta hai 
// 1. is ek new variable bna ke  varibale bna ke 
//example : maan lo ek glas a hai aur b glass hai dono me kuch hai jaise ki juice ab a ka juice b me au b ks a rkhna hai 
// to hmaare paas ek rasta hai ki ek glass le lete hai jiska name c ho a ka juice c me dalenge
//a waala glass khali ho gya ab b waale ko a me rkhenge b glass khali hua ab jo hmne c me a ka juice rkha tha 
// c se nikal ke b me rkh denge is trah se a ka value b me aur b ka value a me aa jaayega .

let a = 10;
let b = 20;
// let c =a;//c=a -> a = 10;
// a=b; //a = b -> b = 20 -> a = 10
// b=c; // c = 10 -> b = 10

// 2 . is  -  aur  + krke
// a=  a+b // yha pr dono value ko add kr do a+b = 30 a new value 30 ho gya .
// b = a-b //ab jo a ki new value hai usme b ki jo value hai usko - kr rhe hai b = 30-20 = 10 yha pe a ki value swap ho gyi hai 
// // abhi b ki current value 10 hai aur a ki 30 hi hai 
// a = a-b // ab 30-10 = 20 ho gya swaping 
// // aki value b ko aur b ki value a ko mil gyi 

// 3. is array \
[a,b] = [b,a]//ye sabse easy hai do number ka swapin ke liye 
console.log(a,b);
console.log(a)
console.log(b)