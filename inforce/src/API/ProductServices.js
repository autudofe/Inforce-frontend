import axios from "axios";

export default class ProductServices {
    async getProducts() {
        try {
            return await axios.get(`${process.env.REACT_APP_API_URL_BASE}/products`);
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
    async addProduct( product) {
        try {
            return await axios.post(`${process.env.REACT_APP_API_URL_BASE}/products/`, product);
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
    async deleteProduct(id) {
        try {
            return await axios.delete(`${process.env.REACT_APP_API_URL_BASE}/products/${id}`);
        } catch (e) {
            console.log(e);
        }
    }


    async deleteComments(productId) {
        try {
            return await axios.delete(`${process.env.REACT_APP_API_URL_BASE}/products/${productId}/comments`, {
                    "id": 1,
                    "productId": 4,
                    "description": "test",
                    "date": "16:00 22.08.2021"
                });
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
    async deleteComment(productId, id) {
        try {
            return await axios.delete(`${process.env.REACT_APP_API_URL_BASE}/comments?productId=${productId}&id=${id}`);
        } catch (e) {
            console.log(e);
        }
    }
    async editComment(productId, id, comment) {
        try {
            return await axios.put(`${process.env.REACT_APP_API_URL_BASE}/products/${productId}/comments?id=${id}`, comment);
        } catch (e) {
            console.log(e); //comments?productId=${productId}&id=${id}
        }
    }
    async addComment(comment) {
        try {
             await axios.post(`${process.env.REACT_APP_API_URL_BASE}/comments`, comment);
        } catch (e) {
            console.log(e);
        }
    }
    async addCommentProduct(id, data) {
        try {
            return await axios.put(`${process.env.REACT_APP_API_URL_BASE}/products/${id}`, data);
        } catch (e) {
            console.log(e);
        }
    }

}
