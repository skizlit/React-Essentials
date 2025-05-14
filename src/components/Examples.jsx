import { useState } from 'react';
import { EXAMPLES } from '../data/ExamplesData.js';

function TabButton({ children, onClick, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onClick}>{children}</button>
        </li>
    );
}

export default function ExamplesSection() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            </menu>
            {!selectedTopic ?
                <h3>Please select a topic.</h3> :
                (<div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            )}
        </section>
    );
}
