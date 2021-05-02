import React from 'react'
import {Row, Col,CardPanel} from 'react-materialize'
import blroseb from '../images/blroseb.png'
// import jg8 from '../images/jg8.jpg'

function Home(props){
    return(
    <Row >
      <Col s={12} id ='tcard' className='hide-on-small-only'>
        <CardPanel className='bg'>
        <img src={blroseb} id="bg3" alt=""></img>
        <img src={blroseb} id="bg4" alt=""></img>
        <div id='dTitle'>
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
        </div>
          </CardPanel>
      </Col>
      <Col s={12} id ='tcard' className='hide-on-med-and-up'>
        <CardPanel className='mBg'>
        {/* <img src={blroseb} id="bg3" alt=""></img>
        <img src={blroseb} id="bg4" alt=""></img> */}
        <div id='mTitle'>
            <p className='title3'>
              Justin Henry
            </p>
            <p className='title3'>
              & 
            </p>
            <p className='title3'>
              Genevra Henry
            </p>
            <div className='title3'>
            <p className='title3'>
              November 13, 2021
            </p>
            <p className='title3'>
              4 pm
            </p>
            </div>
        </div>
            
          </CardPanel>
      </Col>    
    </Row>
    )
}
export default Home