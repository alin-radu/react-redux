import { useState } from 'react';
import { useAppDispatch } from '../../../../app/store/hooks';
import { addPost, getPosts } from '../../redux/postsSlice';

export const Posts = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <button
        onClick={() => {
          dispatch(getPosts());
        }}
      >
        Get Posts
      </button>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button
        onClick={() => {
          dispatch(addPost({ title, description }));
        }}
      >
        Add Item
      </button>
    </div>
  );
};
