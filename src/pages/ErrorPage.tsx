import {Header} from "../components";
import css from './errorPage.module.css'

const ErrorPage = () => {
    return (
        <div>
            <Header/>
            <h1 className={css.errorPage}>Sorry, Page not found !</h1>
        </div>
    );
};

export {ErrorPage};