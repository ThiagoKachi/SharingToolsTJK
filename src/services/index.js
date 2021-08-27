import axios from 'axios';

export async function getPostsList() {
  const { data } = await axios.get('http://localhost:3004/tools');
  return data;
}

export async function deletePostById(id) {
  try {
    const { data } = await axios.delete(`http://localhost:3004/tools/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
}
