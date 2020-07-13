import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import Jgcarousel from './Carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
console.log(styles)
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