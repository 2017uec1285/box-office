import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ id, name, image, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.*?>/g, '')}...`
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>
      <h1>{name}</h1>
      <p>{summaryAsText}</p>
      <div>
        <Link to={`/shows/${id}`}>Read more</Link>
        <button type="button">rate me</button>
      </div>
    </div>
  );
};
export default ShowCard;