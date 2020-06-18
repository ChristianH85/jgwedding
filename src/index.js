import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Stitch, AnonymousCredential,RemoteMongoClient} from "mongodb-stitch-browser-sdk"
import * as serviceWorker from './serviceWorker';

const client = Stitch.initializeDefaultAppClient('jgweddingstitch-stmub');
// Get a MongoDB Service Client
const mongodb = client.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);
// Get a reference to the blog database
const db = mongodb.db('weddingparty');
ReactDOM.render(<App db={db} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
