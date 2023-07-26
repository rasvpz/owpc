import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import { Form, Row, Col } from 'react-bootstrap';
import '../Screens/Navstyle.css';

function Intro() {
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>

<div class="introContainer">
  <img
    alt=""
    src="/assets/Adam_OWPC_Web-01.png"
    width="800"
    className="d-inline-block align-top"
    style={{
      display: 'inline-block',
      marginTop: '-100px',
      border: '1px solid #f5eb54',
      borderRadius: '100px',
      overflow: 'hidden', // Ensure the image doesn't go outside the container
      cursor: 'pointer'
    }} />
</div>
<table width={'100%'} style={{marginTop:'-150px'}}>
    <tr>
        <td align='right'>

        <img
          alt=""
          src="/assets/Adam_OWPC_Web-02.png"
          width="90"
          className="d-inline-block align-top"
          style={{marginTop: '-100px',marginRight:'4px', cursor:'pointer'}} />

        </td>
        <td>


        <img
          alt=""
          src="/assets/Adam_OWPC_Web-03.png"
          width="90"
          className="d-inline-block align-top"
          style={{marginTop: '-100px',marginLeft:'4px',  cursor:'pointer'}} 
          onClick={handleModalOpen}
          />
    
    </td>
    </tr>
</table>

<Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title><span style={{color:'#F5E746'}}>.~ </span> Please register with OWPC</Modal.Title>
        </Modal.Header>



        <Modal.Body>
          <Container>
            <Row>
              <Col xs={4} className="pr-0">
                <Form.Label>dob</Form.Label>
                  <Form.Control size="sm" type="text" />
              </Col>
              <Col xs={4} className="pr-0">
              <Form.Label>Address</Form.Label>
                  <Form.Control size="sm" type="text" />
              </Col>
              <Col xs={4} className="pr-0">
              <Form.Label>Pin</Form.Label>
                  <Form.Control size="sm" type="text" />
              </Col>
            </Row>
        </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button className='submitBtnFooter' onClick={handleModalClose}>
            Submit
          </Button>
        <Button className='closeBtnFooter' onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Intro;