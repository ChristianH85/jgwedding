import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home.js'
import './App.css';
import Menu from './components/menu';
import Rsvp from './components/Rsvp';
import HotelInfo from './components/HotelInfo.js';
import Venue from './components/Venue.js';
import Row from 'react-materialize/lib/Row';
import Admin from './components/Admin.js';

function App(props) {
  // console.log(props.db)
  const [currentG, setG]=useState('')
  const [gInfo, gList]= useState('')

  const populateG=(name)=>{
    props.db.collection('guest').findOne({fullname:name}).then((data)=>{
      console.log(data)
      setG(data)
    })    
  }
  const guestL=()=>{
    console.log('hey')
    props.db.collection('guest').find({}).toArray()
    .then(items => {
      // console.log(`Successfully found ${items.length} documents.`)
      gList(items)
      // return items
    })
    .catch(err => console.error(`Failed to find documents: ${err}`))
    
    // .find({status:"true"}).then(data=>{
    //   console.log(data)
    // })
      // });
    // })
  }
  const upStat= (data)=>{
    // console.log(data)
    props.db.collection('guest').findOneAndUpdate(
      { fullname: data.fullname },
      { 
        fullname: currentG.fullname,
        firstname:currentG.firstname,
        lastName:currentG.lastName,
        plus:currentG.plus,
        status: data.status,
        p1status: data.plus1,
        comments:data.comments

      }
    ).then((res)=>{
      console.log (res)
    })
  }
//   const glist=()=>{
//   props.db.collection.find({}).then(data=>{
//     console.log(data)
//   })
// }
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
  // glist()
  // confirmed()
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
          <Rsvp G={currentG}update={upStat} pop={populateG} />
        </Route>
        <Route path='/Venue'>
          <Venue/> 
        </Route>
        <Route path='/HotelInfo'>
          <HotelInfo/>
        </Route>
        <Route path='/Admin'>
          <Admin c={gInfo} con={guestL}/>
        </Route>
      </Switch>
</Router> 
  )
}

export default App;
