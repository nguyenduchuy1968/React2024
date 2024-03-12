import {useSearchParams} from "react-router-dom";

import css from './Paginate.module.css'
import {Pagination, Stack} from "@mui/material";

const Paginate = ({page, totalPage}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div className={css.Paginate}>
            <button disabled={page <= '1'} onClick={prev}>prev</button>
            <h4> page {page}</h4>
            <button disabled={page === totalPage} onClick={next}>next</button>
        </div>

    )
}

export {Paginate};