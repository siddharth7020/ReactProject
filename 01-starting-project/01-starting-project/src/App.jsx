import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header/Header.jsx'
import CoreComponent from './Components/CoreConcept.jsx'
import TabButton from './Components/TabButton.jsx';

function App() {

  let tabContent = 'Plese tab the button'

 function handleSelect (selectedButton) {
  // selectedButton is a props to click the component , jsx, props, state button
  tabContent = selectedButton;
  console.log(tabContent);
 }
 console.log('app content');

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            <CoreComponent {...CORE_CONCEPTS[0]} />
            <CoreComponent {...CORE_CONCEPTS[1]} />
            <CoreComponent {...CORE_CONCEPTS[2]} />
            <CoreComponent {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton onSelet={() =>handleSelect('components')}>Components</TabButton>
            <TabButton onSelet={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelet={() =>handleSelect('props')}>Props</TabButton>
            <TabButton onSelet={() =>handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
