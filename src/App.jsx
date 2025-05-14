import CoreConceptSection from './components/CoreConcept.jsx';
import ExampleSection from './components/Examples.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptSection />
        <ExampleSection />
      </main>
    </div>
  );
}

export default App;
