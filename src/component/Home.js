import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table, ProgressBar, Card, CardImg, Image, Modal, ModalDialog, ModalBody} from 'react-bootstrap';
import {FaGoogle, FaInstagram, FaGithub, FaFacebook}from 'react-icons/fa'


const Home= () => {
  useEffect (() => {
    Aos.init({duration: 2000})
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <body>
    <div>
     <div className='d-flex flex-row justify-content-center headerContent' data-aos="fade-zoom-out">
       <div className='d-flex flex-column text'>
        <div className='textHeader responsive-font-30'>
        Hello
        </div>
        <div className='textHeader2 responsive-font-40'>I'am Hilmi, <br />
        FullStack Web Developer
        </div>
        <div className='textHeader responsive-font-30'>Lorem Ipsum Dot Amet Lorem Ipsum Dot Amet <br />
        Lorem Ipsum Dot Amet <br />
        Lorem Ipsum Dot Amet</div>
        <Button variant="outline-dark" className='Button'>
          <Nav.Link href='/' className='Link'>Download CV</Nav.Link>
        </Button>
       </div>
        <img 
        src='https://www.shareicon.net/data/2016/01/24/708382_people_512x512.png'
        className='img-fluid shadow-2-strong responsive-image Logo'
        alt=''
        />
     </div>
     <div className='d-flex justify-content-center'>
      <div className='Hr'></div>
     </div>
     <div className='d-flex flex-column justify-content-center align-items-center' style={{marginTop: 30}} data-aos='fade-zoom-out' >
      <div className='d-flex header-Skill responsive-font-40' data-aos="fade-zoom-out">SKILL</div>
      <div className='d-flex flex-row headerContent justify-content-center' data-aos="fade-up">
        <div className='d-flex flex-column text-Skill'>
          <div className='responsive-font-30'>MongoDB</div>
        </div>
        <div className='align-self-center'>
          <ProgressBar animated now={85} style={{width: 300, height: 25, marginLeft: 16}}  visuallyHidden/>
        </div>
      </div>
      <div className='d-flex flex-row headerContent justify-content-center' data-aos="fade-up">
        <div className='d-flex flex-column text-Skill'>
          <div className='responsive-font-30'>Javascript</div>
        </div>
        <div className='align-self-center'>
          <ProgressBar animated now={90} style={{width: 300, height: 25, marginLeft: 15}}  visuallyHidden/>
        </div>
      </div>
      <div className='d-flex flex-row headerContent justify-content-center' data-aos="fade-up">
        <div className='d-flex flex-column text-Skill'>
          <div className='responsive-font-30'>ExpressJS</div>
        </div>
        <div className='align-self-center'>
          <ProgressBar animated now={80} style={{width: 300, height: 25, marginLeft: 9}}  visuallyHidden/>
        </div>
      </div>
     </div>
     <div className='d-flex justify-content-center'>
      <div className='Hr'></div>
     </div>
     <div style={{justifyContent: 'space-evenly', marginLeft: 350, marginRight: 300, marginTop: 30}} className='d-flex flex-column'>
       <div className='headerProject' data-aos="fade-zoom-out">PROJECTS</div>
       <div className='d-flex flex-row' style={{marginBottom: 10}}>
        {/* <div className='card'>
          <img src={require('./image/1.png')} className='img-thumbnail'/>
        </div> */}
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082'}}  data-aos="fade-right" className='card'> 
          <Card.Img variant="top" src={require('./image/1.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Splash Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-zoom-in">
          <Card.Img variant="top" src={require('./image/2.png')} className='cardImage' />
          <Card.Body className='cardBody'>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Landing Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-left">
          <Card.Img variant="top" src={require('./image/3.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Login Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
       </div>
       <div className='d-flex flex-row' style={{marginBottom: 10}}>
        {/* <div className='card'>
          <img src={require('./image/1.png')} className='img-thumbnail'/>
        </div> */}
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-right">
          <Card.Img variant="top" src={require('./image/1.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Splash Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-zoom-in">
          <Card.Img variant="top" src={require('./image/2.png')} className='cardImage' />
          <Card.Body className='cardBody'>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Landing Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-left">
          <Card.Img variant="top" src={require('./image/3.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Login Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
       </div>
       <div className='d-flex flex-row' style={{marginBottom: 10}}>
        {/* <div className='card'>
          <img src={require('./image/1.png')} className='img-thumbnail'/>
        </div> */}
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-right">
          <Card.Img variant="top" src={require('./image/1.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Splash Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-zoom-in">
          <Card.Img variant="top" src={require('./image/2.png')} className='cardImage' />
          <Card.Body className='cardBody'>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Landing Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-left">
          <Card.Img variant="top" src={require('./image/3.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Login Screen
              SILK Application
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
       </div>
     </div>
     <div className='d-flex justify-content-center'>
      <div className='Hr'></div>
     </div>
     <div style={{justifyContent: 'space-evenly', marginLeft: 350, marginRight: 300, marginTop: 30}} className='d-flex flex-column'>
       <div className='headerProject' data-aos="fade-zoom-out">TESTIMONIAL</div>
       <div className='d-flex flex-row' style={{marginBottom: 10}}>
        {/* <div className='card'>
          <img src={require('./image/1.png')} className='img-thumbnail'/>
        </div> */}
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082'}}  data-aos="fade-right" className='card'> 
          <Card.Img variant="top" src={require('./image/1.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Splash Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-zoom-in">
          <Card.Img variant="top" src={require('./image/2.png')} className='cardImage' />
          <Card.Body className='cardBody'>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Landing Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-left">
          <Card.Img variant="top" src={require('./image/3.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Login Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
       </div>
       <div className='d-flex flex-row' style={{marginBottom: 10}}>
        {/* <div className='card'>
          <img src={require('./image/1.png')} className='img-thumbnail'/>
        </div> */}
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-right">
          <Card.Img variant="top" src={require('./image/1.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Splash Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-zoom-in">
          <Card.Img variant="top" src={require('./image/2.png')} className='cardImage' />
          <Card.Body className='cardBody'>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Landing Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-left">
          <Card.Img variant="top" src={require('./image/3.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Login Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
       </div>
       <div className='d-flex flex-row' style={{marginBottom: 10}}>
        {/* <div className='card'>
          <img src={require('./image/1.png')} className='img-thumbnail'/>
        </div> */}
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-right">
          <Card.Img variant="top" src={require('./image/1.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Splash Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-zoom-in">
          <Card.Img variant="top" src={require('./image/2.png')} className='cardImage' />
          <Card.Body className='cardBody'>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Landing Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', marginRight: 30, backgroundColor: '#270082' }} data-aos="fade-left">
          <Card.Img variant="top" src={require('./image/3.png')} className='cardImage' />
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Mobile Project</Card.Title>
            <Card.Text style={{color: 'white'}}>
              Login Screen
              SILK Application
            </Card.Text>
            
          </Card.Body>
        </Card>
       </div>
     </div>
     <div className='d-flex justify-content-center'>
      <div className='Hr'></div>
     </div>
     <div style={{marginTop: 30}} className='d-flex flex-column justify-content-center'>
       <div className='headerAbout' data-aos="fade-zoom-out">
         About Me
       </div>
       <div className='contentAbout' data-aos="fade-zoom-out">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
       Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. <br />
       Augue interdum velit euismod in pellentesque massa placerat duis.
       </div>
       <Button variant="outline-dark" className='buttonHire align-self-center' onClick={handleShow}>
         Hire Me
       </Button>
     </div>
     <div className='footer d-flex justify-content-evenly'>
       <div className='d-flex flex-row align-self-center'>
          <Nav.Link href='#'><FaGoogle size={40} color={'white'} style={{marginRight: 20}} /></Nav.Link>
          <Nav.Link href='#'><FaInstagram size={40} color={'white'} style={{marginRight: 20}} /></Nav.Link>
          <Nav.Link href='#'><FaFacebook size={40} color={'white'} style={{marginRight: 20}}  /> </Nav.Link>
          <Nav.Link href='#'><FaGithub size={40} color={'white'} style={{marginRight: 20}} /></Nav.Link >
       </div>
     </div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='align-self-center'
      >
        <Modal.Header closeButton>
          <Modal.Title>Hire Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Adress" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Messege</Form.Label>
            <Form.Control type="text" placeholder="Your Messege"/>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>Send</Button>
        </Modal.Footer>
      </Modal>
   </div>
  </body>
  );
}
export default Home;