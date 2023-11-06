const Item = ({ item, index }) => {
  return (
    <div className='item_container'>
      <small className='index_number'>{index + 1}.</small>
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </div>
  );
};

export default Item;
