import { Product } from '../../types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

type Props = {
  product: Product;
  key: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin: 1rem;
  @media (min-width: 768px) {
    width: 20%;
  }
`;

const ImageCard = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F8F5F2;
  height: 18rem;
  padding: 3rem;
  margin-bottom: 1rem;
  position: relative;
`;

const Image = styled.img`
  object-fit: scale-down;
  max-width: 600px;
`;

const StyledHeart = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  line-height: 2rem;
  right: 0.5rem;
  top: 0.5rem;
  position: absolute;
  color: #F97F5B;
`;

const StyledPin = styled(FontAwesomeIcon)`
  color: #F97F5B;
  margin-right: .25rem;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductLocation = styled.div`
  display: flex;
  align-items: center;
`;

const ProductTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;

const ProductInfo = styled.p`
  font-size: 0.875rem;
`;

const ProductTip = styled.span`
  color: #9CA3AF;
  font-size: 0.875rem;
`;



const ProductCard: React.FC<Props> = ({ product, key }) => {
  return (
    <Container key={key}>
      <ImageCard>
        <StyledHeart icon={faHeart} />
        <Image src={product.imagePath} />
      </ImageCard>
      <ProductDescription>
        <ProductLocation>
          <StyledPin icon={faMapMarkerAlt} />
          <ProductTip>{product.region}</ProductTip>
        </ProductLocation>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductInfo>
          <span>${product.price} &#8226; </span>
          <span>Qty: {product.qty} </span>
          {product.isSet && <span>&#8226; Set of {product.setQty}</span>}
        </ProductInfo>
        {product.retailPrice && (<ProductTip>Est. retail: ${product.retailPrice}</ProductTip>)}
      </ProductDescription>
    </Container>
  )
};

export default ProductCard;
