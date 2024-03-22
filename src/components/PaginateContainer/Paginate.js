import {useSearchParams} from "react-router-dom";

import css from './Paginate.module.css'

const Paginate = ({page, total_pages}) => {
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
            <button disabled={page <= '1'} onClick={prev}>prev</button>
            <h4> page {page}</h4>
            <button disabled={page === total_pages} onClick={next}>next</button>
        </div>

    )
}

export {Paginate};