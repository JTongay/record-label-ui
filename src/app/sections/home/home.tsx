import { Typography } from '@material-ui/core';
import { createElement, FC, StrictMode, Suspense } from 'react';
import { useAxios } from 'app/hooks/use-axios';

const HomeData: FC = () => {
  const [response, error] = useAxios<any>('https://pokeapi.co/api/v2/pokemon/ditto/');
  if (error) {
    // Set up your error boundary and throw that error here
    throw Error();
  }
  if (!response) {
    return null;
  }

  return <span>{response.name}</span>;
  // throw Error();
};

const Home: FC<any> = (props) => {
  return (
    <section className="home-section">
      <Typography variant="h1" color="primary">
        Record Label
      </Typography>
      <StrictMode>
        <Suspense fallback={<span>loading...</span>}>
          <HomeData />
        </Suspense>
      </StrictMode>
    </section>
  );
};

export default Home;
