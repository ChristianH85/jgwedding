import React from 'react'
import {Icon,Dropdown, Button} from 'react-materialize'
import{Link} from 'react-router-dom'


function Menu (){
  let home='  Home'
  let rsvp='  RSVP'
  let hotel='  Hotel'
  let venue='  Venue'
  let list=' Admin'
    return(   
        <Dropdown className='menuView'
  options={{
    alignment: 'left',
    autoTrigger: true,
    closeOnClick: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    hover: false,
    inDuration: 150,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 250
  }}
  trigger={<Button className='menuB'><Icon type= 'button' className='menu'small>menu</Icon></Button>}>
    <div>
    <Link to={`/`} >
    <Icon small>home</Icon>
    {home}
    </Link>  
    </div>
    <div>
    <Link to= '/Rsvp'>
    <Icon small>message</Icon>
     {rsvp}
    </Link>
    </div>
    <div>
    <Link to= '/HotelInfo'>
    <Icon small>hotel</Icon>
     {hotel}
    </Link>
    </div>
    <div>
    <Link to= '/Venue'>
    <Icon small>location_on</Icon>
     {venue}
    </Link>
    </div>
    <div>
    <Link to= '/Admin'>
     {list}
    </Link>
    </div>
    {/* <div>
    <Link to= '/Registry' >
    <Icon small>redeem</Icon>
     Registry
    </Link>
    </div> */}
    

</Dropdown>
        
    )
}
export default Menu