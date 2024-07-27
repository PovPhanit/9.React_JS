import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './app.css'
const SetViewOnMarker = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13); // Default zoom level
    }
  }, [map, position]);

  return null;
};

export default function App() {
  const [position, setPosition] = useState([11.562108, 104.888535]); // Initial position in Cambodia
  const [hasLocation, setHasLocation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [address,setAddress]=useState('');

  
 
  
  const fetchAddress = async (coords) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coords[0]}&lon=${coords[1]}&format=json`);
      const data = await response.json();
      console.log(data);
      setAddress(data.display_name);
    } catch (error) {
      console.error("Error fetching address: ", error);
    }
  };


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          setHasLocation(true);
          setLoading(false);
          fetchAddress([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  const handleMarkerClick = (e) => {
    const map = e.target._map;
    map.setView(e.latlng, 16); // Zoom in to level 16 when the marker is clicked
    console.log('click')
    console.log(e.latlng)
    fetchAddress([e.latlng.lat, e.latlng.lng]);
  };

  console.log(address)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#afafeb99f' }}>
      <div style={{ width: '50%', height: '50%' }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hasLocation && (
              <>
                <Marker position={position} eventHandlers={{ click: handleMarkerClick }}>
                  <Popup className="custom-popup">
                    <div>{address}</div>
                    <a href={`https://www.google.com/maps/@${position[0]},${position[1]},16z?entry=ttu`} target='_blank' style={{textDecoration:"none",fontWeight:'bold'}}>Click here</a>
                  </Popup>
                </Marker>
                <SetViewOnMarker position={position} />
                <Marker position={[11.539131868523793, 104.78048434505943]} eventHandlers={{ click: handleMarkerClick }}>
                  <Popup className="custom-popup">
                    <div>{address}</div>
                    <a href={`https://www.google.com/maps/@${11.539131868523793},${104.78048434505943},16z?entry=ttu`} target='_blank' style={{textDecoration:"none",fontWeight:'bold'}}>Click here</a>
                  </Popup>
                </Marker>
                <SetViewOnMarker position={[11.539131868523793, 104.78048434505943]} />
                <Marker position={[11.529549723328, 104.78094618316162]} eventHandlers={{ click: handleMarkerClick }}>
                  <Popup className="custom-popup">
                    <div>{address}</div>
                    <a href={`https://www.google.com/maps/@${11.529549723328},${ 104.78094618316162},16z?entry=ttu`} target='_blank' style={{textDecoration:"none",fontWeight:'bold'}}>Click here</a>
                  </Popup>
                </Marker>
                <SetViewOnMarker position={[11.529549723328, 104.78094618316162]} />
              </>
            )}
          </MapContainer>
        )}
      </div>
    </div>
  );
}
