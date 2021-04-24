import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import glen from '../images/glen.jpeg'
import Button from 'react-materialize/lib/Button'

function Locations(){
    const openLink=()=>{
        window.open('https://www.theclubatglenmore.com/','_blank')
    }
    return(
        <div className= 'pContent'>
            <Row>
                <Col s={10} m={6} offset='s1 m3' >
                    <CardPanel className='panel'>
                        <div className='card-title title1'>
                            Fairfield Inn & Suites by Mariott Charlotesville DownTown/University Area
                        </div>
                        <p>(434)295-0100</p>
                        <img src={glen} alt=''></img>
                        <div>
                        401 Cherry Avenue
                        </div>
                        <div>
                        Charlottesville, VA 22903
                        </div>
                        <Button onClick={openLink} >
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
                        <img src={glen} alt=''></img>
                        <div>
                            1750 Piper Way
                        </div>
                        <div>
                            Keswick, VA 22947
                        </div>
                        <Button onClick={openLink} >
                            website
                        </Button>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}
export default Locations