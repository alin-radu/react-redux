import React, { useState, FormEvent } from 'react';
import { useTypedSelector } from '../hooks/useSelector';

import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };
  
  const itemRender = (data:string[]) => {
   const items = data.map((name) => <li key={name}>{name}</li>);
   
   return <ul>{items}</ul>
  };
  
  const contentRender = () => {
    if (error) {
      return <h3>Error</h3>;
    }
    if(loading){
      return <div>Loading...</div>;
    }
    
    return itemRender(data);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
        {contentRender()}
      </form>
    </div>
  );
};

export default RepositoriesList;
