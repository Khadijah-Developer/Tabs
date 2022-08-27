
import './App.css';
import { useState } from 'react';
import { tab } from '@testing-library/user-event/dist/tab';

function App() {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', content: 'tab 1 content' },
    { id: 2, title: 'Tab 2', content: 'tab 2 content' },
     {id:3, title: 'Tab 3', content:'tab 3 content'},
  ]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const handleClick = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <div className="App">
      <div className="container m-5 p-5">
        <div className="d-flex justify-content-center">
          {tabs.map((tab) => (
            <ul className="nav nav-tabs flex-column" key={tab.id}>
              <li className="nav-item display-4">
                  <button className={`nav-link ${tab.id === selectedTab.id ? 'active text-warning' : ''}`}  onClick={()=>handleClick(tab)}>{tab.title}</button>
              </li>
            </ul>
          ))}
        </div>
        <div className="tab-content border border-warning" id="myTabContent">
          <div className="tab-pane fade show active p-5 m-5 text-primary h3" id="home" role="tabpanel" aria-labelledby="home-tab">
        {selectedTab.content}
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
