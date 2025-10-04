import { useEffect } from 'react';

const MovieDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return <div>Details</div>;
};

export default MovieDetails;
