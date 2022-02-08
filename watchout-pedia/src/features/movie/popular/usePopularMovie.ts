import React from 'react';
import { popularApi } from '../../../apis/movieApi';
import { useQuery } from 'react-query';
import { ListResponse, MovieDetail } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';

const usePopularMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('popularMovie', popularApi);
};

export default usePopularMovie;