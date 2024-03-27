//creating Star rating with MUI
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import {FC} from "react";

interface ILabels {
    0.5: string,
    1: string,
    1.5: string,
    2: string,
    2.5: string,
    3: string,
    3.5: string,
    4: string,
    4.5: string,
    5: string,
    rating: number
}

const labels: ILabels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
    rating: null
};

interface IProps {
    rating: number
}

const StarRating: FC<IProps> = ({rating}) => {

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="text-feedback"
                value={rating}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
            />
            <Box sx={{ml: 2}}>{labels.rating}</Box>
        </Box>
    );
};

export {StarRating};