import React from 'react';
import ShowCard from './ShowCard';
import NOT_FOUND_IMG from '../../images/NOT_FOUND_IMG.png';

const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          name={show.name}
          id={show.id}
          image={show.image ? show.image.medium : NOT_FOUND_IMG}
          summary={show.summary}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
