import React from 'react';
import Card from './components/card';

const App = () => {
  return (
    <div>
      <Card user='Aman' age={20} disc="teri meri pram kahani" but="le beta"/>
       <Card user='Amit' age={20} disc="tu ha chutiya" but="500"/>
    </div>
  );
}

export default App;
