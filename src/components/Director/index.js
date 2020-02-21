import React, { useState, useEffect } from 'react';
import { getDirector } from '../../apis/getData';
import TimeLineContainer from './TimeLineContainer';

const DirectorPage = props => {
  const { id } = props.match.params;
  const [director, setDirector] = useState({});
  useEffect(() => {
    (async directorId => {
      const result = await getDirector(directorId);
      setDirector(result);
    })(id);
  }, [id]);

  return <>{director.biography && <TimeLineContainer biography={biography} />}</>;
};

export default DirectorPage;
