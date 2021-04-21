        Moralis.initialize("APPLICATION_ID"); // Application id from moralis.io
		Moralis.serverURL = "SERVER_URL"; //Server url from moralis.io
	
		async function login(){
			console.log("login clicked");
			var user = await Moralis.Web3.authenticate();
			if(user){
				console.log(user);
			
			}
		}

        signup = async (email, password) => {

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

        logout = async ( ) => await Moralis.User.logOut();

        document.getElementById("LoginwithMetamask").onclick = login;
        document.getElementById("signup").onclick => signup(document.getElementById("email").value, document.getElementById("password").value);

        