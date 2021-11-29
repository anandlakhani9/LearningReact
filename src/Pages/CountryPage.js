import Card from "../Components/Card"
import Button from "../Components/Button"
import '../Adapters/CountryAdapter'
import { useState, useEffect } from "react"
import { getTwentyRandomCountries } from "../Adapters/CountryAdapter"
import { useNavigate } from "react-router-dom";


const CountryPage = () => {
    const [countries, setCountries] = useState(null);
    const [index, setIndex] = useState(0);
    //const [currentCountry, setCurrentCountry] = useState(null)
    
    useEffect(()=>{
        getTwentyRandomCountries().then(response => setCountries(response))
    }, [])

    const increaseIndex = () => {
        if (index < 19) {
            setIndex(index + 1)
        }
        else{
            alert("last country in list")
        }
    }
    const decreaseIndex = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
        else{
            alert("first country in list")
        }
    }
    //console.log(countries)
    let navigate = useNavigate();
    const goHome = () => {
        navigate("/");
   }
    
    return (
        countries ?
        <div>
            <Card name={countries[index].name.common} population={countries[index].population}/>
            <Button purpose={"Previous"} onClick={decreaseIndex}/>
            <Button purpose={"Next"} onClick={increaseIndex}/> 
            <button onClick={goHome}>Go home</button>
        </div>
        :
        <h1>Loading</h1>
    )
}
export default CountryPage;