import React from 'react';
import './assets/styleGlobal.css'
import './App.css';
import { Home } from './pages/Home/Home';
import { TextArea } from './components/TextArea/TextArea';
import { DataContext } from './contexts/DataProvider';

//what happened in that night
    //<link rel="icon" href="../public/radiation-icon.svg" />


function App() {

  const provider = React.useContext(DataContext);

  return (
    <div className="containerWithRelativeValues">
    {
     provider.showHiddenContentStory ? <TextArea type="story" key={provider.storyID}/> : null
    }
        {
     provider.showHiddenContentAnotations ? <TextArea type="anotations" key={provider.anotationsID}/> : null
    }
    <Home />
    </div>
  );
}

export default App;
