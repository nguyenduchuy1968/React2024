import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    create: (post) => apiService.post(urls.posts.base, post),
    getById: (id) => apiService.get(urls.posts.byId(id))

}

export {
    postService
}