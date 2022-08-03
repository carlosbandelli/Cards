import { useMemo } from 'react';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => {
  
  const points = useMemo(() => Math.floor(Math.random() * 11), [])

  return (
   <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1>
        {title} {id}
      </h1>
      <p>points: {points}</p>
      <p>{body}</p>
    </div>
  </div>
)};

