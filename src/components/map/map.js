import React, {Component} from "react";
import ReactMapGL from "react-map-gl";

import {mapToken} from "./mapToken";

class Map extends Component {
    state = {
        viewport: {
          width: "100vw",
          height: "100%",
          position: "absolute",
          latitude: 48.464608,
          longitude: 35.047041,
          zoom: 13
        }
      };
    
    render() {
        return  <ReactMapGL {...this.state.viewport} onViewportChange={(viewport => this.setState(viewport))} mapboxApiAccessToken={mapToken}/>
    }
}

export default Map;