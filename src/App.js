import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home.js'
import './App.css';
// import Menu from './components/menu';
import Rsvp from './components/Rsvp';
import HotelInfo from './components/HotelInfo.js';
import Locations from './components/Locations.js';
import Row from 'react-materialize/lib/Row';
import Admin from './components/Admin.js';
// import Photos from './components/Photo.js';
import Nav from './components/Nav.js';
import axios from 'axios'
import Message from './components/Message.js';

function App(props) {
  const [currentG, setG]=useState('')
  const [names, setNames]=useState('')
  const [gInfo, gList]= useState('')
  const[message,setM]= useState('Search Guest List for your name and update your details.')

  useEffect(()=>{
    axios.get('https://jgweddingapi.herokuapp.com/api')
    .then(data=>{
          gList(data.data)
          let namesObj={}
          data.data.map(data=>namesObj[data.fullname]=null)
          setNames(namesObj)
        }) 
    .catch(err=>console.log(err))
  },[])

  const populateG=async(name)=>{
     let guest= await gInfo.filter(item=>
       item.fullname===name
    )
    setG(guest[0])
    setM('')
  }
  const guestL=()=>{
    console.log('hey')
    axios.get('https://jgweddingapi.herokuapp.com/api')
    .then(data=>{
          gList(data)
          console.log(data)
        })  
    .catch(err=>console.log(err))
  }
  const upStat= (data)=>{
    console.log('UpStat')
    console.log(data)
    console.log(currentG)
    let guest=currentG._id
    let updateObj={ 
      fullname: currentG.fullname,
      firstname:currentG.firstname,
      lastName:currentG.lastName,
      plus:currentG.plus,
      order:data.order,
      status: data.status,
      p1status: data.plus1,
      comments:data.comments
    }

    axios.post(`https://jgweddingapi.herokuapp.com/api/updateuser/${guest}`,updateObj)
    .then((data)=>{
        console.log(data)
        if(data.status===200){
          setM("Thank You for Replying!")
        }else{setM('error updating')}
      })
  }
  const upStatwG= (data)=>{
    console.log("data here get your data")
    console.log(data)
    console.log(currentG)
    let guest=currentG._id
    let updateObj={ 
      fullname: currentG.fullname,
      firstname:currentG.firstname,
      lastName:currentG.lastName,
      plus:currentG.plus,
      status: data.status,
      order:data.order,
      p1status: data.plus1,
      pOrder:data.pOrder,
      comments:data.comments
    }
   
    axios.post(`https://jgweddingapi.herokuapp.com/api/updateuserPlus/${guest}`,updateObj)
    .then((data)=>{
        console.log(data)
        if(data.status===200){
          setM("Thank You for Replying!")
        }else{setM('error updating')}
      })
  }
  return (
    
  <Router>
    <Row>
      <Nav/>
    </Row>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Rsvp'>
          <Rsvp M={message} G={currentG}update={upStat} names={names} pop={populateG} upPlus={upStatwG}/>
        </Route>
        <Route path='/Locations'>
          <Locations/> 
        </Route>
        <Route path='/HotelInfo'>
          <HotelInfo/>
        </Route>
        <Route path='/Admin'>
          <Admin c={gInfo} con={guestL}/>
        </Route>
        <Route path='/Message'>
          <Message/>
        </Route>
      </Switch>
</Router> 
  )
}

export default App;
