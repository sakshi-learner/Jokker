import { useState } from "react";
function Form(){

    let[formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",

    });

    let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let newVal = event.target.value;
       
        setFormData((currData) =>{
            return{...currData, [fieldName]: newVal};
        });
    };

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    }
    // let [fullName, setFullName] = useState("sakshi");

    // let handleNameChange =(event) =>{
    //    setFullName(event.target.value);
    // };
    return(
        <>
        <form onSubmit={handleSubmit}>
         <label htmlFor="name">Full Name : </label>   
         <input placeholder="name" 
           type="text"
           value={formData.passward} 
           id="name"
           name="fullName"
           onChange={handleInputChange}
         />
         

         <br></br>
         <br></br>
         <label htmlFor="username">User Name : </label>   
         <input placeholder="username" 
           type="text"
           value={formData.username} 
           id="username"
           name="username"
           onChange={handleInputChange}
         />

         <br></br>
         <br></br>
         <label htmlFor="password">Passward : </label>   
         <input placeholder="password" 
           type="password"
           value={formData.passward} 
           id="password"
           name="password"
           onChange={handleInputChange}
         />
         <br></br>
         <button>Submit</button>
        </form>
        </>
    )
}

export default Form;