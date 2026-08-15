// import hook useQuery dari react-query
import { useQuery } from '@tanstack/react-query';

import { ItemsData, ItemsResponse } from "@/types/MokaResponse";

// import service Api
import MokaApi from '../../../services/MokaApi';

import type { AxiosError } from 'axios';
import type { MokaErrorResponse } from '../../types/MokaErrorResponse';

export const useMokaItems = () => {
    return useQuery<ItemsResponse, AxiosError<MokaErrorResponse<ItemsData>>>({
        // query key yang mencakup parameter page dan search
        queryKey: ['mokaItems'],

        // fungsi untuk mengambil data dari API
        queryFn: async () => {
            // Ambil token dari cookie
            const token = import.meta.env.VITE_MOKA_TOKEN;

            // Kirim request ke API endpoint dengan pagination dan pencarian
            const response = await MokaApi.get(`/v1/outlets/1131561/items?mobile_device=50&page=1&per_page=100&since=&until=&include_deleted=false`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            // Kembalikan data role (sudah dalam format pagination)
            return response.data;
        },
    });
};