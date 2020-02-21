import React, { useState, useEffect } from 'react';
import { getDirector } from '../../apis/getData'

export default function MainPage() {
  const [director, setDirector] = useState(null);
  const id = 3;
  useEffect(() => {
    (async directorId => {
      const result = await getDirector(directorId);
      setDirector(result);
      console.log(result)
    })(id);
  }, [id]);
  return director ? (
        <>
          <h1>{director.name.bl}</h1>
          <h1>{director.lifetime}</h1>
        </>
      ) : (
        'loading'
      );
}