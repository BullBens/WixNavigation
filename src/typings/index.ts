// REQUESTS
export * from './navigation';

export type TGenerateOptions = {
  method: 'POST' | 'GET';
  url: string;
  data?: any;
  params?: any;
};
export type TFormatResponse = {
  data: any;
  status: number;
  statusText: string;
};
