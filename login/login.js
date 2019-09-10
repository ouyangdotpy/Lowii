const loginButton = document.querySelector('.loginBtn');


loginButton.addEventListener('click', validateLoginData => {
   
   //Setting login variables
   const email = document.querySelector('.email').value;
   const pass = document.querySelector('.pass').value;
   
   //Validating data
   if (email.value || pass.value === ''){
      alert('Please, type a valide emai-l / pass.');
      //Cleaning data
      email.value = "";
      pass.value = "";
   }else if (pass.length <= 6){
      alert('Please, type a valid pass.');
      
      //Cleaning data
      email.value = " ";
      pass.value = " ";
   }else{
      //If === Succes
      alert('succes');
   }
});