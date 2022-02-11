import React from 'react';
import { latestApi } from '../../../apis/movieApi';
import { useQuery } from 'react-query';
import { TVDetail } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';

const useLatestTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', latestApi);
};

export default useLatestTv;