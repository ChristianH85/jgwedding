import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'

function HotelInfo(){
    
    return(
        <div className='pContent'>
            <Row>
                <Col s={10} m={6} offset='s1 m3'>
                    <CardPanel  className='panel'>
                        <div className='card-title'>
                            Coming Soon Hotel
                        </div>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}
export default HotelInfo