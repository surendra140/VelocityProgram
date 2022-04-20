const container = document.querySelector(".container6"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    //js code to login 
    const getLogin = async() => {
        var username =  document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        var y = await "successfully login";
    
        if (username === "user" && password === "user") {
          alert(y);
          location.reload();
           
        } else {
            alert("Wrong Credentials")
        }
    
    }

    //callback function
    function data() {
 
       function showData(name, password, username) {  
        alert('Welcome ' + name + '\n Your entered username is: ' + username + '\n Your entered password is:'+ password);  
        }  
          
        function getData(callback) {  
        var name = prompt(" Welcome to the GreatLearning  \n Enter your name: ");  
        var username = prompt(" Enter username: ");  
        var password = prompt(" Enter password: ");  
        callback(name, password, username);  
        }  
          
    getData(showData);  
}
    
  