// @flow

import type { StyledComponent } from 'styled-components';

import React from 'react';
import styled from 'styled-components';
import { triangle } from 'polished';

import './App.css';

const MyComponent: StyledComponent<{}, {}, HTMLDivElement> = styled.div`
  ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
