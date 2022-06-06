import axios from "axios";


export default class CommentsServices {
    async editComment(id, comment) {
        try {
            return await axios.put(`${process.env.REACT_APP_API_URL_BASE}/comments/${id}`, comment);
        } catch (e) {
            console.log(e);
        }
    }
    async addComment(comment) {
        try {
            return  await axios.post(`${process.env.REACT_APP_API_URL_BASE}/comments`, comment);
        } catch (e) {
            console.log(e);
        }
    }
    async getComments(id) {
        try {
            return await axios.get(`${process.env.REACT_APP_API_URL_BASE}/products/${id}/comments`);
        } catch (e) {
            console.log(e);
        }
    }
    async deleteComment(id) {
        try {
            return  await axios.delete(`${process.env.REACT_APP_API_URL_BASE}/comments/${id}`);
        } catch (e) {
            console.log(e);
        }
    }


}
