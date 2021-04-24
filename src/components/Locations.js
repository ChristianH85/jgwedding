import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import glen from '../images/glen.jpeg'
import hotel from '../images/Hotel.png'
import Button from 'react-materialize/lib/Button'

function Locations(){
    const openLink=(name)=>{
        if(name==='Hotel'){
            window.open('https://www.marriott.com/hotels/travel/chofc-fairfield-inn-and-suites-charlottesville-downtown-university-area/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_ODQ3NTcyNi03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D')
        }else if(name === 'Venue'){
        window.open('https://www.theclubatglenmore.com/','_blank')
        }
    }
    return(
        <div className= 'pContent'>
            <Row>
                <Col s={10} m={6} offset='s1 m3' >
                    <CardPanel className='panel'>
                        <div className='card-title title1'>
                            Fairfield Inn & Suites by Mariott Charlotesville DownTown/University Area
                        </div>
                        <hr/>
                        <img src={hotel} alt=''></img>
                        <div><a className='noDecA' href="tel:4342950100">(434)295-0100</a></div>
                        <div>
                        401 Cherry Avenue
                        </div>
                        <div>
                        Charlottesville, VA 22903
                        </div>
                        <hr/>
                        <p>November 12 & 13 is a busy day in the Charlottesville area (UVA football is taking over the town!), so we recommend you act fast on lodging. We have reserved a few room blocks.</p>
                        <Button name='Hotel' onClick={(e)=>openLink(e.target.name)} >
                            website
                        </Button>
                    </CardPanel>
                </Col>
            </Row>
            <Row>
                <Col s={10} m={6} offset='s1 m3' >
                    <CardPanel className='panel'>
                        <div className='card-title title1'>
                            The Club at Glennmore
                        </div>
                        <hr/>
                        <img src={glen} alt=''></img>
                        <div>
                            1750 Piper Way
                        </div>
                        <div>
                            Keswick, VA 22947
                        </div>
                        <hr/>
                        <Button name='Venue' onClick={(e)=>openLink(e.target.name)}>
                            website
                        </Button>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}
export default Locations