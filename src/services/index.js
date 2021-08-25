import axios from 'axios';

export async function getPostsList() {
  const { data } = await axios.get('http://localhost:3004/tools');
  return data;
}
