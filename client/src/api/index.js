import axios from "axios";

export const baseURL="http://127.0.0.1:5001/rastaurantapp-296b7/us-central1/app";

export const validateUserJWTToken = async(token)=>{
    try {
        const res = await axios.get(`${baseURL}/api/users/jwtVerfication`,{
            headers :{Authorization : "Bearer " + token}
        });
        return res.data.data;
    } catch (err) {
        return null;
    }
};

/// add new product

export const addNewProduct = async (data)=>{
    try {
        const res = await axios.post(`${baseURL}/api/products/create`, {...data});
        return res.data.data;
    } catch (error) {
        return null;
    }
};

/// get all the products
export const getAllProducts = async ()=>{
    try {
        const res = await axios.get(`${baseURL}/api/products/all`);
        return res.data.data;
    } catch (error) {
        return null;
    }
};

//// delete a product
export const deleteAProducts = async (productId)=>{
    try {
        const res = await axios.delete(`${baseURL}/api/products/delete/${productId}`);
        return res.data.data;
    } catch (error) {
        return null;
    }
};

/// get all users
export const getAllUsers = async () =>{
    try {
        const res = await axios.get(`${baseURL}/api/users/all`);
        return res.data.data;
    } catch (error) {
        return null;
    }
}