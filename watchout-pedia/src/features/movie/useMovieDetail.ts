import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { searchApi } from "../../apis/movieApi";
import { MovieDetail } from "../../types";


const useMovieDetail = (query: string) => {
    const queryFn = () => searchApi(query);

    return useQuery<AxiosResponse<MovieDetail>, AxiosError>(['searchMovie', query], queryFn, { enabled: Boolean(query)});
}

export default useMovieDetail;