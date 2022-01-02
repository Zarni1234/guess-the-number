'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 👍';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';

// document.querySelector('.guess').value = '13';
// console.log(document.querySelector('.guess').value);

// const x=function(){
//     console.log(document.querySelector('.guess').value);
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'NO number Try again';
//   }
// });

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent;
// });

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number found';
//   }
// });

// const averageDolphins = (44 + 23 + 71) / 3;
// console.log(averageDolphins);

// const averageKoalas = (65 + 54 + 49) / 3;
// console.log(averageKoalas);

// const winner = function (averageDolphins, averageKoalas) {
//   if ((averageDolphins >= averageKoalas * 2)) {
//     console.log(`Dolphin win Koals ${averageDolphins} vs ${averageKoalas}`);
//   } else if ((averageKoalas >= averageDolphins * 2)) {
//     console.log(`Koals win Dolphins ${averageKoalas} vs ${averageDolphins}`);
//   } else {
//     console.log(`No one win`);
//   }
// };

// console.log(winner());

// const avgScore = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = avgScore(44, 23, 71);
// const scoreKoalas = avgScore(65, 54, 49);

// const avgScore = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = avgScore(85, 54, 43);
// const scoreKoalas = avgScore(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win Koalas ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koals win Dolphins ${scoreKoalas} vs ${scoreDolphins}`);
//   } else {
//     console.log(`No team win`);
//   }
// };
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const nameKey = 'Name';

// const myBio = {
//   firstName: 'IT',
//   lastName: 'Yan Tote',
//   birthYear: 1987,
//   job: 'Developer',
//   friends: ['Michel', 'Steven', 'Peter'],
//   calcAge: function (birthyear) {
//     const age = 2021 - this.birthYear;
//     return this.age;
//   },
// };
// console.log(myBio.calcAge());
// console.log(myBio.age);
// // myBio.location = 'Myanmar';
// myBio['facebook'] = 'Jiro';
// myBio.subject = ['javascript', 'webdesign', 'reactjs'];
// console.log(myBio);
// console.log(
//   `${myBio.firstName} ${myBio.lastName} open ${myBio.subject.length} subject and interesting subject is ${myBio.subject[0]}`
// );

// console.log(myBio.lastName);
// console.log(myBio['first' + nameKey]);
// console.log(myBio.friends[1]);

// const interestIn = prompt(`Type between above`);
// if (myBio[interestIn]) {
//   console.log(myBio[interestIn]);
// } else {
//   console.log(`Write again ${interestIn} is not vaild`);
// }

// const myBio = {
//   firstName: 'IT',
//   lastName: 'Yan Tote',
//   birthYear: 1987,
//   job: 'Developer',
//   friends: ['Michel', 'Steven', 'Peter'],
//   hasDriversLicence: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
// };
// console.log(myBio.calcAge());
// console.log(myBio.age);
// console.log(myBio['calcAge'](1987));

// const myBio = {
//   firstName: 'IT',
//   lastName: 'Yan Tote',
//   birthYear: 1987,
//   job: 'Developer',
//   friends: ['Michel', 'Steven', 'Peter'],
//   hasDriversLicence: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
// };
// console.log(myBio.calcAge());
// console.log(myBio.age);

// const myBio = {
//   firstName: 'IT',
//   lastName: 'Yan Tote',
//   birthYear: 1987,
//   job: 'Developer',
//   friends: ['Michel', 'Steven', 'Peter'],
//   hasDriversLicence: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   getSummery: function () {
//     return `${this.firstName} ${
//       this.lastName
//     } is a ${this.calcAge()} year teacher and he has ${
//       this.hasDriversLicence ? 'a' : 'not'
//     } driverLicence`;
//   },
// };
// console.log(myBio.getSummery());
// console.log(myBio.calcAge());
// console.log(myBio.age);

// const mark = {
//   fullName: 'Mark Pro',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   },
// };

// const john = {
//   fullName: 'John Wich',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi);
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName} is greater than ${john.fullName} ${mark.bmi} vs ${john.bmi}`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName} is highter`);
// }
// const bmi = function (mass, height) {
//   return mass / height ** 2;
// };

// const bmiMark = bmi(78, 1.69);
// const bmiJohn = bmi(92, 1.95);
// console.log(bmiMark, bmiJohn);

