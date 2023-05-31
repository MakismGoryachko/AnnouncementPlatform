import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteAnnouncement, getOneAnnouncement } from '../http/announcementApi';
import { BOARD_ROUTE, EDITANNOUNCEMENT_ROUTE } from '../utils/consts';

const UserAnnouncementPage = () => {
    const navigate = useNavigate()
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams();

    useEffect(() => {
        getOneAnnouncement(id).then(data => setDevice(data))
    }, [id])

    const remove = async () => {
        deleteAnnouncement(id)
        setTimeout(() => { navigate(BOARD_ROUTE) }, 500);
    }

    const handleEdit = () => {
        navigate(`${EDITANNOUNCEMENT_ROUTE}/${id}`);
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
                            <Button variant='danger' onClick={remove}>Деактивировать</Button>
                            <Button className="ms-2" onClick={handleEdit}>Редактировать</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserAnnouncementPage;
