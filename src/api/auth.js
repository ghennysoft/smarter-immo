import axios from 'axios';
import api from './axios';
import { jwtDecode } from 'jwt-decode';
import { apiURL } from '../utils/variables';

export const login = async (credentials) => {
  try {
    const response = await api.post('accounts/token/', credentials);
    localStorage.setItem('access', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    return jwtDecode(response.data.access);
  } catch (error) {
    // console.log(error);
  }
};

export const register = async (userData) => {
  // await api.post(`${apiURL}/api/accounts/register/`, userData);
  try {
    const response = await axios.post(`${apiURL}/api/accounts/register/`, userData)
    return response.data;
  } catch (error) {
    // console.log(err);
  }
};

export const getProfile = async () => {
  const response = await api.get('profile/');
  return response.data;
};

export const updateProfile = async (profileData) => {
  const formData = new FormData();
  for (const key in profileData) {
    if (profileData[key] !== null && profileData[key] !== undefined) {
      formData.append(key, profileData[key]);
    }
  }
  
  const response = await api.patch('profile/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  // Mettre à jour le token avec les nouvelles données
  localStorage.setItem('access', response.data.access);
  localStorage.setItem('refresh', response.data.refresh);
  
  return response.data.user;
};

export const refreshToken = async () => {
  const refresh = localStorage.getItem('refresh');
  if (!refresh) throw new Error('No refresh token');
  
  const response = await api.post('token/refresh/', { refresh });
  localStorage.setItem('access', response.data.access);
  return response.data.access;
};

export const logout = () => {
  localStorage.clear();
  // localStorage.removeItem('access');
  // localStorage.removeItem('refresh');
  location.href='/';
};