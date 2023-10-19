function FonctionButton({handleClick}){

    let cancel = "C";
return(
    <button onClick={()=>{handleClick(cancel)}}>{cancel}</button>
)
}
export default FonctionButton;