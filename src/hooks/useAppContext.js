import {Context} from "../hoc";
import {useContext} from "react";

const useAppContext = () => useContext(Context)

export {
    useAppContext
}