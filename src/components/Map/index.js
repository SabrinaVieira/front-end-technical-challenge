import React from "react";
import GoogleMapReact from "google-map-react";
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

const defaultProps = {
  center: {
    lat: -23.5062,
    lng: -47.4559
  },
  zoom: 12
};

export default function Map() {

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "55vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50,50,50,50]}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
}
