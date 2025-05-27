import {YGEIAN_NEWS} from '../../http/confic'

export const registerApi = (payload) =>
  YGEIAN_NEWS.post("jwt/register", payload);