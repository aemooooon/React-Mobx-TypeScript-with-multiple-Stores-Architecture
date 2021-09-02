import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from 'antd';
import { useProductStore } from '../stores/hook'
import { ProductProp } from "../stores/product"

const { Meta } = Card;

const ProductList = () => {

  const productStore = useProductStore();

  useEffect(() => {
    productStore.loadProducts();
    console.log('inside useEffect of ProductList');
  }, [])

  return (
    <div className="container">
      {
        productStore.products.map((product: ProductProp) => (
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
  )
}

export default observer(ProductList)
