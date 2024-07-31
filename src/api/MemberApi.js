import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTcyMjQxNTgwOCwiZXhwIjoxNzIyNDE5NDA4fQ.ousXXIpcWDdEsnrWeB0hOqdO_DF8wTgd0QC3GWUa00k';

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
