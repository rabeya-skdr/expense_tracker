import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId='c686f46d-471e-4d36-87b9-c0821042c594' language='en-US'>
        <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
  );