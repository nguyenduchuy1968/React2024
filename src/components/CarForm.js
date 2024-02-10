import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";


const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, handleSubmit, formState:{isValid, errors}, setValue} = useForm({mode: "all"});

    useEffect(() => {
        if(carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);
    const save = async (car) => {
        await carService.create(car);
        setTrigger(prev => !prev)
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'incorrect brand'
                }
            }
            )}/>
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value:1, message: 'min: 0'},
                max: {value:1000000, message: 'max: 1000000'}
            }
            )}/>
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value:1990, message: 'min: 1990'},
                max: {value:new Date().getFullYear(), message: 'new Date().getFullYear()'}
            }
            )}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
        </form>
    );
};

export default CarForm;