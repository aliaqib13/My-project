        Moralis.initialize("APPLICATION_ID"); // Application id from moralis.io 
		Moralis.serverURL = "SERVER_URL"; //Server url from moralis.io
	
		async function login(){
			console.log("login clicked");
			var user = await Moralis.Web3.authenticate();
			if(user){
				console.log(user); // if you see their in console.log window see the user after that you connect with you apps and what you want to show their user
			
			}
		}
    

    async function logOut() {   // this is logout fuction 
      await Moralis.User.logOut();
      console.log("logged out");
    }
         const currentUser = Moralis.User.current();
          if (currentUser) {
              // if current user log in so do want any thing after that
          } else {
              // show the signup or login page fuction call 
              signup(email, password);
          }

        signup = async (email, password) => {   // this is signup fuction 

            const user = new Moralis.User();
            user.set("username", email);
            user.set("password", password);
            user.set("email", email);
            
        
            try {
              await user.signUp();
              console.log("user");
              console.log(user);   

    
            } catch (error) {
        
              alert("Error: " + error.code + " " + error.message);
            }


        }

    

      async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out");
      }

      document.getElementById("btn-login").onclick = login;
      document.getElementById("btn-logout").onclick = logOut;

        logout = async ( ) => await Moralis.User.logOut(); // this fiction logout user from here

        document.getElementById("LoginwithMetamask").onclick = login;
        document.getElementById("signup").onclick => signup(document.getElementById("email").value, document.getElementById("password").value);

        
