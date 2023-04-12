import './App.css';
import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTitle] = useState(false);

  console.log('App RUNNING!');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title!');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className='app'>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
