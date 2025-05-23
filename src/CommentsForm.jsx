import { useState } from "react";

function CommentsForm(){

    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5,
    });

    let handleInputChange =(event)=>{

        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value};
        });
    };


    let handleSubmit =(event)=>{
      console.log(formData);
      event.preventDefault();
      setFormData({username: "",
        remark: "",
        rating: 5,
    });
    };
    return(
        <>
        <div>
           <h3>give comment</h3>
           <form onSubmit={handleSubmit}>
              <label htmlFor="username">User name : </label>
              <input 
               id="username"
               placeholder="username"
               type="text"
               value={formData.username}
               onChange={handleInputChange}
               name="username"
               />
              <br></br>
              <br></br>
               
              <label htmlFor="remark"> Remark : </label> 
              <textarea name="remark"id="remark" placeholder="Add Remarks" value={formData.remark} onChange={handleInputChange}>Remark</textarea>
              <br></br>
              <br></br>

              <label htmlFor="rating">Rating :  </label> 
              <input
              name="rating"
              id="rating" 
              placeholder="rating" 
              type="number" 
              min={1} max={5} 
              value={formData.rating}
              onChange={handleInputChange}
              />
              <br></br>
              <br></br>

              <button>Add comment</button>
           </form>
        </div>
        </>
    );
}
export default CommentsForm;