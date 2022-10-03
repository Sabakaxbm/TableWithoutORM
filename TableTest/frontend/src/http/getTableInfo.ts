import axios from 'axios';
import { DistancePagination } from '../models/models';

const url = 'http://localhost:5500';

export const getRequest = async (
  page?: number,
  size?: number
): Promise<DistancePagination | undefined> => {
  try {
    const { data } = await axios.get<DistancePagination>(
      `${url}` + '/api/distance',
      { params: { page, size } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
