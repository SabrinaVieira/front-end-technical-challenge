import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StoreDataContext } from "../../providers/SearchProvider";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

//  const handleApiLoaded = (map, maps) => {
//   // use map and maps objects
//  };

const defaultProps = {
  center: {
    lat: -23.5489,
    lng: -46.6388,
  },
  zoom: 11
};

export default function Map() {
  const { storedata } = useContext(StoreDataContext);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "65vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onChange={""}
        onChildClick={""}
      >
        {storedata.map(place => (
          <LocationOnIcon
            lat={place.latitude}
            lng={place.longitude}
            key={place.name}
            place={place}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
