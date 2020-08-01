import React, {PureComponent} from "react";
import leaflet from "leaflet";
import {MapIconUrl} from "../../const";
import {OfferInterface, CityInterface} from "../../types";

interface Props {
  offers: OfferInterface[];
  currentOffer?: OfferInterface;
  hoveredOffer?: OfferInterface;
  currentCity?: CityInterface;
}

class Map extends PureComponent<Props, {}> {
  private _map: L.Map | null;
  private _markers: L.LayerGroup;
  private _mapContainer: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this._map = null;
    this._markers = leaflet.layerGroup();
    this._mapContainer = React.createRef();
  }

  componentDidMount() {
    const {offers, hoveredOffer, currentOffer, currentCity} = this.props;
    const city = currentCity.coords;

    this._createMap(city);
    this._setMapView(city);
    this._setMapLayers();
    if (currentOffer) {
      this._renderMarkers([currentOffer, ...offers], hoveredOffer, currentOffer);
    } else {
      this._renderMarkers(offers);
    }
  }

  componentWillUnmount() {
    this._map = null;
  }

  componentDidUpdate() {
    const {offers, currentCity, hoveredOffer, currentOffer} = this.props;
    const city = currentCity.coords;

    this._removeMarkers();
    this._setMapView(city);
    if (currentOffer) {
      this._renderMarkers([currentOffer, ...offers], hoveredOffer, currentOffer);
    } else {
      this._renderMarkers(offers, hoveredOffer);
    }
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._mapContainer}></div>
    );
  }

  _createMap(city, zoom = 12) {
    this._map = leaflet.map(this._mapContainer.current, {
      center: city,
      zoom,
      zoomControl: false,
    });
  }

  _setMapView(city, zoom = 12) {
    this._map.setView(city, zoom);
  }

  _setMapLayers() {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }

  _renderMarkers(offers, hoveredOffer?, currentOffer?, icon = this._getIcon(MapIconUrl.DEFAULT)) {
    offers.map((offer) => {
      if (currentOffer && offer.id === currentOffer.id) {
        this._renderMarker(offer, this._getIcon(MapIconUrl.ACTIVE));
      } else if (hoveredOffer && offer.id === hoveredOffer.id) {
        this._renderMarker(offer, this._getIcon(MapIconUrl.ACTIVE));
      } else {
        this._renderMarker(offer, icon);
      }
      this._markers.addTo(this._map);
    });
  }

  _removeMarkers() {
    if (this._map !== null) {
      this._markers.clearLayers();
    }
  }

  _renderMarker(offer, icon) {
    this._markers.addLayer(leaflet.marker(offer.coords, {icon}));
  }

  _getIcon(iconUrl) {
    return leaflet.icon({
      iconUrl,
      iconSize: [30, 30]
    });
  }
}

export default Map;
