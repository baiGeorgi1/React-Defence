const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "content-type": "application/json",
        };
    }
    const token = localStorage.getItem("accessToken");

    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token
        };
    }

    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    // logout TODO
    if (response.status === 204) {
        return {};
    }

    if (response.status == 403) {
        throw new Error('Грешен потребител или парола!');
    }
    if (!response.ok) {
        throw new Error(response.status);
    }
    const result = await response.json();

    return result;
};

export const get = request.bind('null', 'get');
export const post = request.bind('null', 'post');
export const put = request.bind('null', 'put');
export const del = request.bind('null', 'delete');