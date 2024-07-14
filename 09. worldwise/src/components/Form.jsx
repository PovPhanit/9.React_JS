// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import Spinner from '../components/Spinner'
import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from '../components/Message'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL="https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0";

function Form() {
  const {createCity}=useCities();
  const [lat,lng]=useUrlPosition();
  const [isLoadingGeolocation,setIsLoadingGeolocation]=useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [geoCodingError,setGeoCodeError]=useState('');
  // const emoji=convertToEmoji();
  const [emoji,setEmoji]=useState('');
    useEffect(function(){
      async function fetchCityData(){
          try{
            setIsLoadingGeolocation(true);
            const res=await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
            const data=await res.json();
            console.log(data);
            if(!data)
            throw new Error("error");
            setCityName(data.city||data.locality||'');
            setEmoji(convertToEmoji(data.countryCode));
          }catch(err){
            console.log(err);
          }finally{
              setIsLoadingGeolocation(false);
          }
      }
      fetchCityData();
    },[lat,lng])
    function handlesubmit(e){
        e.preventDefault();
        if(!cityName || !date) return;
        const newCity={
          cityName,
          country,
          emoji,
          date,
          notes,
          position:{lat,lng},
        }
        console.log(newCity);
        createCity(newCity);
    }
    if(isLoadingGeolocation) return <Spinner />
    if(!lat && !lng)
    return <Message message='start by clicking somewhere'/>
    if(geoCodingError) return <Message message={geoCodingError}/>
  return (
    <form className={styles.form} onSubmit={handlesubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"    onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker onChange={date=>setDate(date)} selected={date} dateFormat={'dd/MM/yyyy'}/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
