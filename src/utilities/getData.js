import axios from 'axios';

export const getData = async (endPoint) => {
    let data = [];
    await axios.get(endPoint).then((res) => (data = res.data));
    return data;
};
