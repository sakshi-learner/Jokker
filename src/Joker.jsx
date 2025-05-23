import { useEffect, useState } from "react";
import "./Joker.css";
import JokeImg from "./JokeImg";
function Joker(){

    let [joke, setJoke] = useState({});
    let[show , setShow] = useState(false);
    const URL = "https://official-joke-api.appspot.com/random_joke";

   let  onBtn =()=>{
        console.log("Double Clicked!");
        if(show == true ){
         setShow(false);
         }else{
         setShow(true);
        }
    }

    const getNewJoke = async ()=>{
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect( ()=>{ 
        async function getfirstJoke(){
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getfirstJoke();

    },[]);

    return(
        <>
         
        <h3 className="heading">Joker!! </h3>
       
        <div className="Joker">

            <h2>{joke.setup}</h2>
            
            <h2>{joke.punchline}</h2>
            
        </div>
        <button  className="btn" onClick={getNewJoke} onDoubleClick={onBtn}>New Joke</button>

        {
         show && <JokeImg/>
        }
        </>
    );
}

export default Joker;