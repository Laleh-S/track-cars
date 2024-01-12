//* CONNECTION REACT TO REDUX: --> Done once per project!
// 1- Export the ”store” from whatever file it is created in.
// 2- Import the ”store” into the root ”index.js” file.
// 3- Import ”Provider” from the react-redux library into the root ”index.js” file.
// 4- Wrap the App component with the provider, pass the ”store” as a prop called store to the Provider

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './store';
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
<Provider store={store}>
    <App />
</Provider>
);