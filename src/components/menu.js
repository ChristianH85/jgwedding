import React from 'react'
import {Icon,Dropdown, Button} from 'react-materialize'
import{Link} from 'react-router-dom'


function Menu (){
    return(   
        <Dropdown
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
    <Link to={`/`} className='menu2'>
    <Icon small>home</Icon>Home
    </Link>
    <Link to= '/Rsvp'className='menu2'>
    <Icon small>message</Icon>
     RSVP
    </Link>
    <Link to= '/HotelInfo' className='menu2'>
    <Icon small>hotel</Icon>
     Hotel
    </Link>
    <Link to= '/Venue'className='menu2'>
    <Icon small>location_on</Icon>
     Venue
    </Link>
    <Link to= '/Registry' className='menu2'>
    <Icon small>redeem</Icon>
     Registry
    </Link>
    

</Dropdown>
        // <Icon medium>menu</Icon>
    )
}
export default Menu