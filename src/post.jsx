import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://cloud-backend-git-main-ashwingajas-projects.vercel.app/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="login-container">
      {post && (
        <div className="cardPost">
          <h3>Course : {id}</h3>
          <h2>{post.name}</h2>
          <p>{post.description}</p>
        </div>
      )}
    </div>
  );
}

export default Post;
