import styles from './CountryList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';


export default function CountryList() {
    const {cities,isLoading}=useCities();
    if(isLoading) return <Spinner />
    if(!cities.length) 
    return (<Message message="Add your first city by clickin
    g on a city on the map" />);
    const countries=cities.reduce((arr,city)=>{
      console.log(arr,city);
    if(!arr.map((el)=>el.country).includes(city.country))
      return [...arr,{country:city.country,emoji:city.emoji}];
    else return arr;
    },[])    
    console.log(countries);
    return (
    <ul className={styles.countryList}>
        {countries.map(country=>(
          <CountryItem country={country} key={country.country}/>
        ))}
    </ul>
  )
}
