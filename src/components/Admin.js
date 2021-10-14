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
    // const [comments,setComments]= useState([])
    const [view, setView]=useState('')
    const [notes,setNotes]= useState([])
    const [verify, setVar]= useState('')
    const [filet, setFilet]= useState(0)
    const [salmon, setSalmon]= useState(0)
    const [veg, setVeg]= useState(0)
    const [plusCount, setPlusCount]= useState(0)
    useEffect(()=>{
        axios.get('https://jgweddingapi.herokuapp.com/api')
        .then(async data=>{
            console.log(data)
            setAllG(data.data)
            setDisplay(data.data)
            //   getComments()
            let attending=await data.data.filter(person=>{return person.status===true})
            let p1s= await attending.filter(person=>{return person.p1status==='Bringing +1'})
            console.log (p1s)
            setPlusCount(p1s.length)
            let not=await data.data.filter(person=>{return person.status===false})
            setComing(attending)
            let food = await tallyFood(attending)
            setFilet(food[0])
            setSalmon(food[1])
            setVeg(food[2])
            console.log('food',food)
            setDec(not)
            }) 
        .catch(err=>console.log(err))
            axios.get('https://jgweddingapi.herokuapp.com/api/messages').then(data=>{setNotes(data.data)})
        // axios.get('http://localhost:8080/api').then(data=>console.log(data)).catch(err=>console.log(err))
      },[])
    // const getComments= async()=>{
    //     let gWithComments= await allG.filter(g=>{return g.comments.length >0})
    //     let allComments = await gWithComments.map(g=>{return {name:g.fullname,comments:g.comments}})
    //     setComments(allComments)
    // }

    const tallyFood=(attending)=>{
        let Filet=0
        let Salmon =0
        let Vegatarian=0
        attending.map(guest=>{
            console.log('coming list')
            console.log(guest.order)
            if(guest.order && guest.pOrder){
                return (  guest.order==='Filet Mignon with a Demi-Glace'?Filet +=1:guest.order==='Vegatarian Option'?Vegatarian+=1:Salmon+=1, 
                guest.pOrder==='Filet Mignon with a Demi-Glace'?Filet +=1:guest.pOrder==='Vegatarian Option'?Vegatarian+=1:Salmon+=1 )
            }else if(guest.order && !guest.pOrder){
                return guest.order==='Filet Mignon with a Demi-Glace'?Filet +=1:guest.order==='Vegatarian Option'?Vegatarian+=1:Salmon+=1
            }
            return null
        })
        return[Filet,Salmon,Vegatarian]
    }
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
                console.log(notes)
                break;
            case "GInfo":
                setView('GInfo')
                console.log(notes)
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
                let updatedList= await display.filter(item=>{return item.fullname.toLowerCase().includes(filterWord.toLowerCase())}) 
                setDisplay(updatedList)
                break;
            default:console.log('default')
        }
    }
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
                    <option value="GInfo">Guest Info</option>
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
                        <button className='adminbtn' value="GInfo" onClick={(e)=>{toggleDisplay(e.target.value)}}>Guest Info</button>
                    </div>
                </Col>
                <Col m={10} s={12} id= 'disp'>
                   {view==='List'?<input type='text' placeholder='filter guests by name' id='filterIn' onChange={(e)=>{filterList(e)}}></input>:<></>} 
                    {view==='List'?
                    display.map((data,i)=>{
                        console.log(data)
                        return(
                            data.status===true?
                        <Row key={i} >
                            <div className='person'>
                            <Col s={6}><p>{data.fullname}</p></Col>
                            {data.p1status?
                            <Col s={1}><p>{data.p1status==="Bringing +1"?"+1":1}</p></Col>:<Col s={1}><p>1</p></Col>
                            }
                            {/* <Col s={1}><p>{data.fullname}</p></Col> */}
                            <Col s={2}><p className='attending'>Attending</p></Col>
                            <Col s={2}><Modal
                                actions={[
                                    <Button flat modal="close" node="button" waves="green">Cancel</Button>,
                                    <Button flat modal="close" className='deleteG'node="button" waves="red" name={data._id} onClick={(e)=>{deleteGuest(e.target.name)}}>Delete</Button>
                                ]}
                                header={`Delete ${data.fullname} `}
                                id="Modal-0"
                                open={false}
                                trigger={<Button className='deleteG'node="button">X</Button>}
                                >
                                </Modal></Col>
                                </div>
                        </Row>:
                        <Row key={i} >
                        <div className='person'>
                        <Col s={6}><p>{data.fullname}</p></Col>
                        <Col s={4}><p className={data.status===false?'decline':'pending'}>{data.status===false?'Decline':'Pending'}</p></Col>
                        <Col s={2}><Modal
                            actions={[
                                <Button flat modal="close" node="button" waves="green">Cancel</Button>,
                                <Button flat modal="close" className='deleteG'node="button" waves="red" name={data._id} onClick={(e)=>{deleteGuest(e.target.name)}}>Delete</Button>
                            ]}
                            header={`Delete ${data.fullname} `}
                            id="Modal-0"
                            open={false}   
                            trigger={<Button className='deleteG'node="button">X</Button>}
                            >
                            </Modal></Col>
                            </div>
                    </Row>
                    )}):
                    view==='Add1'? <AddG/>: 
                    view==='GInfo'?
                    <div className='container justify-content-center'>
                        <Row>
                            <label  value="Attending Guest">Total Guest List</label>
                            <h5 id='totalA'> {allG?allG.length:'err'}</h5>
                        </Row>
                        <Row>
                            <label value="Attending Guest">Total Attending Guest</label>
                            <h5 id='totalA'> {coming?coming.length+plusCount:null}</h5>
                        </Row>
                        <Row>
                            <label  value="Cannot Attend">Total Cannot Attend</label>
                            <h5 id='totalA'> {decline?decline.length:null}</h5>
                        </Row>
                        <Row>
                            <label value="Attending Guest">Total Filet Orders</label>
                            <h5 id='totalA'> {filet}</h5>
                        </Row>
                        <Row>
                            <label value="Attending Guest">Total Salmon Orders</label>
                            <h5 id='totalA'> {salmon}</h5>
                        </Row>
                        <Row>
                            <label value="Attending Guest">Total Vegatarian Orders</label>
                            <h5 id='totalA'> {veg}</h5>
                        </Row>
                    </div>:
                    (view==='ViewNotes')&&(notes.length>0? 
                    notes.map((data)=>{console.log(data)
                        return(
                            <div className='messDiv'>
                                <h5>
                                    {data.sender}
                                </h5>
                                <hr/>
                                <Row>
                                    <Col s={10} offest='s1'>{data.message}</Col>
                                </Row>
                            </div>
                        )
                    })
                    :<div></div>)}
                </Col>
            </Row>
            
        </div>:
                <textarea placeholder='P@$$word' className='Password' onChange={checkword} value={verify}/>
            }
    </div>
   
)
}
export default Admin