// if (bmiMark > bmiJohn) {
//   console.log(`Mark bmi is greater than John bmi`);
// } else if (bmiJohn > bmiMark) {
//   console.log(`John bmi is greater than Mark bmi`);
// } else {
//   console.log(`No one heighter`);
// }

// loop က control structure ပါ

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weight repetation ${rep} 🏋 `);
//   console.log(`Body structure strong ${rep}`);
// }

// const myBio = [
//   'IT',
//   'Yan Tote',
//   2021 - 1987,
//   'Developer',
//   ['Michel', 'Peter', 'Steven'],
//   true,
// ];

// for (let i = 0; i < myBio.length; i++) {
//   if (typeof myBio[i] !== 'string') continue;
//   console.log(myBio[i], typeof myBio[i]);
// }

// const type = [];

// for (let i = 0; i < myBio.length; i++) {
//   console.log(myBio[i], typeof myBio[i]);
//   // type[i] = typeof myBio[i];
//   type.push(typeof myBio[i]);
// }
// console.log(type);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }
// console.log(ages, years);

// const myBio = [
//   'IT',
//   'Yan Tote',
//   2021 - 1987,
//   'Developer',
//   ['Michel', 'Peter', 'Steven']
// ];

// for (let i = myBio.length - 1; i >= 0; i--) {
//   console.log(myBio[i]);
// }

// for (let exercises = 1; exercises < 4; exercises++) {
//   console.log(`----- Main Exercises ${exercises} -----`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`----Sub Exercises ${rep} -----`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weight repetation ${rep} 🏋 `);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`lifting weight repetation ${rep} 🏋 `);
//   rep++;
// }

// let dice=Match.trunc(Math.random*6)+1 ;

// while(dice!== 6){
//   console.log(`You rolled a ${dice}`);
//   dice=Match.trunc(Math.random*6)+1 ;

//   if(dice=== 6){
//     console.log(`Loop is end`)
//   }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 0) {
//     console.log(`Loop is end`);
//   }
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; isNaN < bill.length; i++) {
//   const tip = calcTip(bill[i]);
//   tips.push(tip);
//   totals.push(tip + bill[i]);
// }

// console.log(bill, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr;
//   }
//   return sum / 3;
// };
// console.log(calcAverage(bill));









// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="Correct Number 👍" ;

// document.querySelector('.number').textContent='13';
// document.querySelector('.score').textContent='10';

// document.querySelector('.guess').value=13;
// console.log(document.querySelector('.guess').value);

// const x=function(){
//   console.log(document.querySelector('.guess').value);
// }

let secretnumber=Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=secretnumber;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener("click",function(){

   const guess=Number( document.querySelector('.guess').value);
  //  console.log(typeof guess);

    ///// When there is no input
     if(!guess){
     document.querySelector(".message").textContent="No Number Please try agian";
     ///// When player win
   }else if(guess===secretnumber){
    document.querySelector('.message').textContent="Correct Number 👍" ;
    document.querySelector('.number').textContent=secretnumber;
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".number").style.width="30rem";
    if(score >highscore){
      highscore=score;
      document.querySelector(".highscore").textContent=highscore;
    }


    ///// When guess is too height
   }else if(guess > secretnumber){
     if(score>0){
      document.querySelector('.message').textContent="Too Height" ;
      score--;
      document.querySelector('.score').textContent=score;
     }else{
      document.querySelector('.message').textContent="Game Over !" ;
      document.querySelector('.score').textContent="0";
     }
     ///// When guess is too low
   }else if(guess < secretnumber){
    if(score>0){
      document.querySelector('.message').textContent="Too Low" ;
      score--;
      document.querySelector('.score').textContent=score;
    }else{
      document.querySelector('.message').textContent="Game Over !" ;
      document.querySelector('.score').textContent="0";
     }
   }
   
});

   
document.querySelector(".again").addEventListener("click",function(){
  score=20;
  secretnumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent="Starting guesting..." ;
  document.querySelector('.score').textContent=score ;
  document.querySelector('.number').textContent="?" ;
  document.querySelector('.guess').value=" " ;
  document.querySelector('body').style.backgroundColor="#000";
  document.querySelector('.number').style.width="15rem" ;
});


