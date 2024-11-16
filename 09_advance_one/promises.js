const promisesOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 1");
    resolve();
  }, 1000);
});
promisesOne.then(function () {
  console.log("Async 1 resolve");
});



new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async resolve 2");
});



const promisesThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ userName: "Ambuj", email: "abc@gmail.com" });
  }, 1000);
});
promisesThree.then(function (user) {
  console.log(user);
});



const promisesFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let value = true;
    if (value) {
      resolve({ userName: "Hari", password: 123 });
    } else {
      reject("something is worng");
    }
  }, 1000);
});
promisesFour
  .then(function (user) {
    console.log(user);
    return user.userName;
  })
  .then(function (userName) {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promiss is either resolve or rejected");
  });



const promisesFive = new Promise(function (resolve, reject) {
  let isLogIn = true;
  if (isLogIn) {
    resolve("user is logIN");
  } else {
    reject("user is logOut");
  }
});
async function consumePromiseFive() {
  try {
    let test = await promisesFive;
    console.log(test);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


async function getAllUser() {
    try {
        const response=await fetch('https://api.github.com/users/Ambuj072')
        const data=await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(`E: ${error}`);
            
    }
    
}
getAllUser()

//+++++++++++++++  Another way +++++++++++++++++++++++++++++   

fetch("https://api.github.com/users/Ambuj072")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})