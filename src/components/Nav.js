import React from 'react'
import { Icon, Navbar, NavItem } from 'react-materialize'
import{Link} from 'react-router-dom'
function Nav (){

    return(
        <div>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="/">Genna &  Justin</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                >
  
                    <Link to={`/`} >Home</Link>  
    
                
                    <Link to={`/Rsvp`} >RSVP</Link>  
                
               
                    <Link to={`/Venue`} >Venue</Link>  

                    <Link to={`/Gallery`} >Gallery</Link>  

                <NavItem href='https://www.zola.com/wedding/justinandgenna2020/registry'>
                    Registry
                </NavItem>
                </Navbar>
        </div>
    )
}
export default Nav