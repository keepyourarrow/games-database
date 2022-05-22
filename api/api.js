import axios from "axios";

const call = async (
    method,
    url,
    data = null,
    onSuccess = () => {},
    onFinally = () => {},
    onError = () => {}
) => {
    const key = process.env.NEXT_PUBLIC_API_KEY;

    url = `https://rawg.io/api${url}key=${key}`;
    const options = {
        method: method,
        url: url,
    };

    if (data) {
        options.body = data;
    }

    try {
        const res = await axios(options);
        onSuccess(res.data);
        return res.data;
    } catch (err) {
        onError(err);
        console.log("err", err, url);
    } finally {
        onFinally();
    }
};

export const get = async (url, onSuccess, onFinally, onError) => {
    return await call("GET", url, null, onSuccess, onFinally, onError);
};

export const post = async (url, data, onSuccess, onFinally, onError) => {
    return await call("POST", url, data, onSuccess, onFinally, onError);
};

export const put = async (url, data, onSuccess, onFinally, onError) => {
    return await call("PUT", url, data, onSuccess, onFinally, onError);
};
