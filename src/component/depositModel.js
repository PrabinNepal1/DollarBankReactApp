import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap'
import React, {useEffect, useState} from "react";

export default function DepositModal(props) {

    const[userData, setUserData] = useState()
    const [depositAmount, setDepositAmount] = useState()
    const userDetails = localStorage.getItem("user")

    useEffect(()=>{
        if(userDetails){
            setUserData(JSON.parse(userDetails))
        }
    },[userDetails])

    function handleSubmit(){
        const balance = parseInt(userData.balance) + parseInt(depositAmount)
        userData['balance'] = balance
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Your new balance is $" + balance )
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Deposit Amount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter the amount to deposit:</h4>
          <Form className="mx-3" onSubmit={handleSubmit} >
                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Deposit Amount"
                        className="mb-3">
                            <Form.Control
                                type="number"
                                min="1"
                                placeholder="Deposit Amount"
                                name="deposit"
                                onChange = {(e)=>setDepositAmount(e.target.value)}
                                required
                                >
                             </Form.Control>
                    </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit">Deposit</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }