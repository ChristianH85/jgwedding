import React from 'react'
import { Icon, Navbar, NavItem, Row } from 'react-materialize'
import{Link} from 'react-router-dom'
function Nav (){

    return(
        <div>
            <navbar id='mdNav'className='hide-on-small'>
                <Row className='align-content-center hide-on-small-only'>
                    <p className='title1'>Justin & Genna</p>
                </Row>
                <Row id='navLinks' className='hide-on-small-only'>
                    
                        
                        <Link to={`/`} className='navL'>Home</Link>  
                        {/* <Link to={`/Rsvp`} className='navL'>RSVP</Link> */}
                        <Link to={`/Locations`} className='navL'>Locations</Link> 
                        <Link to={`/Message`} className='navL'>Message</Link>  

                        <NavItem className='navL' href='https://www.zola.com/wedding/justinandgenna2020/registry'>
                            Registry
                        </NavItem>
                </Row>
                
            </navbar>
            <Row className='hide-on-med-and-up'>
            <Navbar
                // alignLinks="right"
                brand={<a className="brand-logo" href="/">Justin &  Genna</a>}
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
    
                
                    {/* <Link to={`/Rsvp`} >RSVP</Link>   */}
                
               
                    <Link to={`/Locations`} >Locations</Link>  

                    <Link to={`/Message`} >Message</Link>  

                <NavItem href='https://www.zola.com/wedding/justinandgenna2020/registry'>
                    Registry
                </NavItem>
                </Navbar>
            </Row>
            
        </div>
    )
}
export default Nav