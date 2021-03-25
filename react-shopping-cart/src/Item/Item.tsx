import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

import { useObserver } from 'mobx-react'

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return useObserver(() => (
    <Wrapper>
    <img src={item.image.replace('https://fakestoreapi.com/', 'https://fakestoreapi.herokuapp.com/')} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
  ))
};

export default Item;
