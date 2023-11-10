import './styles.css';
import { useEffect, useState } from 'react';
import { tabs, panels } from './data';

import Tab from './components/Tab';
import Panels from './components/Panels';

const Question2 = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const onChangeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <div className='tab_container'>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            tab={tab}
            onClick={() => {
              onChangeTab(index);
            }}
            active={currentTab === index}
          />
        ))}
      </div>
      <div>
        {panels.map((panel, index) => (
          <Panels key={index} tab={currentTab} panel={panel} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Question2;
