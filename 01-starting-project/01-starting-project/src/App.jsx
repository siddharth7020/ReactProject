import Header from './Components/Header/Header.jsx'
import { Fragment } from 'react';
import CoreConcepts from './Components/CoreConcepts.jsx';
import Examples from './Components/Examples.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
       <Examples />
      </main>
    </Fragment>
  );
}

export default App;
