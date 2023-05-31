import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteFavouriteAnnouncement, getOneFavouriteAnnouncement } from '../http/announcementApi';
import { Context } from '..';
import jwt_decode from "jwt-decode";
import { BOARD_ROUTE } from '../utils/consts';


const FavouriteAnnouncementPage = () => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams();
    const formData = new FormData()
    const [image, setImage] = useState(null)
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [userId, setUserId] = useState(0)
    useEffect(() => {
        getOneFavouriteAnnouncement(id).then(data => {
            setDevice(data);
        })
    }, [id])
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token)
    const role = decoded.role

    const remove = async () => {
        deleteFavouriteAnnouncement(id)
        setTimeout(() => { navigate(BOARD_ROUTE) }, 500);
    }

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow">
                        <Card.Img variant="top" src={process.env.REACT_APP_API_URL + "/" + device.image} />
                        <Card.Body>
                            <Card.Title className="text-center mb-4">{device.name}</Card.Title>
                            <Card.Text className="mb-3">
                                <strong>Стоимость:</strong> {device.cost} р.
                            </Card.Text>
                            <Card.Text className="mb-3">
                                <strong>Район:</strong> {device.region}
                            </Card.Text>
                            <Card.Text className="mb-3">
                                <strong>Категория:</strong> {device.category}
                            </Card.Text>
                            <Card.Text className="mb-3">
                                <strong>Описание:</strong> {device.description}
                            </Card.Text>
                            <Card.Text>
                                <strong>Дата публикации:</strong> {device.publicationDate}
                            </Card.Text>
                            <Button variant='danger' onClick={remove}>Удалить из избранных</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default FavouriteAnnouncementPage;