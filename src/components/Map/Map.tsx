import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import '../../utils/fix-map-icon';
import {SimpleAdEntity} from 'types';

import 'leaflet/dist/leaflet.css';
import './Map.css';
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const { search } = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search }`);
            const data = await res.json();

            setAds(data);

        })();
    }, [search])

    return (
        <div className='map'>
            <MapContainer center={[52.4231573,16.9377912]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id }/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}