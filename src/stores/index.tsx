import React from 'react'
import RootStore from './root';

export const StoreContext = React.createContext(new RootStore());
const stores = new RootStore();

export const StoreProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <StoreContext.Provider value={stores}>
      {children}
    </StoreContext.Provider>
  )
}
