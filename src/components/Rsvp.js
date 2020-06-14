import React, {useState}from 'react'
import {CardPanel, Button}from 'react-materialize'
import Row from 'react-materialize/lib/Row'
import Col from 'react-materialize/lib/Col'
import Textarea from 'react-materialize/lib/Textarea'
import RadioGroup from 'react-materialize/lib/RadioGroup'
import Autocomplete from 'react-materialize/lib/Autocomplete'
import glist from '../glist.js'

function Rsvp(props){
const[isAttending, setAttend]=useState('true')
const[name, setName]=useState('')
const [gSelected, selectG]= useState(false)
const [plusStatus, updatePlus]=useState('')


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
    return(
        <div className='pContent'>
            <CardPanel>
                {/* <Autocomplete options={{data:glist,onAutocomplete:function(text){Input(text)}
                     }}  onChange={nameInput} value={name}/> */}
                    {gSelected===true?
                <Row className='justify-content-center'>
                    
                    <Col s={10}offset='s1'>
                    <header>{name}</header>
                    </Col>
                    <Col s={8} offset='s1'>
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
                    <Col s={10} offset='s1'>
                        <Textarea label='allergies/ comments'/>
                    </Col>
                    <Row>
                    <Col s={4} >
                        <Button onClick={goBack}>Back</Button>
                    </Col>
                    <Col s={4} offset='s2'>
                        <Button onClick={goBack}>Update</Button>
                    </Col>
                    </Row>
                </Row>:
                <div>
                <Autocomplete options={{data:glist,onAutocomplete:function(text){Input(text)}
                }}  onChange={nameInput} value={name}/>
                <Row>
                    
                     <div>
                        no guest selected
                     </div>

                </Row>
                </div>
                }
            </CardPanel>
           
        </div>
    )
}
export default Rsvp