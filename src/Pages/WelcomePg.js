import { useNavigate } from "react-router-dom";


const WelcomePg = () => {
    
    let navigate = useNavigate();
    const goCountries = () => {
        navigate("/countries");
    }


    return(
        <>
            <p>hello</p>
            <button onClick={goCountries}>Go to countries</button>
        </>
    )
}



export default WelcomePg;