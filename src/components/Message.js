import React, {useState} from 'react'
import {Row, Col,CardPanel, Button} from 'react-materialize'
import axios from 'axios'

function Message (){
    const [sender, setSender]=useState('')
    const [message, setMess]=useState('')
    const [errMess, setErrMess]=useState('')

    const submitSend=()=>{
        if(!sender){
            setErrMess('Sender Required')
        }
        else if(!message){
            setErrMess('Message Required')
        }
        else{
            setSender('')
            setMess('')
            axios.post('https://jgweddingapi.herokuapp.com/api/message',{sender:sender,message:message}.then((data)=>{console.log(data)}))
            setErrMess('Message Sent')}
    }
    return(
        <div className='pContent'>
            <Row>
                <Col s={12} m={6} offset='m3' >
                    <CardPanel className='notesPanel'>
                        <Row>
                            <Col s={8}offset='s2'>
                            <label>From:</label><input type='text'value={sender} onChange={(e)=>{setSender(e.target.value)}}></input>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col s={10}offset='s1'>
                            <label>Message:</label><textarea id='gMess'value={message} onChange={(e)=>{setMess(e.target.value)}}></textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Button className='btn' onClick={submitSend}>Send</Button>
                            </Col>
                        </Row>
                       {errMess?<p className='eMess'>{errMess}</p>:<></>}
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}
export default Message;