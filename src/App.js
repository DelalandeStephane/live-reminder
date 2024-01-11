
import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import LiveForm from './components/LiveForm';
import data from './data/data';

function App() {

  const [formIsActive, setFormIsActive] = useState(false);
  const [liveCount, setLiveCount] = useState(0);
  const [countMessage, setCountMessage] = useState('');
  const [lives, setLives] = useState(data);

  const deleteLive = (key) => {
    setLives(() => {
        return lives.filter( (live) => live.id !== key);
      });
  }

  const showForm = () => {
    setFormIsActive((next) => !next);
  }

  const submitForm = (live) => {
    setLives((prev) => {
      return [...prev,live]
    });
    setFormIsActive(false);
  };

  useEffect(() => {
    setLiveCount(lives.length);

    if( lives.length > 1) {
      setCountMessage(liveCount + ' shows scheduled');
    } 
    else if (lives.length === 1) {
      setCountMessage(liveCount + ' show scheduled'); 
    }
    else {
      setCountMessage('No  shows scheduled')
    }
  })

  return (
    <div className='main'>
        <section className='container'>
          <h1>Live reminder</h1>
          <p className='count'>{countMessage}</p>
          <div className='btn-container'>
          { !formIsActive &&  <button className="button-17" role="button" onClick={showForm}>Add a live show</button>}
          </div>
          { formIsActive && <LiveForm handleSubmit={submitForm} />}
          <List lives={lives} deleteLive={deleteLive}/>
        </section>
    </div>
  );
}

export default App;
