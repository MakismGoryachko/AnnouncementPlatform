import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getAllUserAnnouncement, getOneUser } from '../http/announcementApi';
import AnnouncementList from '../components/AnnouncementList';


const UserAllAnnouncement = () => {
    const {device} = useContext(Context)
    const {owner} = useContext(Context)
    const {userId} = useParams()

    useEffect(() => {
        getAllUserAnnouncement(userId).then(data => device.setDevices(data))
        getOneUser(userId).then(user => device.setOwnerAnnouncement(user))
    }, [userId])

    return (
        <Container>
            <Row>
                {device.name}
            </Row>
            <Row className="mt-5">
                <Col md={9}>
                    <AnnouncementList />
                </Col>
            </Row>
        </Container>
    );
};

export default UserAllAnnouncement;