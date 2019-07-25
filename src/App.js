import React, { Component } from 'react';
import { Provider } from 'react-redux'; 

import Video from './components/Video/index';
import SideBar from './components/SideBar/index';

import store from './store';  

class App extends Component {
  
  render() {
    return (
    <div className="App">
    <Provider store={store} >
    <Video />
      <SideBar />
      </Provider>
    </div>
  );
} 
}

export default App;
