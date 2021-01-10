import React from 'react';
import { ThemeContextConsumer } from '../../ThemeContext';

const Home = () => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div>
          <h2> Home </h2>
          <button onClick={context.toggleTheme}> Toggle theme </button>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default Home;
