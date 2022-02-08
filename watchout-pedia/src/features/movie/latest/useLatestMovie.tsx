import React from 'react';
import { latestApi } from '../../../apis/movieApi';
import { useQuery } from 'react-query';
import { MovieDetail } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';

const useLatestMovie = () => {
    return useQuery<AxiosResponse<MovieDetail>, AxiosError>('latestMovie', latestApi);
};

export default useLatestMovie;