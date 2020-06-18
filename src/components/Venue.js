import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import glen from '../images/glen.jpeg'

function Venue(){
    return(
        <div className= 'pContent'>
            <Row>
                <Col s={10} m={6} offset='s1 m3' >
                    <CardPanel id='panel'>
                        <div className='card-title title1'>
                            The Club at Glennmore
                        </div>
                        <img src={glen}></img>
                        <div>
                            1750 Piper Way
                        </div>
                        <div>
                            Keswick, VA 22947
                        </div>
                        <a href='https://www.theclubatglenmore.com/'>
                            website
                        </a>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}
export default Venue