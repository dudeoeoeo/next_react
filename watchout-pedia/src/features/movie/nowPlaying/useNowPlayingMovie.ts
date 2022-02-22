import { nowPlayingApi } from '../../../apis/movieApi';
import { useQuery } from 'react-query';
import { ListResponse, MovieDetail } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';

const useLatestMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('nowPlayingMovie', nowPlayingApi);
};

export default useLatestMovie;