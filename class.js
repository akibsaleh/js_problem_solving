// class Product {
//   country = 'Bangladesh';
//   constructor(name) {
//     this.name = name;
//   }
//   speak(talk) {
//     console.log(`talking about ${talk}`);
//   }
// }
// class Teacher {
//   constructor(name, subject) {
//     this.name = name;
//     this.subject = subject;
//     this.duty = function () {
//       return `${this.name} teaches ${this.subject}`;
//     };
//   }
// }

// const tapan = new Teacher('Shahjajan Tapan', 'Physics');

// console.log(tapan.duty());

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  detail() {
    console.log(`${this.username} has email : ${this.email}`);
  }
}

const user1 = new User('akibzihan', 'akibzihan@gmail.com');
const user2 = new User('igninjazihan', 'mazharul@gmail.com');

console.log(user1.username);
