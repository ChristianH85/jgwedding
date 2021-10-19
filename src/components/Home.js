import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import blroseb from '../images/blroseb.png'
// import jg8 from '../images/jg8.jpg'

function Home(props){
    return(
    <Row className='pContent'>
      <Col s={12} id ='tcard' className='hide-on-small-only'>
        <CardPanel className='bg'>
        <img src={blroseb} id="bg3" alt=""></img>
        <img src={blroseb} id="bg4" alt=""></img>
        {/* <div id='dTitle' className='show-on-large'>
        <h1 className='title1'>
              Justin Henry
            </h1>
            <h1 className='title1'>
              & 
            </h1>
            <h1 className='title1'>
              Genevra Henry
            </h1>
            <div className='title3'>
            <h2 className='title4'>
              November 13, 2021
            </h2>
            <h2 className='title4'>
              4 pm
            </h2> 
            </div>
        </div> */}
          </CardPanel>
      </Col>
      <Col s={12} id ='tcard' className='hide-on-med-and-up'>
        <CardPanel className='mBg'>
            
          </CardPanel>
      </Col>    
      <div id='mTitle'>
            <p className='title3'>
              Justin Henry
              & 
              Genevra Henry
            </p>
            <hr/>
            
            <p className='title2'>
              November 13, 2021
            </p>
            <p className='title2'>
              4:00 pm
            </p>
        </div>
    </Row>
    )
}
export default Home