import { CORE_CONCEPTS } from './data.js';
import Header from './Components/Header/Header.jsx'
import CoreComponent from './Components/CoreConcept.jsx'
import TabButton from './Components/TabButton.jsx';
import { Fragment, useState } from 'react';
import { EXAMPLES } from './data.js'

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton is a props to click the component , jsx, props, state button
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  console.log('app content');
  // approch 2
  let tabContent = <p>Please select topic</p>
  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>
        {EXAMPLES[selectedTopic].title}
      </h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }

  return (
    <Fragment>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreComponent key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>
        <section id='examples'>
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelet={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelet={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelet={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelet={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* Approch 1
          {!selectedTopic && (<p>Please select topic</p>)}
          {selectedTopic && (
            <div id='tab-content'>
              <h3>
                {EXAMPLES[selectedTopic].title}
              </h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )} */ }
          {tabContent}

        </section>
      </main>
    </Fragment>
  );
}

export default App;
