const baseUrl = 'http://192.168.86.26:3000';

export const fetchAccountNumber = async (name) => {
  console.log({ name });
  const response = await fetch(`${baseUrl}/account_number`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  });

  const data = await response.json();
  return data;
};