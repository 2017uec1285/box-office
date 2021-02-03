import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  console.log(show);
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);
  return <div>{id}</div>;
};
export default Show;
