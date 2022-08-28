import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient,
  InMemoryCache, ApolloProvider,
   } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});


const aspclient = new ApolloClient({
  uri: 'https://localhost:5001/graphql',
  cache: new InMemoryCache(),
});



root.render(
  <React.StrictMode >
    <ApolloProvider client={aspclient}> 
    <App />
    </ApolloProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
