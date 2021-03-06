import axios from "axios";

export default class ProductServices {
    async addProduct(product) {
        try {
            return await axios.post(`${process.env.REACT_APP_API_URL_BASE}/products/`, product);
        } catch (e) {
            console.log(e);
        }
    }
    async getProducts() {
        try {
            return await axios.get(`${process.env.REACT_APP_API_URL_BASE}/products`);
        } catch (e) {
            console.log(e);
        }
    }
    async deleteProduct(id) {
        try {
            return await axios.delete(`${process.env.REACT_APP_API_URL_BASE}/products/${id}?_embed=comments`);
        } catch (e) {
            console.log(e);
        }
    }
    async editProduct(id, product) {
        try {
            return await axios.put(`${process.env.REACT_APP_API_URL_BASE}/products/${id}`, product);
        } catch (e) {
            console.log(e);
        }
    }
    async getProduct(id) {
        try {
            return await axios.get(`${process.env.REACT_APP_API_URL_BASE}/products/${id}`);
        } catch (e) {
            console.log(e);
        }
    }
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
            return await axios.delete(`${process.env.REACT_APP_API_URL_BASE}/comments/${id}`);
        } catch (e) {
            console.log(e);
        }
    }



}
