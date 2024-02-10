import React from 'react';

import Car from "./Car";

const Cars = ({cars, setCarForUpdate, setTrigger}) => {

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
            
        </div>
    );
};

export default Cars;