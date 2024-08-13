import axios from 'axios';

const token = localStorage.getItem('token');

const membersAPI = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});

export const getMember = async () => {
  try {
    const response = await membersAPI.get('/members');
    return response.data;
  } catch (error) {
    console.error('Error fetching members:', error);
    throw error;
  }
};


