import React, { useState } from 'react';

const InsertPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file,setFile]=useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', file);
    formData.append('name', "phanit");

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Post created successfully!');
      setTitle('');
      setContent('');
    } else {
      alert('Failed to create post');
    }
  };

  const handleFile=(e)=>{
    setFile(e.target.files[0]);
  }
  return (
    <div>
      <h1>Insert New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input type="file" onChange={handleFile} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InsertPost;
