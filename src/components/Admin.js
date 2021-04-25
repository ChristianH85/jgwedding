import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Row,Col,Select,Button,Modal} from 'react-materialize'
import AddG from './AddG'
// import TextInput from 'react-materialize/lib/TextInput'
function Admin(props){
    const [allG, setAllG]=useState([])
    const [coming,setComing]=useState([])
    const [decline,setDec]= useState([])
    const [display,setDisplay]= useState([])
    const [view, setView]=useState('')
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
                setView('Add1')
                console.log('add one')
                break;
                // setDisplay()
            case "ShowA":
                setView('List')
                setDisplay(coming)
                break;
            case "ShowD":
                setView('List')
                setDisplay(decline) 
                break;   
            case "ShowAll":
                setView('List')
                console.log(allG)
                setDisplay(allG)
                break;
            case "ViewNotes":
                setView('ViewNotes')
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
    const deleteGuest=(id)=>{
        // console.log(id)
        axios.delete(`https://jgweddingapi.herokuapp.com/api/delete/${id}`).then(data=>console.log(data))
    }
    const filterList=async(e)=>{
        e.preventDefault()
        console.log(e.target.value);
        console.log(e.target.value.length);
        let filterWord=e.target.value
        let tf=filterWord.length>0?true:false
        console.log(tf)
        switch(tf){
            case false:
                setDisplay(allG);
                break;
            case  true:
                console.log('2nd')
                // let l=filterWord.length
                let updatedList= await allG.filter(item=>{return item.fullname.includes(filterWord)}) 
                console.log(updatedList)
                break;
            default:console.log('default')
        }
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
                        <input type='text' placeholder='filter guests by last name' onChange={(e)=>{filterList(e)}}></input>
                        {view==='Add1'? <AddG/>: view==='ViewNotes'? <p>notes</p>:view==='List'&&display.length>0?
                        display.map((data,i)=>{
                            return(
                            <Row key={i} >
                                <div className='person'>
                                <Col s={6}><p>{data.fullname}</p></Col>
                                <Col s={4}><p>{data.status===true?'Attending':data.status=false? "Not Attending":"pending"}</p></Col>
                                <Col s={2}><Modal
                                    actions={[
                                        <Button flat modal="close" node="button" waves="green">Cancel</Button>,
                                        <Button flat modal="close" className='deleteG'node="button" waves="red" name={data._id} onClick={(e)=>{deleteGuest(e.target.name)}}>Delete</Button>
                                    ]}
                                    header={`Delete ${data.fullname} `}
                                    id="Modal-0"
                                    open={false}
                                    options={{ 
                                        inDuration: 250,
                                        opacity: 0.5,
                                        outDuration: 250,
                                        preventScrolling: true
                                    }}     
                                    trigger={<Button className='deleteG'node="button">X</Button>}
                                    >
                                    </Modal></Col>
                                    </div>
                            </Row>
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