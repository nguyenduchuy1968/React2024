import {TextField} from "@mui/material";
import css from './SearchBar.module.css'

const SearchBar = (props) => {
    const {value, onChange} = props
    return (
        <div className={css.SearchBar}>
            <TextField
                label='search movie ...'
                variant="filled"
                type='search'
                value={value}
                onChange={onChange}
                margin="normal"
                style={{width: 500}}
                sx={{
                    mb: '3.5em'
                }}
            />
        </div>
    );
};

export {SearchBar};