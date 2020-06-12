import React, {useCallback} from 'react';
// import {Stitch, AnonymousCredential,RemoteMongoClient,BSON} from "mongodb-stitch-browser-sdk"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import glist from './glist.xlsx'
import Home from './components/Home.js'
import './App.css';
import Menu from './components/menu';
import Rsvp from './components/Rsvp';
import HotelInfo from './components/HotelInfo.js';
import Venue from './components/Venue.js';
import Row from 'react-materialize/lib/Row';

function App() {
  
    // Initialize the App Client
    // const client = Stitch.initializeDefaultAppClient('jgweddingstitch-stmub');
    // // Get a MongoDB Service Client
    // const mongodb = client.getServiceClient(
    //   RemoteMongoClient.factory,
    //   "mongodb-atlas"
    // );
    // // Get a reference to the blog database
    // const db = mongodb.db('weddingparty');
  
  // ////////////
// db.collection('guest').insertOne({name: 'christian', tier: 'weddingparty'})
// client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
//   db.collection('guest').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
// ).then(() =>
//   db.collection('guest').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
// ).then(docs => {
//     console.log("Found docs", docs)
//     console.log("[MongoDB Stitch] Connected to Stitch")
// }).catch(err => {
//     console.error(err)
// });
// db.collection('guest').find().then(data=>{console.log(data)})
  // const add= ()=>{
    
  //   client.auth.loginWithCredential(new AnonymousCredential()).then(data=>{
  //   db.collection('guest').insertOne({owner_id:client.auth.user.id,name: 'christian', tier: 'weddingparty'}).then((Response)=>{
  //     console.log(Response)
  //     // data=>{console.log(data)}
  //   }).then(()=>{
  //     db.collection('guest').findOne({name:'christian'}).then(data=>{
  //       console.log(data)
  //     })
  //   })
  // }
  //   )
  // }
  const framestyle = {
    'max-width':'100vw',
    'height':'100vh'
  }
 
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
          <Rsvp />
        </Route>
        <Route path='/Venue'>
          <Venue/> 
        </Route>
        <Route path='/HotelInfo'>
          <HotelInfo/>
        </Route>
      </Switch>
    {/* <div> */}
      
      
      {/* <BackgroundSlider
      images={[jg1,jg2,jg3,jg7]}
    duration={5} transition={2} /> */}
        
    {/* </div>  */}
</Router> 
  )
}

export default App;
