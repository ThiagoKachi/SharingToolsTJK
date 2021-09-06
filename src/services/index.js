import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

export async function createPost(title, link, description, tags) {
  const stringSplit = tags.split(' ');

  try {
    const { data } = await axios.post(`http://localhost:3004/tools`, {
      id: uuidv4(),
      title,
      link,
      description,
      tags: stringSplit,
    });

    return data;
  } catch (err) {
    console.log(err);
  }
}
