import axios from 'axios'

export const createMessage = async (data) => {
  const response = await axios.post('http://localhost:3005/api/messages', data)
  return response
}

export const fetchMessages = async (searchTerm) => {
  try {
 
    const response = await axios.get('http://localhost:3005/api/messages', {
      params: searchTerm,
    });

    return response;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}