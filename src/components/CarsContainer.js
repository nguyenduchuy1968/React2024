import React, {useEffect, useState} from 'react';

import {carService} from '../services/carService'
import CarForm from "./CarForm";
import Cars from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState()

    useEffect(() => {
        carService.getAll().then(({ data }) => setCars(data))
    }, [trigger]);
    // console.log(cars)

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr />
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export default CarsContainer;