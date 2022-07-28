import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [country, setCountry] = useState()
  const [filterCountry, setFilterCountry] = useState()
  

useEffect(() => {
  const URL= `https://restcountries.com/v2/name/venez`
      axios
      .get(URL)
      .then((resp) => setCountry(resp.data[0]))
      .catch((error) => console.log(error.message));
}, [])


function target(e){
  setFilterCountry(e.target.value)
 
}

function changedCountry(){
  const URL= `https://restcountries.com/v2/name/${filterCountry}`
      axios
      .get(URL)
      .then((resp) => setCountry(resp.data[0]))
      .catch((error) => console.log(error.message));
}

  return (
    <div className="App">
      <input type="text" onChange={target} />
      <button onClick={changedCountry}>change</button>
   <h1>Country: {country?.name}</h1>
   <img src={country?.flags.png} alt="" />
   <p><span> region: </span>{country?.region}</p>
   <p><span>subregion: </span> {country?.subregion}</p>
   <p><span>capital: </span> {country?.capital}</p>
   <p><span>languages: </span> {country?.languages[0].name}</p>
   <p><span>population:</span>  {country?.population}</p> 
    </div>
  )
}

export default App
