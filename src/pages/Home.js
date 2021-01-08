import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input,setInput]=useState('');

  const onInputChange=(ev)=>{
    setInput(ev.target.value);
  };
  const onSearch=()=>{
    // http://api.tvmaze.com/search/shows?q=girls
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json()).then(result=>{
      console.log(result);
    })
  }
  const onKeyDown=ev=>{
    if(ev.keyCode===13){
      onSearch();
    }
  };
  return <MainPageLayout>
    <input type="input" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
    <button type="button" onClick={onSearch}>Search</button>
  </MainPageLayout>
};
export default Home;
