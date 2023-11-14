import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Base from '../Component/Base';
import img1 from '../Images/cutm2.jpg';


export default class Privacy_Policy extends Component {
  render() {
    return (
      
      <Base>
    
      <Card className= "mt-8" body color='warning' outline>
        <CardImg alt="Card image cap" src={img1} style={{height: 370}} top width="80%"/>
          <CardBody>
          <CardTitle tag="h5"  className='text-center'>
           Privacypolicy
          </CardTitle>
          <CardText>
          
              We respect the privacy of those who visit our web site. In accordance with this, we have created this policy in order to demonstrate our privacy commitment to our users:<br></br>
            <br></br>
            <h5>What this Privacy Policy Covers</h5>

            This Privacy Policy covers our treatment of personally identifiable information that we collect when you are on our site, and when you use our services. This policy also covers our treatment of any personally identifiable information that third parties share with us.{"\n"}

            This policy does not apply to the practices of organizations that we do not own or control, or to people that we do not employ or manage.<br></br>
            <br></br>
            <h5>Information Collection and Use</h5>

            We collect personally identifiable information when you register on our website, when you use our services, and when you visit our pages. We may also receive personally identifiable information from third parties.

            When you register with us, we ask for your name, email address, zip code, occupation, industry, and personal interests. Once you register with us and sign in to our services, you are not anonymous to us.{"\n"}

            We use this information for three general purposes: to customize the content you see, to fulfill your requests for certain services, and to contact you about services.{"\n"}

            We also automatically receive and record information on our server logs from your browser including your IP address, cookie information and the page you requested. This information is not linked to your account and will not be used to identify you.<br></br>
            <br></br>
            <h5>Information Sharing and Disclosure</h5>

            We will not sell or rent your personally identifiable information to anyone.{"\n"}

            We will send personally identifiable information about you to other companies or people when

            We have your consent to share the information;{"\n"}

            We respond to subpoenas, court orders or legal process; or{"\n"}

            We find that your actions on our web sites violate the Terms of Service<br></br>
            <br></br>
            <h5>Changes to this Privacy Policy</h5>
            The privacy policy is subject to modification from time to time. If we decide to change our privacy policy, we will post those changes here so that you will always know what information we gather, how we might use that information and whether we will disclose it to anyone. {"\n"}Any significant changes to our privacy policy will be announced on our home page. If you do not agree with the changes in our policy you can simply discontinue to visit our website.<br></br>
            <br></br>
            <h5>Questions or Suggestions</h5>
            If you have questions or suggestions send an email to us.<br></br>
            <br></br>
            <h5>Communication</h5>
            You consent to receive communications from us by way of e-mails, phone calls and SMS’s with respect to your request for a call back, regarding admissions to our courses and later on with respect to reminders on various timelines. {"\n"}Users will be required to register their valid phone numbers and e-mail addresses to facilitate such communication. We may also use your e-mail address/phone number to send You updates, newsletters, changes and due dates.
            </CardText>
          </CardBody>
        </Card>
      </Base>
    )
  }
}
