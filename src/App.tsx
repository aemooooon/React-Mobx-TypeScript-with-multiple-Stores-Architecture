import './App.css';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react'
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import { useProductStore } from './stores/hook';
import { observer } from 'mobx-react-lite'

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
      <h1>Products</h1>
      <ProductList />
      <hr />
      <UserList />
    </div>
  );
}

export default observer(App);
