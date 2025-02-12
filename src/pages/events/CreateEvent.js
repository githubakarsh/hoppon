import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const CreateEvent = () => {
    const [formData, setFormData] = useState({});
    const submitForm = () => {
        console.log(formData)
        fetch('http://127.0.0.1:5000/create-event', 
        {method : 'POST', headers: {"Content-Type": "application/json", 'Accept' : 'application/json'} ,body: JSON.stringify(formData)})
         .then((resp) => {
            console.log(resp);
        }).catch(() => {
            console.log("Error");
        });
    };
    return <>
    <Form.Control
          placeholder="Email"
          aria-label="email"
          aria-describedby="basic-addon1"
          onChange={(event) => setFormData({
            ...formData, email: event.target.value
          })}
        />
        <Form.Control
          placeholder="Phone number"
          aria-label="phoneNumber"
          aria-describedby="basic-addon2"
          onChange={(event) => setFormData({
            ...formData,phoneNumber: event.target.value
          })}
        />
        <Form.Control
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic-addon3"
          onChange={(event) => setFormData({
            ...formData, password: event.target.value
          })}
        />
        <Form.Control
          placeholder="Reset Password"
          aria-label="resetPassword"
          aria-describedby="basic-addon4"
          onChange={(event) => setFormData({
            ...formData, resetPassword: event.target.value
          })}
        />
 <Button variant="success" onClick={() => submitForm()}>Signup</Button>
    </>;
};