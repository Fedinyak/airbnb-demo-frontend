import React from "react";
import { render } from "react-server";
import GoogleMap from "google-map-react";
/*
const GMap = () => (
  <GoogleMap defaultCenter={{ lat: 54.26, lng: 51.53 }} defaultZoom={4} />
);
render(<GMap />, document.getElementById("root"));*/
render() 
  return(
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />,
 
  );
}

   document.getElementByid("root")

/*
export default function() {
  return (
    <div>
      <GoogleMap center={{ lat: 54.26, lng: 51.53 }} zoom={4} />
    </div>
  );
}*/
