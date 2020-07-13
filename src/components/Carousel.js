import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import jg1 from '../images/jg1.jpg'
import jg2 from '../images/jg2.jpg'
import jg3 from '../images/jg3.jpg'
import jg4 from '../images/jg4.jpg'
import jg5 from '../images/jg5.jpg'
class Jgcarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={jg1} alt='' />
                </div>
                <div>
                    <img src={jg2} alt=''/>
                </div>
                <div>
                    <img src={jg3} alt=''/>
                </div>
                <div>
                    <img src={jg4} alt=''/>
                </div>
                <div>
                    <img src={jg5} alt=''/>
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<Jgcarousel />, document.querySelector('.demo-carousel'))
export default Jgcarousel