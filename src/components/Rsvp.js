import React, {useState}from 'react'
import {TextInput,Button, Card}from 'react-materialize'
import Row from 'react-materialize/lib/Row'
import Col from 'react-materialize/lib/Col'
import Textarea from 'react-materialize/lib/Textarea'
import RadioGroup from 'react-materialize/lib/RadioGroup'
import Autocomplete from 'react-materialize/lib/Autocomplete'
import MyDropzone from '../dropzone'
import glist from '../glist.js'

function Rsvp(){
const[isAttending, setAttend]=useState('true')
const[name, setName]=useState('')


// glist.map((data)=>{
// let person=data.firstName+' '+data.lastName
//     console.log(person)
// })
let val=(e)=>{
    setAttend(e.target.value)
    console.log(isAttending)
}
let nameInput=(e,val)=>{
    console.log(val)
    console.log("nInput"+e.target.value)
    // setName(e.target.value)
}
let Input=(e,val)=>{
    console.log(val)
    console.log("Input"+e.target.value)

    setName(e.target.value)
}
    return(
        <div className='pContent'>
            <Card>
            <TextInput
                label="Search Name"
                data={glist}
                onChange={Input}
    />
            </Card>
            <Card>
                <Autocomplete data={glist} onChange={Input}></Autocomplete>
                <Autocomplete options={{data:glist
                     }} onAutocomplete={nameInput} onChange={nameInput} />
                <Row className='justify-content-center'>
                    
                    <Col s={10}offset='1'>
                        
                    </Col>
                    <Col s={8} offset='1'>
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
                    <Col s={10} offset='1'>
                        <Textarea label='allergies/ comments'/>
                        <MyDropzone></MyDropzone>
                    </Col>
                </Row>
            </Card>
           
        </div>
    )
}
export default Rsvp