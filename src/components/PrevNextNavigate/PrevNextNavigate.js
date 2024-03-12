import {useNavigate} from "react-router-dom";

import css from './PrevNextNavigate.module.css'
const PrevNextNavigate = () => {
    const navigate = useNavigate();

    return (
        <div className={css.PrevNextNavigate_wrapper}>
            <div className={css.PrevNextNavigate}>
                <a onClick={() => navigate(-1)}> &#8656; Prev</a>
                <a onClick={() => navigate(1)}> Next &#8658;</a>
            </div>
        </div>
    );
};

export {PrevNextNavigate};