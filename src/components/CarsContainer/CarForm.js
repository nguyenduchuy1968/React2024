import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../store";
import {useEffect} from "react";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.cars)
    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }

    const update = async (car) => {
        dispatch(carActions.updateById({id: carForUpdate.id, carData: car}))
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')} />
            <input type="text" placeholder={'price'} {...register('price')} />
            <input type="text" placeholder={'year'} {...register('year')} />
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};