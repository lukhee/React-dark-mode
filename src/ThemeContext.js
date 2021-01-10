import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('Day');
  console.log(`from theme Context provider`);
  console.log(`The sky is:`, theme);
  const toggleTheme = () => {
    setTheme(
      theme === 'Day'? 'Night' : 'Day' 
    );
  };
  return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
