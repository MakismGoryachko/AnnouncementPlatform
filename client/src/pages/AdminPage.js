import { Button, Container, Row } from 'react-bootstrap';
import { getAdvertisements, getAdvertisementsModeration, getAllAnnouncement } from '../http/announcementApi';
import React, { useContext, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Context } from '..';
import ModerationAnnouncementList from '../components/ModerationAnnouncementList';


const AdminPage = () => {
    const { device } = useContext(Context)

    useEffect(() => {
        getAllAnnouncement().then(data => device.setDevices(data))
        setTimeout(300)
    }, [])

    return (
        <Container>
            <h1 style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>Все объявления находящиеся на модерации:</h1>
            <hr/>
            <Row>
                <Col md={9}>
                <ModerationAnnouncementList />
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPage;