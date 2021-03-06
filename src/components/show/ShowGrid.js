import React from 'react';
import ShowCard from './ShowCard';
import { FlexGRid } from '../styled';
import NOT_FOUND_IMG from '../../images/NOT_FOUND_IMG.png';

const ShowGrid = ({ data }) => {
  return (
    <FlexGRid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          name={show.name}
          id={show.id}
          image={show.image ? show.image.medium : NOT_FOUND_IMG}
          summary={show.summary}
        />
      ))}
    </FlexGRid>
  );
};
export default ShowGrid;
