import {Form, Button, Modal, Alert, FloatingLabel} from 'react-bootstrap'
import React, {useEffect, useState} from "react";

export default function NewAccountModal(props){

  const [checkingType, setCheckingType] = useState(false);
  const [accountName, setAccountName] = useState('')
  const [savingType, setSavingType] = useState(false);
  
  const [depositAmount, setDepositAmount] = useState()
  
  const [error, setError] = useState('')
  const [userData, setUserData] = useState()
  const [updatedUserData, setUpdatedUserData] = useState()
  const userDetails = localStorage.getItem("user")

    useEffect(()=>{
        if(userDetails){
            setUserData(JSON.parse(userDetails))
        }
    },[userDetails])

  const handleCheckbox1 = e =>{
      setCheckingType(e.target.checked);
  }

  const handleCheckbox2 = e =>{
      setSavingType(e.target.checked);
  }

  function handleSubmit(e){
    e.preventDefault()

    if(savingType && checkingType){
      setError("You can only open one account at a time! Please deselect one account!")
    }else{
      const balance = parseInt(depositAmount)
      const details = {
        accountName: accountName,
        balance: depositAmount,
        checkingAccount: checkingType,
        savingAccount: savingType 
      }
      
      setUpdatedUserData({...userData, details})

      localStorage.setItem("secondaryAccount", JSON.stringify(updatedUserData));
      alert("Your new balance is $" + balance )
    }
  }

    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Open A New Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
          <h4>Set up your new account:</h4>
          <Form className="mx-3" onSubmit={handleSubmit} >
                    
                    <Form.Group className="mb-3" id="formGridCheckbox1">
                        <Form.Check type="checkbox" checked={checkingType} label="Checking Account" onChange={(event)=> {handleCheckbox1(event)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox2">
                        <Form.Check type="checkbox" checked={savingType} label="Saving Account" onChange={(event)=> {handleCheckbox2(event)}} />
                    </Form.Group>

                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Account Nickname"
                        className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Account Nickname"
                                name="deposit"
                                onChange = {(e)=>setAccountName(e.target.value)}
                                required
                                >
                             </Form.Control>
                    </FloatingLabel>
                    </Form.Group>

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
                    <Button variant="primary" type="submit">Open New Account</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}