import React from 'react';
import './App.css';
// import { Container } from './components/Styles';

import Tabs from './components/TabsB';
import TabsB from './components/TabsB';
// import Content from './components/Content';
// import btnInfo from './components/btnInfo';

function App() {
  return (
    <div className="App">
{/*       
        <Tabs
        tabItems={[
          { label:"Tab1", content:"Tab1 Content",callback(){
            alert(this.label+" Was clicked");
          }}//, isSelected:true
          ,
          { label:"Tab2", content:"Tab2 Content",callback(){
            alert(this.label+" Was clicked");
          }}//, isSelected:false
          ,
          { label:"Tab3", content:"Tab3 Content",callback(){
            alert(this.label+" Was clicked");
          }}//, isSelected:false
          ]}/> */}
          <TabsB
          tabItems={[
            { label:"Tab1",
            content:"Tab1 Content",
            isSelected:true
          },
            { label:"Tab2",
            content:"Tab2 Content",
            isSelected:false
          },
            { label:"Tab3",
            content:"Tab3 Content",
            isSelected:false
          },
        ]}
        />
          

          
    </div>
  );
}

export default App;