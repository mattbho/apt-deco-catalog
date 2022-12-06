import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../utils/products';

import ProductCard from '../../components/product-card/product-card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Catalog: React.FC = () => {
  const [productCount, setProductCount] = useState(4);
  const [products, setProducts] = useState(getProducts(productCount));

  const onProductCountChange = (count: number) => {
    setProductCount(count);
  };
  
  const productItems = products.map((product, i) => {
    return <ProductCard key={i} product={product}></ProductCard>;
  })

  useEffect(() => {
    setProducts(getProducts(productCount));
  }, [productCount]);

  return (
    <Container>
      <Products>
        {productItems}
      </Products>
      <label htmlFor="product-count">Number of Products per page:</label>
      <select
        name="product-count"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onProductCountChange(parseInt(e.target.value))}
        value={productCount}
      >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
      </select>
    </Container>
  );
}

export default Catalog;
