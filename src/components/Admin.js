import React from 'react'
import {Row,Col} from 'react-materialize'
import CardPanel from 'react-materialize/lib/CardPanel'
function Admin(props){
    // const [coming,setComing]=useState([])
    // const [decline,setDec]= useState([])
    // const [wait,setWait]= useState([])
    console.log(props.con)
    return(
        <div>
            <Row>
                <Col xs={12}>
                    {/* <button onClick={props.con}>list</button> */}
                    <h1>Guest List</h1>
                    <button onClick={props.con}>Confirm List</button>
                    {props.c.length>0&& props.c.status==='true'?props.c.map((data)=>{
                        return <CardPanel>{data.fullname}</CardPanel>
                    })
                    :<div>{props.c.fullname}</div>}
                </Col>
            </Row> 
        </div>
       
    )
}
export default Admin