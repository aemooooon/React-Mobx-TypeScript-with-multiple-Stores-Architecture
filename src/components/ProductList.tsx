import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Card, Spin } from 'antd';
import { useProductStore } from '../stores/hook'
import { Product } from "../stores/product"

const { Meta } = Card;

const ProductList = () => {

  const productStore = useProductStore();

  useEffect(() => {
    productStore.loadProducts();
  }, [])

  return (
    <>
      <div className="spin-box">
        {
          productStore.isLoading ? <div style={{ width: '100px', height: '50px' }}><Spin size="large" /></div> : <h2>{productStore.len}</h2>
        }
      </div>
      <div className="container">
        {
          productStore.products.map((product: Product) => (
            <div className="card-item" key={product.id}>
              <Card
                cover={
                  <img
                    style={{ width: 200 }}
                    alt={product.title}
                    src={product.image}
                  />
                }
              >
                <Meta
                  title={product.price}
                  description={product.title}
                />
              </Card>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default observer(ProductList)
