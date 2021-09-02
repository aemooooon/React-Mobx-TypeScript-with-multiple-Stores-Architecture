import './App.css';
import { useState, useEffect } from 'react'
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import { useProductStore } from './stores/hook';
import { observer } from 'mobx-react-lite'
import { Spin } from 'antd';

const App = () => {

  const productStore = useProductStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading((prevValue) => !prevValue)
    }, 5000);
  }, [])

  return (
    <div className="App">
      <Spin size="large" />
      <h1>Products</h1>
      {
        isLoading ? <div style={{ width: '100px', height: '50px' }}><Spin size="large" /></div> : <h2>{productStore.len}</h2>
      }
      <ProductList />
      <hr />
      <UserList />
    </div>
  );
}

export default observer(App);
