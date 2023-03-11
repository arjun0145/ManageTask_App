import React from 'react'
import Header from './Header'
import { Container, Carousel } from 'react-bootstrap'
import './Dashbord.css'
import Loginpage from './Loginpage'
import NavigationBar from './NavigationBar'
import UncontrolledExample from './UncontrolledExample'
import CountTask from './CountTask'
import Footer from './Footer'

function DashBord(props) {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className='mt-5'>
            <UncontrolledExample></UncontrolledExample>
            </Container>
            <Footer/>

        </div >
    )
}

export default DashBord
