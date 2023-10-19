import gif from "../assets/img/giphy.gif"

function ItSOverNineThousand({setEaster}){
    return(
        <div className="backgroundPop" >
            <div className="divPop">

                <img src={gif} alt="It's over 9000!" />
                <button onClick={()=>setEaster(false)} >Fermer</button>
            </div>
        </div>
    )
}
export default ItSOverNineThousand;