import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No result match.</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}
            {/* <img src={item.show.image.original} alt="hgj"/> */}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    // http://api.tvmaze.com/search/shows?q=girls
    apiGet(`/search/shows?q=${input}`).then(result=>{
      setResults(result);
    });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <MainPageLayout>
      <input
        type="input"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};
export default Home;
