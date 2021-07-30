import { get, post } from '../utils/api/http';

export const loginVerify = (params) => post('user/verify', params);

export const selectByUsername = (params) => get('user/selectByUsername', params);