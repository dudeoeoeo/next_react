import { useQuery } from 'react-query';
import { upcomingApi } from '../../../apis/movieApi';
import { AxiosError, AxiosResponse } from 'axios';
import { ListResponse, MovieDetail } from '../../../types';

const useLatestMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upcomingMovie', upcomingApi);
}

export default useLatestMovie;