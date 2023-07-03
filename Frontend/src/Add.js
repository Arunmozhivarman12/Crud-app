
import { Button, Container } from "react-bootstrap"
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Number, setNumber] = useState('');
    const Navigate = useNavigate();
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/user", {
          name,
          email,
          Number
        });
        Navigate('/')

      } catch (err) {
        console.log(err)
      }
  
    }
    return (
      <div  >
        <Container fluid className='bg-dark '>
          <h2 className="text-center text-light p-2" >CRUD APP</h2>
        </Container>
        <Container className='mt-5 p-3 bg-dark inputcont text-light text-center'>
          <h3>ADD EMPLOYEE</h3>
          <form onSubmit={handleSubmit}>
            <input className='m-3 p-2 input' value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder='Enter Name'></input><br></br>
            <input className='m-3 p-2 input' value={email} name="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input><br></br>
            <input className='m-3 p-2 input' value={Number} name="number" onChange={(e) => setNumber(e.target.value)} placeholder='Enter Number'></input>
            <Button className='btn-danger subbtn' type='submit'>Submit</Button>
          </form>
        </Container>
  
      </div>
    );
};


export default Add;