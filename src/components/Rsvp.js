import React, {useState, useEffect}from 'react'
import {CardPanel}from 'react-materialize'
import Row from 'react-materialize/lib/Row'
import Col from 'react-materialize/lib/Col'
import RadioGroup from 'react-materialize/lib/RadioGroup'
import Autocomplete from 'react-materialize/lib/Autocomplete'
// import glist from '../glist.js'
import Switch from 'react-materialize/lib/Switch'

function Rsvp(props){
const[isAttending, setAttend]=useState(true)
const[name, setName]=useState('')
// const[email, setEmail]=useState('')
const [guests, setGuests]=useState(props.names)
const [gSelected, selectG]= useState(false)
const [plusStatus, updatePlus]=useState('')
const[comments, upComm]= useState('')
const[guest, setGuest]=useState(props.G)
// console.log(props.G)
useEffect(() => {
    
    setGuest(props.G);

  }, [props.G])
  useEffect(() => {
    setGuests(props.names)
    //   let nList=[]
    // props.names.map(data=>{
    //     console.log(data)
    //     nList.push()
    //    })
  }, [props.names])
// glist.map((data)=>{
// let person=data.firstName+' '+data.lastName
//     console.log(person)
// })
let val=(e)=>{
    setAttend(e.target.value)
    console.log(isAttending)
}
let nameInput=(e,val)=>{
    setName(e.target.value)
}
let upG=()=>{
    let guest={
        fullname:name,
        status:isAttending,
        plus1:plusStatus,
        comments:comments
    }
    props.update(guest)
    setName('')
    selectG(false)
}
let Input=(e)=>{
    console.log(e)
    props.pop(e)
    selectG(true)
    setName(e)
    console.log(name)
}
let goBack=()=>{
    setName('')
    selectG(false)
    upComm('')
    updatePlus('')

}
// const chEmail=(e)=>{
//     setEmail(e.target.value)
// }
let comm=(e)=>{
    upComm(e.target.value)
}
let plus1=(e,val)=>{
    if(e.target.value==='on'){
        updatePlus('Bringing +1')
    }
    else if(e.target.value==='off'){
        updatePlus('No plus 1')
    }
console.log(e.target.value)
}
    return(
        
        <div className='pContent contentFx'>
            <Row>
                <Col s={12} m={6} offset='m3'>
                    <CardPanel className='rsvpPanel'>
                        {gSelected===true?
                        <Row className='justify-content-center'>                           
                            <Col s={10}offset='s1'>
                            <div className='card-titl title1'><span>{guest.fullname}</span></div>
                            </Col>
                            <Col s={10} offset='s1'className='radio'>
                                <RadioGroup   onChange={val} options={[
                                    {
                                        label:'I Will be Attending',
                                        value:"true"
                                    },
                                    {
                                        label:'  I am Unable to Attend',
                                        value:"false" 
                                    }
                                ]} value= {isAttending.toString()}/>
                            </Col>
                            {guest.plus===true?
                            <Col s={10} offset='s1'>
                                <Switch onChange={plus1} offLabel='No +1'onLabel='Bringing +1'></Switch>
                            </Col>:
                            <div>

                            </div>
                            }
                            <Row>
                                <Col s={10} offset='s1'>
                                    <textarea onChange={comm}value={comments}placeholder='Allergies / Comments'/>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col s={10} offset='s1'>
                                    <input type='email' onChange={chEmail}value={email}placeholder='email to send invite'/>
                                </Col>
                            </Row> */}
                            <Row>
                            <Col s={3} offset='s2'>
                                <button className='btn' onClick={goBack}>Back</button>
                            </Col>
                            <Col s={3} offset='s1'>
                                <button className='btn'onClick={upG}>Update</button>
                            </Col>
                            </Row>
                        </Row>:
                        <Row>
                            <Col s={12} >
                                <Autocomplete className='auto' options={{data:guests,onAutocomplete:function(text){Input(text)}
                                }}  placeholder='Search List' onChange={nameInput}  value={name}/>
                            </Col>
                            <Col s={10} offset='s1'>
                                <p>{props.M?props.M:''}</p>
                            </Col>
                        </Row>
                        // </div>
                        }
                    </CardPanel>
                </Col>
            </Row>   
        </div>
    )
}
export default Rsvp