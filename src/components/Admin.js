import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-materialize'
import CardPanel from 'react-materialize/lib/CardPanel'
import Tabs from 'react-materialize/lib/Tabs'
import Tab from 'react-materialize/lib/Tab'
// import TextInput from 'react-materialize/lib/TextInput'
function Admin(props){
    const [coming,setComing]=useState('')
    const [decline,setDec]= useState('')
    const [wait,setWait]= useState('')
    const [verify, setVar]= useState('')
    const[glist, setGlist]= useState(props.c)
    useEffect(() => {
        setGlist(props.c);
      }, [props.c])
    const popLists=()=>{
        props.con()
    }
    const checkword=(e)=>{
        setVar(e.target.value)
    }
    const showLists=()=>{
        if(glist){
            let attend = []
            let dec = []
            let maybe= []
            glist.map(data=>{
                if(data.status===undefined){
                    // console.log(data.fullname)
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
                        {coming.length>0?coming.map((data,i)=>{
                    return(
                        <CardPanel key={i} className='attending'>
                            <div key={data.name}>{data.name}</div>
                            <div key={data.comments}>{data.comments}</div>
                        </CardPanel>)
                    }):<div></div>}
                        </Tab>
                        <Tab title='Undecided'  >
                            {wait.length>0?wait.map((data,i)=>{
                                return(
                                    <CardPanel key={i} className='maybe'>
                                        <div key={data.name}>{data.name}</div>
                                    </CardPanel>)       
                                }):<div></div>}
                        </Tab>
                        <Tab title='Decline'  >
                            {decline.length>0?decline.map((data, i)=>{
                                return(
                                    <CardPanel key={i} className='decline'>
                                        <div key={data.name}>{data.name}</div>
                                        <div key={data.comments}>{data.comments}</div>
                                    </CardPanel>)       
                                }):<div></div>}
                        </Tab>
                    </Tabs>

                </Col>
            </Row>:
            // <form onSubmit={popLists}>
                <Row>
                    <Col sm={5}>
                    <textarea onChange={checkword} value={verify}></textarea>
                {/* <Button type='button'>check</Button> */}
                    </Col>
                </Row>}
                
            {/* // </form>}  */}
        </div>
       
    )
}
export default Admin