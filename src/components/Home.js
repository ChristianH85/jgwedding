import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import blroseb from '../images/blroseb.png'


function Home(props){
    return(
    <Row >
      <Col s={12} id ='tcard'>
        <CardPanel className='bg'>
        <img src={blroseb} id="bg3" alt=""></img>
        <img src={blroseb} id="bg4" alt=""></img>
            <h1 className='title1'>
              Justin Henry
            </h1>
            <h1 className='title1'>
              & 
            </h1>
            <h1 className='title1'>
              Genevra Mirenda
            </h1>
            <h2 className='title3'>
              November 14, 2020
            </h2>
            <h2 className='title3'>
              4 pm
            </h2>

          </CardPanel>
      </Col>    
    </Row>
    )
}
export default Home