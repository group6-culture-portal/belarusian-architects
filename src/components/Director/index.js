// import React, { useState, useEffect } from 'react';
// import { getDirector } from '../../apis/getData';
// import TimeLineContainer from './TimeLineContainer';
// import { useParams } from 'react-router-dom';

// const DirectorPage = props => {
//   const { id } = useParams();
//   const [director, setDirector] = useState({});
//   useEffect(() => {
//     (async directorId => {
//       const result = await getDirector(directorId);
//       setDirector(result);
//     })(id);
//   }, [id]);

//   return <>{director.biography && <TimeLineContainer biography={biography} />}</>;
// };

// export default DirectorPage;
