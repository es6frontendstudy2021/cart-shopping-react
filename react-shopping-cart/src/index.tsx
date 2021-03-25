import React from 'react';
// import DevTools from 'mobx-react-devtools';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'mobx-react'
import { productStore } from './stores/ProductStore'

const client = new QueryClient();

ReactDOM.render(
  <Provider store={productStore}>
    <App />
    {/* <DevTools /> */}
  </Provider>,
  
  // <QueryClientProvider client={client}>
  //   <App />
  // </QueryClientProvider>,
  document.getElementById('root')
);
