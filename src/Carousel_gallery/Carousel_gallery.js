import Carousel from 'react-bootstrap/Carousel'
import Bus from '../web_assets/bus.png'
import './Carousel_gallery.css'

import React, { useState } from 'react'
import { Contanier, Row, Col } from 'reactstrap';

export default function Carousel_gallery() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel style={{ paddingTop: "75px" }}>
            <Carousel.Item interval={5000} >
                <div className='vehicle_image_box'>
                    <img className='img_fluid' src={Bus} />
                </div>
            </Carousel.Item>
            <Carousel.Item interval={5000} >
                <div className='vehicle_image_box'>
                    <img className='img_fluid' src={Bus} />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

