
let signup = document.getElementById("signup-form");

signup.addEventListener("submit",event =>{
    event.preventDefault();
    let inputs = [document.signupForm.name,
    document.signupForm.lastName,document.signupForm.email,
    document.signupForm.password];
    
    inputs.forEach((input)=>{
        let inputContainer = input.parentNode;
        
        // Handle empty input
        if(input!= null && input.value === ""){
            let errorMsg = `${input.placeholder} cannot be empty`;

            inputContainer.querySelector(".error-message").innerHTML=errorMsg;
            inputContainer.querySelector(".error-icon").style.display="block";
            input.classList.add("input-error");
            
        }else{
            inputContainer.querySelector(".error-message").innerHTML="";
            inputContainer.querySelector(".error-icon").style.display="none";
            input.classList.remove("input-error");

        }

        // Handle invalid email
        if(input!=null && input.id === "email"){
            let valid = true;

            if(valid===false){
                inputContainer.querySelector(".error-message").innerHTML = "Looks like this is not an email";
            }
            
        }
    })   
});