import React from 'react'
import ServiceCard from './ServiceCard'
import {Col } from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Plan your travels wisely with accurate weather forecasts at your fingertips.",
    },
    {
        imgUrl: guideImg, 
        title: "Best Tour Guide",
        desc: "Embark on unforgettable journeys with the best tour guide by your side.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor-made travel experiences crafted just for you.",
    },  
]

const ServiceList = () => {
  return(<>
    {
    servicesData.map((item, index) => <Col lg="3" md="6" sm="12" className="mb-4" key={index}><ServiceCard item={item} /></Col>)
    }
    </>
  )
} 

export default ServiceList