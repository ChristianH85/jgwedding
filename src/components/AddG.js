import React ,{useState} from 'react'
import {Row, Col,CardPanel,Button,Switch} from 'react-materialize'
import axios from 'axios'

function AddG(){
    const [fName,setFName]=useState('')
    const [lName,setLName]=useState('')
    const [plus,setPlus]=useState(false)

    const handleSubmit=()=>{
        let fullname=fName+" "+lName
          const gObj={
              fullname:fullname,
              firstname:fName,
              lastName:lName,
              plus:plus
          }
          console.log(gObj)
          axios.post('https://jgweddingapi.herokuapp.com/api/add1',gObj).then(data=>console.log(data))
    }
    return(
       
            <Row>
                <Col s={10} offset='s1'>
                    <CardPanel  className='panel'>
                        <input placeholder='First Name'value={fName} onChange={(e)=>{setFName(e.target.value)}}></input>
                        <input placeholder='Last Name'value={lName} onChange={(e)=>{setLName(e.target.value)}}></input>
                        {/* <label class="switch">
                        <input type="checkbox"default='false' value={plus} onChange={(e)=>{setPlus(e.target.value)}}/>
                        <span class="slider round"></span>
                        </label> */}
                        <label>Plus 1:</label>
                        <Switch
                        id="Switch-11"
                        offLabel="False"
                        onChange={(e)=>{setPlus(e.target.checked)}}
                        onLabel="True"
                        />
                        <br/>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </CardPanel>
                </Col>
            </Row>
    )
}
export default AddG