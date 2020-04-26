import axios from 'axios';

export const getData = async (localStorageItem, endPoint) => {
  let data = []
  if (localStorage.getItem(localStorageItem)) {
    data = JSON.parse(localStorage.getItem(localStorageItem))
  } else {
    await axios.get(endPoint).then(res => data = res.data);
    localStorage.setItem(localStorageItem, JSON.stringify(data));
  }
  return data;
}