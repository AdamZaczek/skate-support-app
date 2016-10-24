import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let data = [
  { id: 1, author: "Adam Żaczek", text: "Best app ever dude!" },
  { id: 2, author: "David Poliszak", text: "Amazing, I stopped drinking after seeing this! Now I'm sober for life." },
  { id: 3, author: "Ewa z Wawy", text: "Legit!" }
];

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
