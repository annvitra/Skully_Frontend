const API_BASE_URL = 'http://localhost:24917/api';

const handleResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const msg = data?.message || data || response.statusText;
    throw new Error(msg);
  }
  return data;
};

export const registerUser = async (userData) => {
  console.log('Register payload →', JSON.stringify(userData, null, 2));

  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};