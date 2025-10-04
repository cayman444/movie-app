import { useEffect } from 'react';

const MovieDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return <main className="pt-30 pb-18">Details</main>;
};

export default MovieDetails;
