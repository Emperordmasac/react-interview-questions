import Item from './item';

const Cart = ({ items, cartNumber }) => {
  return (
    <div className='cart_container flex'>
      <h3 className='cart_header'>{cartNumber}</h3>
      {items.map((item, index) => (
        <Item key={index} index={index} item={item} />
      ))}
    </div>
  );
};

export default Cart;
