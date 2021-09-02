import React from 'react'
import { ProductStore } from '../product'
import { UserStore } from '../user';
import RootStore from '../root';
import { StoreContext as storeContext } from '../../stores'

export const useRootStores = () => {
    const stores: any = React.useContext(storeContext);
    if (!stores) {
      throw new Error('Missing Provider...')
    }
    const rootStore: RootStore = stores;
    return rootStore;
  }
  
  export const useProductStore = () => {
    const stores: any = React.useContext(storeContext);
    if (!stores) {
      throw new Error('Missing Provider...')
    }
    const productStore: ProductStore = stores.productStore;
    return productStore;
  }
  
  export const useUserStore = () => {
    const stores: any = React.useContext(storeContext);
    if (!stores) {
      throw new Error('Missing Provider...')
    }
    const userStore: UserStore = stores.userStore;
    return userStore;
  }