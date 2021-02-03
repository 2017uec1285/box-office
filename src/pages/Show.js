import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const reducer=(prevState,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':{
            return { show:action.show, isLoading:false, error:false };
        }
        case 'FETCH_FAILED':{
            return { ...prevState, isLoading: false, error: action.error };
        }
        default: return prevState;
    }
}

const initialState={
    show:null,
    isLoading:true,
    error:null
}
const Show = () => {
  const { id } = useParams();
  const [{ isLoading,error,show},dispatch]=useReducer(reducer,initialState);

//   const [show, setShow] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

  console.log(show);
  let isMounted = true;
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`)
      .then(results => {
        if (isMounted) {
            dispatch( { type: 'FETCH_SUCCESS',show:results } );
        //   setShow(results);
        //   setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
            dispatch( { type: 'FETCH_FAILED',show:err.message } );
        //   setIsLoading(false);
        //   setError(`An error occured ${err.message}`);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  
  return <div>{id}</div>;
};
export default Show;
