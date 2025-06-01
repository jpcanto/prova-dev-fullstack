import axios, { AxiosInstance } from 'axios';
import { MakeRequestHttp } from './gateways.interface';
import { logger } from '@shared/utils/logger';

class Gateway {
  makeAxios<THeaders extends Record<string, string | string[]>>(
    config: MakeRequestHttp<THeaders>
  ): AxiosInstance {
    const axiosClient = axios.create({
      baseURL: config.baseURL,
      headers: config.headers,
    });
    logger.info('Axios criado com sucesso');
    return axiosClient;
  }
}

export { Gateway };
