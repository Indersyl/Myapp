// api.js

// Replace this URL with the appropriate server URL
const SERVER_URL = 'http://localhost:3003';

export const insertData = async (formData) => {
  try {
    const response = await fetch(`${SERVER_URL}/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};