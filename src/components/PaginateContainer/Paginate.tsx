//pagination bases on them first page (number 1) and last page (total_pages), paginate's buttons will inactive when rich these values.
import {useSearchParams} from "react-router-dom";

import css from './Paginate.module.css'
import {IMovie, IPagination} from "../../interfaces";
import {FC} from "react";

const Paginate: FC<IPagination<IMovie>> = ({page, total_pages}) => {
    const [_, setQuery] = useSearchParams({page: '1'});
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
            <button disabled={page <= 1} onClick={prev}>prevPage</button>
            <h4> page {page}</h4>
            <button disabled={page === total_pages} onClick={next}>nextPage</button>
        </div>

    )
}

export {Paginate};