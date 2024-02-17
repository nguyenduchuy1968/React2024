import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService =  {
    getAll: () => apiService.get(urls.comments)
}

export {
    commentService
}