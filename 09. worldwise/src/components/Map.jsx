import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { map } from "leaflet";
import useGeolocation from "../hooks/useGeolocation";
import Button from "./Button";
import {useUrlPosition} from "../hooks/useUrlPosition";

export default function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  console.log(cities);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  const [lat,lng]=useUrlPosition();
  const maplat = searchParams.get("lat");
  const maplng = searchParams.get("lng");
  useEffect(
    function () {
      if (maplat && maplng) setMapPosition([maplat, maplng]);
    },
    [maplat, maplng]
  );

  useEffect(
    function () {
      if (geolocationPosition){
      console.log('geolocation exec');
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
      }
    },
    [geolocationPosition]
  );
  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "lOADING..." : "USE YOUR LOCATION"}
      </Button>}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DeleteClick />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  //Zoom to marker
  map.setView(position);
  return null;
}
function DeleteClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
