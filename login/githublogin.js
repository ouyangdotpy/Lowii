const githubLogin = document.querySelector('.github--');
githubLogin.addEventListener('click', () => {
   const preUser =  window.prompt('Type ur Github username.');
   
   //Getting Github data
   const gitUsername = `@${preUser}`;
   const api = `https://api.github/users/${gitUsername}`;
   
   if (preUser.length >= 0){
      
      //Getting API data
      fetch(api)
         .then(res => {
            console.log(res.json());
         })
         .catch(error => {
            console.warn(error);
         });
   }else{
      alert('Type a valid Github username!');
   }
});