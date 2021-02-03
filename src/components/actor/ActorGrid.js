import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../images/NOT_FOUND_IMG.png';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard id={person.id} 
        name={person.name}
        country={person.country?person
        .country.name:null}
        birthday={person.birthday}
        deathday={person.deathday}
        gender={person.gender}
        image={person.image?person.image.medium:IMAGE_NOT_FOUND}
        />
      ))}
    </div>
  );
};
export default ActorGrid;
