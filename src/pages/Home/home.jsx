import { useState, useEffect, useCallback } from 'react';
import { Posts } from '../../components/Posts/posts';
import { loadPosts } from '../../utils/load-post';
import { Button } from '../../components/Button/button';
import './styles.css';
import { useLocation, useParams } from 'react-router-dom';

const MIN_START = 5;
const MAX_POSTS = 8;

export const Home = () => {
  const { state } = useLocation()

  const [ posts, setPosts ] = useState([]);
  const [ allPosts, setAllPosts ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const { username } = state;

  const isHandFull = posts.length >= MAX_POSTS;

  useEffect(() => {
    const handleLoadPosts = async () => {
      const postsAndPhotos = await loadPosts();
      const shuffledPosts = shuffleList(postsAndPhotos);
      
      setPosts(shuffledPosts.splice(0, MIN_START)); //mao
      setAllPosts(shuffledPosts); //pilha
      setLoading(false);
    };

    handleLoadPosts();
  }, [])

  const shuffleList = (list) => list.sort(() => Math.random() - 0.5)

  const handleShuffle = () => {
    const shuffledPosts = shuffleList(posts);
    setPosts([...shuffledPosts])
  };

  const loadMorePosts = () => {
    if(isHandFull) return;

    const allPostsTemp = allPosts;

    const i = Math.floor( Math.random() * (allPostsTemp.length-1 + 1) ); //random index
    
    setPosts([...posts, ...allPostsTemp.splice(i, 1)]);
    setAllPosts(allPostsTemp);
  };

  return (
    <section className="container">
      <p>{username}</p>
      <div className="button-container" style={{marginBottom: 20, display: 'flex', flexDirection: 'row', gap: 30}}>
        <Button text="Embaralhar mão" onClick={handleShuffle} disabled={loading}/>
        <Button text="Sacar" onClick={loadMorePosts} disabled={loading || isHandFull} />
      </div>

      {loading ? <p>Carregando</p> : <Posts posts={posts} />}

    </section>
  );
};