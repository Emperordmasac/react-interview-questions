import '../styles.css';

const Panels = ({ panel, tab, index }) => {
  return (
    <div className='panel' hidden={tab === index ? false : true}>
      {panel}
    </div>
  );
};

export default Panels;
