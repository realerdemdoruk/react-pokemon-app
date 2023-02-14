import { createContext, useState } from 'react';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [deger, setDeger] = useState('Erdem');

  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
};
