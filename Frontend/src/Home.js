import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from "react-icons/ai";



const Home = () => {
    const [user, setUser] = useState([])

    const fetchdata = async () => {
        try {
            const response = await axios.get("http://localhost:5000");
            setUser(response.data)
        } catch (err) {
            console.log(err);
        }
    }


    const DeleteId = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/del/${id}`);
            setUser(user.filter((user)=>user._id !== id))
        } catch (err) {
            console.log(err);
        }
    }       

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div>
            <Container fluid className='bg-dark '>
                <h2 className="text-center text-light p-2" >CRUD APP</h2>
            </Container>
            <Container>
                <Table bordered striped hover className="mt-5" variant='dark'>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Number</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.Number}</td>
                                <td><Button className="subbtn2 me-1"><Link className="editicon" to={`/edit/${user._id}`}><BiEdit /></Link> </Button>
                                    <Button onClick={ ()=>DeleteId(user._id)} className=" subbtn3 "><AiFillDelete /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Container className="text-center mt-5"> <Button className="btn-danger subbtn"><Link to={'/add'}>Create Employee</Link></Button></Container>
        </div>
    );
};


export default Home;