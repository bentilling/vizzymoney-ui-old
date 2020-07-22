import React from 'react';
import { Container } from 'semantic-ui-react';
import Navigation from './components/Navigation';
import TransactionView from './components/TransactionView';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container style={{ marginTop: '2em' }}>
        <TransactionView />
      </Container>
    </div>
  );
}

export default App;
