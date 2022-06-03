import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StoreDataContext } from "../../providers/SearchProvider";


const defaultProps = {
  center: {
    lat: -23.5589,
    lng: -46.6488,
  },
  zoom: 11
};

export default function Map() {
  const { storedata } = useContext(StoreDataContext);

  return (
    <div style={{ height: "65vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_MAP_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
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
