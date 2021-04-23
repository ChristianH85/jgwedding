import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Row,Col,Select} from 'react-materialize'

// import TextInput from 'react-materialize/lib/TextInput'
function Admin(props){
    const [allG, setAllG]=useState([])
    const [coming,setComing]=useState([])
    const [decline,setDec]= useState([])
    const [display,setDisplay]= useState([])
    // const [view, setView]=useState('')
    // const [wait,setWait]= useState('')
    const [verify, setVar]= useState('')
    // const[glist, setGlist]= useState(props.c)
    // useEffect(() => {
    //     setGlist(props.c);
    //   }, [props.c])

      useEffect(()=>{
        axios.get('https://jgweddingapi.herokuapp.com/api')
        .then(async data=>{
              setAllG(data.data)
              setDisplay(data.data)
              let attending=await data.data.filter(person=>{return person.status===true})
              let not=await data.data.filter(person=>{return person.status===false})
              setComing(attending)
              setDec(not)
            }) 
        .catch(err=>console.log(err))
        // axios.get('http://localhost:8080/api').then(data=>console.log(data)).catch(err=>console.log(err))
      },[])
    // const popLists=()=>{
    //     props.con()
    // }
    const toggleDisplay=(key)=>{
        console.log(key)
        // let option=e.tatget.value
        switch(key){
            case "Add1":
                console.log('add one')
                break;
                // setDisplay()
            case "ShowA":
                setDisplay(coming)
                break;
            case "ShowD":
                setDisplay(decline) 
                break;   
            case "ShowAll":
                console.log(allG)
                setDisplay(allG)
                break;
            case "ViewNotes":
                console.log('notes')
                break;
                // setDisplay()
            default:
                setDisplay(allG)
                break;

        }
         
    }
    const checkword=(e)=>{
        setVar(e.target.value)
    }
    // const showLists=()=>{
    //     if(glist){
    //         let attend = []
    //         let dec = []
    //         let maybe= []
    //         glist.map(data=>{
    //             if(data.status===undefined){
    //                 // console.log(data.fullname)
    //                 let obj={
    //                     name:data.fullname,
    //                     comments: data.comments,
    //                 }
    //                 maybe.push(obj)
    //             }
    //             else if(data.status==='true'){
    //                 let obj={
    //                     name:data.fullname,
    //                     comments: data.comments,
    //                 }
    //                 console.log(data.fullname)
    //                 attend.push(obj)
    //             }
    //             else if(data.status==='false'){
    //                 let obj={
    //                     name:data.fullname,
    //                     comments: data.comments,
    //                 }
    //                 console.log(data.fullname)
    //                 dec.push(obj)
    //             }
    //             setComing(attend) 
    //             setWait(maybe) 
    //             setDec(dec)
    //             return attend
    //         })
    //     }
    // }
    return(

        <div className='pContent'>
            {verify==='terioaustin19'?

            <div >
                <div className='hide-on-med-and-up'>
                    <Select name="admin" id="opt-select" onChange={(e)=>{toggleDisplay(e.target.value)}}>
                        <option value="" disabled>Admin Options:</option>
                        <option value="Add1">Add Guest</option>
                        <option value="ShowA">Show Attending</option>
                        <option value="ShowD">Show Cannot Attend</option>
                        <option value="ShowAll">Show All</option>
                        <option value="ViewNotes">View Notes</option>
                    </Select>
                </div>
                <Row id='adminDisplay'>
                    <Col m={2}>
                        <div className='sidebar hide-on-small-only'>
                            <button className='adminbtn' value='Add1' onClick={(e)=>{toggleDisplay(e.target.value)}}>Add Guest</button>
                            <button className='adminbtn' value="ShowA" onClick={(e)=>{toggleDisplay(e.target.value)}}>Show Attending</button>
                            <button className='adminbtn' value="ShowD" onClick={(e)=>{toggleDisplay(e.target.value)}}>Show Cannot Attend</button>
                            <button className='adminbtn' value="ShowAll" onClick={(e)=>{toggleDisplay(e.target.value)}}>Show All</button>
                            <button className='adminbtn' value="ViewNotes" onClick={(e)=>{toggleDisplay(e.target.value)}}>Show Notes</button>
                        </div>
                    </Col>
                    <Col m={10} s={12} id= 'disp'>
                        {display.length>0?
                        display.map((data)=>{return(
                            <div>
                                <p>{data.fullname}</p>
                            </div>
                        )}):<div></div>}
                    </Col>
                </Row>
                
            </div>:
                    <textarea onChange={checkword} value={verify}></textarea>
                }
        </div>
       
    )
}
export default Admin