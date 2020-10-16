import React from 'react';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring';

const ServiceCard = ({service}) => {
    const serviceId = service._id;
    const urlServiceTitle = service.title;
    const fade = useSpring({
        from:{
            opacity: .4
        },
        opacity: 1
    })
    const fade1 = useSpring({
        
        from:{
            opacity: 0
        },
        to:{
        opacity: 1}
    })
    return (
        <animated.div style={fade} className="col-md-4 service-card">
            <Link  to={"/service/"+serviceId+"/"+urlServiceTitle}>
                <img className="w-25 mb-4" src={`data:image/png;base64,${service.image.img}`} alt=""/>
                <h3 className="text-center" style={{color:"black"}}>{service.title}</h3>
                <animated.p style={fade1} className="text-center text-secondary">{service.serviceDescription}</animated.p>
            </Link>
        </animated.div>
    );
};

export default ServiceCard;