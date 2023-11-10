import '../styles.css';

const Tab = ({ tab, onClick, active }) => {
  return (
    <div>
      <div
        className='tabs'
        style={{
          borderBottom: active ? '2px solid blue' : '1px solid black',
          color: active ? 'blue' : 'black',
        }}
        onClick={onClick}
      >
        {tab}
      </div>
    </div>
  );
};

export default Tab;
