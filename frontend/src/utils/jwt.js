import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (token) => {
  if (!token) return true;

  const decoded = jwtDecode(token);
  const exp = decoded.exp * 1000;
  return Date.now() >= exp;
};
