import axios from "axios";

export const getTwentyRandomCountries = () => {
    return (
        axios.get("https://restcountries.com/v3.1/all")
        .then(response => {
            return response.data.sort(() => 0.5 - Math.random())
            .slice(0,20)
        })
    )
}
