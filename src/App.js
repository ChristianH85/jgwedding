import React, {useState} from 'react';
import {Stitch, AnonymousCredential,RemoteMongoClient} from "mongodb-stitch-browser-sdk"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/Home.js'
import './App.css';
import Menu from './components/menu';
import Rsvp from './components/Rsvp';
import HotelInfo from './components/HotelInfo.js';
import Venue from './components/Venue.js';
import Row from 'react-materialize/lib/Row';

function App() {
    // Initialize the App Client
    const client = Stitch.initializeDefaultAppClient('jgweddingstitch-stmub');
    // Get a MongoDB Service Client
    const mongodb = client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    // Get a reference to the blog database
    const db = mongodb.db('weddingparty');
    // const seed =(data)=>{
    //     db.collection('guest').insertOne({fullname:data.fullName,firstname: data.firstName, lastName:data.lastName,plus:data.plus }).then((Response)=>{
    //       console.log(Response)
    //       // data=>{console.log(data)}
    //     }).then(()=>{
    //       db.collection('guest').findOne({firstname:'christian'}).then(data=>{
    //         console.log(data)
    //       })
    //     })
    // }
  //   const updateG=(data)=>{
  //     if(data.attending==true&&data.plus1status==true){
  //       let gUpObj={
  //         attending
  //       } 
  //     }
      
  //     db.collection('guest').findOneAndUpdate({fullname:name},gUpObj).then((data)=>{
  //       console.log(data)
  //     })
  //   }
    const populateG=(name)=>{
      client.auth.loginWithCredential(new AnonymousCredential()).then(data=>{
      db.collection('guest').findOne({fullname:name}).then((data)=>{
        console.log(data)
      //   setGuest(data)
      //   return data
      })
    })
  }
// db.collection('guest').find().then(data=>{console.log(data)})
  // const add= (gData)=>{
    
  //   client.auth.loginWithCredential(new AnonymousCredential()).then(data=>{
  //     console.log(gData.rows)
  //     gData.rows.map(
  //         row => {
  //           if(row.plus){
  //             let gObj={
  //               fullName: row.firstName +" "+ row.lastName,
  //               firstName:row.firstName,
  //               lastName:row.lastName,
  //               plus:true
  //             }
  //             seed(gObj)
  //           }
  //           else{
  //             let gObj={
  //               fullName: row.firstName +" "+ row.lastName,
  //               firstName:row.firstName,
  //               lastName:row.lastName,
  //               plus:false
  //             }
  //             seed(gObj)
  //           }
  //         }
  //       )
  // }
  //   )
  // }
  return (
    
  <Router>
    <Row>
      <Menu/>
    </Row>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Rsvp'>
          <Rsvp pop={populateG} />
        </Route>
        <Route path='/Venue'>
          <Venue/> 
        </Route>
        <Route path='/HotelInfo'>
          <HotelInfo/>
        </Route>
      </Switch>
</Router> 
  )
}

export default App;
