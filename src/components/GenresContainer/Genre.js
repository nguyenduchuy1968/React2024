import {useNavigate} from "react-router-dom";

const Genre = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => navigate(`/genres/${id}`)}>{name}</div>
        </div>
    );
};

export {Genre};