//Question 1
//You are creating a Website for your college.
//Create a class user with 2 properties, name and email.
//It also has a method called viewData() that allow user to view website data.

class User {
  constructor(name, email) {
    this.Name = name;
    this.Email = email;
  }

  viewData() {
    console.log(
      `Visible Website data-\nName: ${this.Name} UserEmail: ${this.Email} `
    );
  }
}

let stu1 = new User("Abhishek", "abhishek@123");
stu1.viewData();

let stu2 = new User("Akash", "akash@123");
stu2.viewData();

let teacher1 = new User("Sachin", "sachin@123");
teacher1.viewData();

//Question 2
//Create a new class called Admin which inherits from User.
//Add a new method called editData to admin that allows it to edit website data.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  setData(newname, newMail) {
    this.Name = newname;
    this.Email = newMail;
  }
  editData() {
    console.log(
      `Previous Website data-\nName: ${this.Name} UserEmail: ${this.Email} `
    );
    this.setData("Aasthayuli", "aastha1289@gmail.com");
    console.log(
      `Updated Website data-\nName: ${this.Name} UserEmail: ${this.Email} `
    );
  }
}

let admin1 = new Admin("Animesh", "animesh@123");
//Updating Website Data
console.log("\n\nEditing Data:");
admin1.editData();
