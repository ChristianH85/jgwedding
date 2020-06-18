import React, {useState}from 'react'
import {CardPanel, Button}from 'react-materialize'
import Row from 'react-materialize/lib/Row'
import Col from 'react-materialize/lib/Col'
import Textarea from 'react-materialize/lib/Textarea'
import RadioGroup from 'react-materialize/lib/RadioGroup'
import Autocomplete from 'react-materialize/lib/Autocomplete'
import glist from '../glist.js'
import CardTitle from 'react-materialize/lib/CardTitle'
import Switch from 'react-materialize/lib/Switch'

function Rsvp(props){
const[isAttending, setAttend]=useState(true)
const[name, setName]=useState('')
const [gSelected, selectG]= useState(false)
const [plusStatus, updatePlus]=useState('')
const[comments, upComm]= useState('')
// console.log(props.G)

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
}
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
        <div className='pContent'>
            <Row>
                <Col s={10} m={6} offset='s1 m3'>
                    <CardPanel id='panel'>
                        {gSelected===true?
                        <Row className='justify-content-center'>
                            
                            <Col s={10}offset='s1'>
                            <div className='card-titl title1'>{props.G.fullname}</div>
                            </Col>

                            <Col s={10} offset='s1'className='radio'>
                                <RadioGroup   onChange={val} options={[
                                    {
                                        label:'I Will be Attending',
                                        value:"true"
                                    },
                                    {
                                        label:'I am Unable to Attend',
                                        value:"false" 
                                    }
                                ]} value= {isAttending}/>
                            </Col>
                            {props.G.plus===true?
                            <Col>
                                <Switch onChange={plus1} offLabel='No +1'onLabel='Bringing +1'></Switch>
                            </Col>:
                            <div>

                            </div>
                            }
                            <Row>
                                <Col s={10} offset='s1'>
                                    <Textarea onChange={comm}value={comments}label='allergies/ comments'/>
                                </Col>
                            </Row>
                            <Row>
                            <Col s={3} offset='s2'>
                                <button onClick={goBack}>Back</button>
                            </Col>
                            <Col s={3} offset='s1'>
                                <button onClick={upG}>Update</button>
                            </Col>
                            </Row>
                        </Row>:
                        <Row>
                            <Col s={12} offset='s1'>
                                <Autocomplete className='auto' options={{data:glist,onAutocomplete:function(text){Input(text)}
                                }}  placeholder='Search List' onChange={nameInput}  value={name}/>
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