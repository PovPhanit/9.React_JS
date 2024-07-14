import styles from './CityList.module.css'
import Cityitem from './Cityitem'
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/CitiesContext'

export default function CityList() {
  const {cities,isLoading}=useCities();
    if(isLoading) return <Spinner />
    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map" />
  return (
    <ul className={styles.CityList}>
        {cities.map(city=><Cityitem city={city} key={city.id}/>)}
    </ul>
  )
}
