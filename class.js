class Product {
  country = 'Bangladesh';
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}
class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.duty = function () {
      return `${this.name} teaches ${this.subject}`;
    };
  }
}

const tapan = new Teacher('Shahjajan Tapan', 'Physics');

console.log(tapan.duty());
