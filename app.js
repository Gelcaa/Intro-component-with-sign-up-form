
// const fname = document.getElementById('fname');
// const form = document.getElementById('signup')
// const lname = document.querySelector('#lname');
// const emailAddress = document.querySelector('#email');
// const password = document.querySelector('#password');
// const form = document.querySelector('#signup');
// const element = document.querySelector(".submit");


// element.addEventListener('click', () => {
//     alert("sike")
//   if (fname.value === ''){
//     document.querySelector('.fname_error').style.display = 'block';
//     firstName.style.border = "3px solid #FF7979";
   
//   }
//   else{
//     document.querySelector('.fname_error').style.display = 'none';
//   }
// })

// const element = document.getElementById("submit");
// element.addEventListener("click", myFunction);

// function myFunction() {
//    if (fname.value === null) {
//       // document.querySelector('.fname_error').style.display = 'block';
//       alert("yay")
//    }
//    else {
//       element.preventDefault()
//       document.querySelector('.fname_error').style.display = 'none';
//    }
// }

// form.addEventListener('submit',(e) => {
//      if (fname.value === null) {
//     alert("yay")
//   }
// //  e.preventDefault()
// })
// documentonst firstname = do.getElementById('fname');
const submit = document.getElementById("submit")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const emailaddress = document.getElementById("emailaddress")
const password = document.getElementById("password") 

submit.addEventListener("click", function (event) {
   
     event.preventDefault()
   if (fname.value === '') {
      fname_error.textContent = 'First Name cannot be empty';
      fname.style.border = "3px solid #FF7979";
      fname.classList.add('warning_icon');
      fname.placeholder = " ";
   }
     if (lname.value === '') {
      lname_error.textContent = 'Last Name cannot be empty';
      lname.style.border = "3px solid #FF7979";
      lname.classList.add('warning_icon');
      lname.placeholder = " ";
     }

   if (emailaddress.value === '') {
      email_error.textContent = 'Looks like this is not an email';
      emailaddress.style.border = "3px solid #FF7979";
      emailaddress.classList.add('warning_icon');
      emailaddress.placeholder = "email@example/com";
      emailaddress.style.placeholder = "#FF7979";
   }
    if (password.value === '') {
      password_error.textContent = 'Password cannot be empty';
      password.style.border = "3px solid #FF7979";
       password.classList.add('warning_icon');
        password.placeholder = " ";
   }
   else {
       
   }
});
