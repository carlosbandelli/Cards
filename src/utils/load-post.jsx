import axios from 'axios';

export const loadPosts = async () => {
    const postsResponse = axios.get('http://jsonplaceholder.typicode.com/posts');
    const photosResponse = axios.get('http://jsonplaceholder.typicode.com/photos');
  
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  
    const postsJson = await posts.data;
    const photosJson = await photos.data;
  
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });
    return postsAndPhotos.splice(0,10);
  };