import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

interface Gym {
  id: number;
  name: string;
  description: string;
  genderNeutralBathroom: boolean;
  courses: string[];
  lat: number;
  lng: number;
  distance: string;
}

const dummyGyms: Gym[] = [
  {
    id: 1,
    name: 'Fitness Center Bayreuth',
    description: 'Queer-friendly gym with yoga and pilates.',
    genderNeutralBathroom: true,
    courses: ['Yoga for All'],
    lat: 49.9477,
    lng: 11.5789,
    distance: '0.5 km',
  },
  {
    id: 2,
    name: 'Gym Plus',
    description: 'HIIT and strength training classes.',
    genderNeutralBathroom: true,
    courses: ['HIIT Workout'],
    lat: 49.9500,
    lng: 11.5800,
    distance: '0.8 km',
  },
  {
    id: 3,
    name: 'Dance Studio',
    description: 'Fun dance fitness for all.',
    genderNeutralBathroom: false,
    courses: ['Dance Fitness'],
    lat: 49.9450,
    lng: 11.5750,
    distance: '1.2 km',
  },
];

// Custom icon for markers
const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapView = () => {
  const [selectedGym, setSelectedGym] = useState<Gym | null>(null);
  const bayreuthCenter: [number, number] = [49.9477, 11.5789];

  return (
    <div className="map-view-container">
      <div className="map-header">
        <h1>Gyms & Studios</h1>
      </div>
      
      <div className="map-wrapper">
        <MapContainer center={bayreuthCenter} zoom={13} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {dummyGyms.map(gym => (
            <Marker key={gym.id} position={[gym.lat, gym.lng]} icon={defaultIcon} eventHandlers={{ click: () => setSelectedGym(gym) }}>
              <Popup>
                <div className="popup-content">
                  <h3>{gym.name}</h3>
                  <p>{gym.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {selectedGym && (
        <div className="gym-panel">
          <div className="panel-header">
            <h2>{selectedGym.name}</h2>
            <button className="close-button" onClick={() => setSelectedGym(null)}>✕</button>
          </div>
          
          <div className="panel-content">
            <p className="panel-description">{selectedGym.description}</p>
            
            <div className="distance-badge">📍 {selectedGym.distance}</div>

            <div className="tags">
              {selectedGym.genderNeutralBathroom && <span className="tag bathroom">🚻 Gender-Neutral Bathrooms</span>}
            </div>

            <div className="courses-section">
              <h3>Classes Available</h3>
              <div className="courses-list">
                {selectedGym.courses.map((course, idx) => (
                  <div key={idx} className="course-list-item">
                    <span>→ {course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;