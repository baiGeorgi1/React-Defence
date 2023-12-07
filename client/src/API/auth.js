import * as request from '../library/request';

const URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${URL}/login`, {
        email, password
    });
    return result;
};

export const register = async (email, password) => {
    const result = request.post(`${URL}/register`, {
        email, password
    });


    return result;
};
export const logout = () =>
    request.get(`${URL}/logout`);