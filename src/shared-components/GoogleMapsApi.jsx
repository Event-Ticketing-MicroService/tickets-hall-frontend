import {
  GoogleMap,
  Marker,
  Circle,
  StandaloneSearchBox,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useEffect, useMemo, useRef, useState } from "react";

const GoogleMaps = ({
  radius = 0,
  setLatitude,
  setlongitude,
  latitude,
  longitude,
  address,
  setAddress,
  style,
}) => {
  const [map, setMap] = useState(null);
  const inputRef = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setAddress(place.formatted_address);
      setLatitude(lat);
      setlongitude(lng);
      map?.panTo({ lat, lng });
    }
  };

  const changeCoordinate = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setLatitude(lat);
    setlongitude(lng);
  };

  useEffect(() => {
    if (map) map.panTo(center);
  }, [center, map]);

  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <div className="w-full h-96 relative">
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged}
      >
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Search Location..."
          className={`text-black rounded-full bg-white px-4 py-2 absolute z-10 left-1/2 transform -translate-x-1/2 top-4 w-[400px] ${style}`}
        />
      </StandaloneSearchBox>

      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={center}
        zoom={12}
        onLoad={(map) => setMap(map)}
      >
        <Marker
          draggable
          position={center}
          onDragEnd={changeCoordinate}
          animation={google.maps.Animation.DROP}
        />

        <Circle
          center={center}
          radius={radius}
          options={{
            fillColor: "#FF0000",
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            fillOpacity: 0.35,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
