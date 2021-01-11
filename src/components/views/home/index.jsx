import React, { Component, Fragment } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserTie } from '@fortawesome/free-solid-svg-icons'
import { 
        image ,
        hiw1,
        hiw2,
        hiw3,
        logo,
        heroImg,
        raketeroVideo
        } from "../../../images/index";

import {
    Card , 
    Col ,
    Row ,
    Button,
    Jumbotron,
    Container
} from 'react-bootstrap'

import Slider from "react-slick";

class Home extends Component {
    constructor(props){
        super(props)

        this.state = { 
           user: {
               username: '',
               password: ''
           }
    
         }

        this.handleSignIn.bind(this);
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    }

     handleSignIn = (e) =>{
        e.preventDefault()

        alert();
     }
     handleSubmit = (e) =>{
        e.preventDefault()
     }

     handleChange = (e) =>{
        e.preventDefault()


    }

    signOut() {
    // clear out user from state
    this.setState({user: null})
    }

    render() { 

        
        
        return ( 
            <Fragment>
                <div fluid className="hero-section">
                    <Container>
                      <Row>
                          <Col md={7}>

                              <div>
                                  <img src={heroImg} alt=""/>
                              </div>
                          {/* <h1>Fluid jumbotron</h1>
                            <p className="hero-text">
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p> */}
                          </Col>
                          <Col md={5}>
                                <form action="">
                                    <Row>
                                        <Col>
                                            <h1>Sign in Now</h1>
                                            <br/>
                                        <form onSubmit={this.handleSignIn}>
                                             <div className="input-group">
                                                
                                                <input type="text" className="text-field md" />
                                                <label>Username</label>
                                            </div>
                                            <div className="input-group">
                                               
                                                <input type="Password" className="text-field md"/>
                                                <label>Password</label>
                                            </div>
                                             <div className="input-group">
                                                <a href="#">Forgot password?</a>
                                            </div>
                                            <br/>
                                            <div className="input-group">
                                               
                                                <button type="button" className="btn btn-round btn-primary btn-expand md">Login</button>
                                           </div>
                                            <hr/>
                                           <div className="input-group">
                                               
                                                <button type="submit" className="btn btn-default btn-round btn-expand md">Sign in with Google</button>
                                           </div>
                                        </form>
                                        </Col>
                                    </Row>
                                </form>
                          </Col>
                      </Row>
                    </Container>
                </div>
                <br/><br/>
                <div className="hero-scroll">
                    <div className="scroll-down">
                       
                    </div>
                </div>

                <section className="">
                   <Container>
                        <Row>
                            <Col  xs={12} md={6}>

                            <div className="vid">
                                <video width="100%" height="auto" controls >
                                    <source src={raketeroVideo} type="video/mp4"/>
                                </video>
                            </div>
                            </Col>
                            <Col xs={12} md={6}>
                           
                                <div className="introduction">
                                <p>
                                <h1> Hire in minutes.</h1>
                                </p>
                                <p className="hero-text">
                                    Raketero connects you to local community of freelancers who want nothing more than to help your business succeed. Discover rated and reviewed experts for every skill imaginable — One discovery could change your business forever.
                                </p>
                                <p>
                                <Button variant="primary" size="lg">
                                    Large button
                                    </Button>
                                </p>
                                </div>
                            </Col>
                        </Row>
                        
                   </Container>
                </section>

                <section className="how-it-works">
                    <Container>
                        <div>
                            <h2 align="center">How Does it Work?</h2>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>


                        <Row>
                            <Col  xs={12} md={4}>
                                <div className="how-it-works-image">
                                    <img src={hiw1}/>
                                </div> 
                                <div>
                                    <p className="hero-text"><strong>Register</strong></p>
                                    <p className="hero-text2">We want to know you better and we welcome you to our growing network of Raketeros.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="how-it-works-image">
                                    <img src={hiw2}/>
                                </div> 
                                <div>
                                    
                                    <p className="hero-text"><strong>Verify your account</strong></p>
                                    <p className="hero-text2">The Raketero platform aims to serve you better by providing you a pool of trustworthy people and services.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="how-it-works-image">
                                    <img src={hiw3}/>
                                </div>
                                <div>
                                    
                                    <p className="hero-text"><strong>Enjoy Raketero Platform</strong></p>
                                    <p className="hero-text2" >Look for a job or offer your services! You can do both by using the Raketero platform. Mabuhay!</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section >
                  
                    <div className="feature">   
                         <div>
                            <h2 align="center" className="color-white">Feature</h2>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <Container>
                           
                            <Row class="feature-list">
                                <Col md={6}>
                                    <div>
                                        <img src={image}/>
                                    </div>
                                </Col>
                                <Col md={6} className="flex-col-center">
                                <div >
                                <Row>
                                    <Col className="feature-item" xs={6}>
                                        
                                        <Card className="bg-none">
                                            <div className="flex">
                                               <div className="icon-sm">
                                                   
                                               </div>
                                               <div className="feature-text">
                                                This is a that occupies the entire horizontal space of
                                                its parent.    
                                               </div>
                                           </div>
                                        </Card>
                                    </Col>
                                    <Col className="feature-item" xs={6}>
                                        <Card className="bg-none">
                                            <div className="flex">
                                               <div className="icon-sm">
                                                   
                                               </div>
                                               <div className="feature-text">
                                                This is a that occupies the entire horizontal space of
                                                its parent.    
                                               </div>
                                           </div>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="feature-item" xs={6}>
                                        <Card className="bg-none">
                                            <div className="flex">
                                               <div className="icon-sm">
                                                   
                                               </div>
                                               <div className="feature-text">
                                                This is a that occupies the entire horizontal space of
                                                its parent.    
                                               </div>
                                           </div>
                                        </Card>
                                    </Col>
                                    <Col className="feature-item" xs={6}>
                                        
                                        <Card className="bg-none">
                                            <div className="flex">
                                               <div className="icon-sm">
                                                   
                                               </div>
                                               <div className="feature-text">
                                                This is a that occupies the entire horizontal space of
                                                its parent.    
                                               </div>
                                           </div>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="feature-item" xs={6}>
                                        <Card className="bg-none">
                                            <div className="flex">
                                               <div className="icon-sm">
                                                   
                                               </div>
                                               <div className="feature-text">
                                                This is a that occupies the entire horizontal space of
                                                its parent.    
                                               </div>
                                           </div>
                                        </Card>
                                    </Col>
                                    <Col className="feature-item" xs={6}>
                                        
                                        <Card className="bg-none">
                                            <div className="flex">
                                               <div className="icon-sm">
                                                   
                                               </div>
                                               <div className="feature-text">
                                                This is a that occupies the entire horizontal space of
                                                its parent.    
                                               </div>
                                           </div>
                                        </Card>
                                    </Col>
                                </Row>
                                </div>
                                </Col>
                                
                            </Row>
                           
                        </Container>
                    </div> 
                </section>
                
                <section className="">
                   
                </section>
            </Fragment>
         );
    }
}
 
export default Home;