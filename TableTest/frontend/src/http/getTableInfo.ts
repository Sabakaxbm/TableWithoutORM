import axios from 'axios';

const url = 'http://localhost:5500';

export const getRequest = async () => {
  try {
    const { data } = await axios.get(`${url}` + '/api/distance');
    return data;
  } catch (err) {
    console.log(err);
  }
};
