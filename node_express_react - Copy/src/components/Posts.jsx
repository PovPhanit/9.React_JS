import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [session,setSession]=useState("");
  const [session2,setSession2]=useState("");



  //fetch post
  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.sqlData)
        console.log(data.sqlData);
        setSession(data.sessionData.updateData);
        setSession2(data.sessionData.title);
      });
  }, [posts]);







  const deletePost = async (postId) => {
      await fetch(`/api/posts/${postId}`, {
        method: 'delete'
      });
  };

  //delete
  

  return (
    <div>
      <h1>Posts : {session} {session2}  </h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.post_id}>
              <td>{post.post_id}</td>
              <td>{post.post_title}</td>
              <td>{post.post_content}</td>
              <td>
                <Link to={`/editPost/${post.post_id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => deletePost(post.post_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
