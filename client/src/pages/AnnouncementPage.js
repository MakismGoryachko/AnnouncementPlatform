import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { getOneAnnouncement } from '../http/announcementApi';

const AnnouncementPage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams();
    useEffect(() => {
        getOneAnnouncement(id).then(data => setDevice(data))
    }, [])

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
                            <Button>Добавить в избранное</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default AnnouncementPage;