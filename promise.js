/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * 
 * Q. WHY WE USE TRY CATCH WITH ASYNC AWAIT??????????
 * ANS: because async await is not handling error directly so to handle the error we use try catch with the async await.
 */
// PROMISE ONE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseOne = new Promise((resolve,reject)=>{
        // do an async task

        setTimeout(() => {
            console.log("Async task is completed");
           reject();
        },5000)
})

// consuming the promise
promiseOne.then(function(){
    console.log("promise is consumed");
}).catch((err)=>{
    console.log("error is founded",err);
})
// PROMISE TWO++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This is promise Two");
        resolve();
    },2000)
})
.then(function(){
    console.log("Promise Two is resolved");
})
// PROMISE THREE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=>{
          resolve({Name:"nitish",skills:"developement",Education:"graduate"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
});

// PROMISE FOUR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(()=>{
      
        let error = false; 
        if(!error){
            resolve({email:"nitish123@gmail.com", phNo:"2d3902",password:"234454343fsdf4234234fw33"})
        }else{
            reject('Error:something went wrong')
        }
    },1000)
})

promiseFour.then((userInfo)=>{
        console.log(userInfo);
        return userInfo.email
}).then((email)=>{
    console.log('email is : ',email);
})
.catch((err)=>{
    console.log('error is : ',err);
})
.finally(()=> console.log("all stuff has been done"));

// PROMISE FIVE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
          let error = true;
          if(!error){
            resolve({school:"anandamarga",location:"karharia",culture:"baba nam ke blam"})
          }else{
            reject("something went wrong with finding ananda marga")
          }
    },1000)
 })

 async function consumePromisefive(){
        try{
            const response = await promiseFive
            console.log(response);
        }catch(error){
        console.log(error);
        }
       
 }
consumePromisefive();

//FETCHING ONLINE REAL DATA USING ASYNC AND AWAIT++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 async function getUserData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data);
    }catch(err){
         console.log('err:',err);
    }
    
 }
 getUserData();

 // FETCHING ONLINE DATA USING .THEN() AND .CATCH()+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then((userdata)=>{
    return userdata.json()
})
.then((data)=>{
 console.log(data);
})
.catch((err)=>{
    console.log(err);
})



