import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(show);
  let isMounted = true;
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setIsLoading(false);
          setError(`An error occured ${err.message}`);
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
