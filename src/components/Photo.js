import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import Jgcarousel from './Carousel'

function Photos (){
    return(
        <div className='pContent'>
            <Row>
                <Col s={10} m={6} offset='s1 m3' >
                    <CardPanel id='panel'>
                        <Jgcarousel/>
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}
export default Photos;