import React,{useState} from 'react'
import {Row,Col,Button} from 'react-materialize'
import CardPanel from 'react-materialize/lib/CardPanel'
import Tabs from 'react-materialize/lib/Tabs'
import Tab from 'react-materialize/lib/Tab'
import TextInput from 'react-materialize/lib/TextInput'
function Admin(props){
    const [coming,setComing]=useState('')
    const [decline,setDec]= useState('')
    const [wait,setWait]= useState('')
    const [verify, setVar]= useState('')
    
    const popLists=()=>{
        props.con()
    }
    const checkword=(e)=>{
        setVar(e.target.value)
    }
    const showLists=()=>{
        if(props.c){
            let attend = []
            let dec = []
            let maybe= []
            props.c.map(data=>{
                if(data.status===undefined){
                    console.log(data.fullname)
                    let obj={
                        name:data.fullname,
                        comments: data.comments,
                    }
                    maybe.push(obj)
                }
                else if(data.status==='true'){
                    let obj={
                        name:data.fullname,
                        comments: data.comments,
                    }
                    console.log(data.fullname)
                    attend.push(obj)
                }
                else if(data.status==='false'){
                    let obj={
                        name:data.fullname,
                        comments: data.comments,
                    }
                    console.log(data.fullname)
                    dec.push(obj)
                }
                setComing(attend) 
                setWait(maybe) 
                setDec(dec)
                return attend
            })
        }
    }
    return(

        <div className='pContent'>
            {verify===process.env.REACT_APP_COMP?
            <Row>
                {/* {showLists()} */}
                <Col xs={4}>
                    <button onClick={popLists}>Load Lists</button>
                    <button onClick={showLists}>Show List</button>
                </Col>
                <Col sm={10} offset='s1'>
                    <Tabs>
                        <Tab title='Coming'>
                        {coming.length>0?coming.map((data)=>{
                    return(
                        <CardPanel id='attending'>
                            <div>{data.name}</div>
                            <div>{data.comments}</div>
                        </CardPanel>)
                    }):<div></div>}
                        </Tab>
                        <Tab title='Undecided'  >
                            {wait.length>0?wait.map((data)=>{
                                return(
                                    <CardPanel id='maybe'>
                                        <div>{data.name}</div>
                                        <div>{data.comments}</div>
                                    </CardPanel>)       
                                }):<div></div>}
                        </Tab>
                        <Tab title='Decline'  >
                            {decline.length>0?decline.map((data)=>{
                                return(
                                    <CardPanel id='decline'>
                                        <div>{data.name}</div>
                                        <div>{data.comments}</div>
                                    </CardPanel>)       
                                }):<div></div>}
                        </Tab>
                    </Tabs>

                </Col>
            </Row>:
            // <form onSubmit={popLists}>
                <Row>
                    <Col sm={5}>
                    <TextInput onChange={checkword}></TextInput>
                {/* <Button type='button'>check</Button> */}
                    </Col>
                </Row>
                
            </form>} 
        </div>
       
    )
}
export default Admin