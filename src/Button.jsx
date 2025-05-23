function printHEY(){
    console.log("heyy..!!");
}
function Button(){
    return(
        <>
        <div>
            <button onClick={printHEY}>click me</button>
        </div>
        </>
    )
}

export default Button;