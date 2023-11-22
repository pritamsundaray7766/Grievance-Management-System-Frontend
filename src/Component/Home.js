import { Card, CardBody,CardImg, CardText, CardTitle, Col, Row} from 'reactstrap';
import img1 from '../Images/cutm2.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import Base from './Base';
export default function Home() {
  return (
    
    <Base>
      
      <div>
        <h2 className='text-lg-center fw-bold font'> WELCOME TO GRIEVANCE MANAGEMENT SYSTEM </h2>
      <img src={img1} className="img-fluid" alt="Can't Load Item"></img>
      </div>
            <Row>
            
              <Col sm='4'>
               <Card body color="info" className=' card text-center ms-2' outline style={{width: '25rem'}}> 
                  <CardBody>
                      <CardTitle tag="h5" >
                          Grievance Management:
                      </CardTitle>
                </CardBody>
            <CardImg alt="Card image cap" src={img3} top ></CardImg>
               <CardBody>
                <CardText>
                 We create an environment where individuals feel heard, valued, and respected.    
                 </CardText>
                </CardBody>
              </Card>
              </Col>
              <Col sm='4'>
               <Card body color="info" className='card text-center ms-2' outline style={{width: '25rem'}}> 
                  <CardBody>
                      <CardTitle tag="h5" >
                          Grievance Management:
                      </CardTitle>
                </CardBody>
            <CardImg alt="Card image cap" src={img3} top ></CardImg>
               <CardBody>
                <CardText>
                 We create an environment where individuals feel heard, valued, and respected.    
                 </CardText>
                </CardBody>
              </Card>
              </Col>
                    <Col sm='4'>
                    <Card body color="info" className='card text-center ms-2' outline style={{width: '25rem'}}> 
                      <CardBody>
                          <CardTitle tag="h5">
                             Non-Ragging Pledge:
                         </CardTitle>
                      </CardBody>
                <CardImg alt="Card image cap" src={img2} top ></CardImg>
                  <CardBody>
                      <CardText>
                       We promote healthy interactions, mutual respect within our campus community.
                      </CardText>
                  </CardBody>
          </Card>
          </Col>
    </Row>


    </Base>
  )
}
