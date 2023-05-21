import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/RegionBar';
import AnnouncementList from '../components/AnnouncementList';
import { Context } from '..';
import { getAllAnnouncement } from '../http/announcementApi';

const Board = () => {
    const {device} = useContext(Context)
    
    useEffect(() => {
        getAllAnnouncement().then(data => device.setDevices(data))
    }, [])
    return (
        <Container>
            <Row className="mt-5">
                <Col md={3}>
                    <TypeBar />
                </Col>

                <Col md={9}>
                    <BrandBar />
                    <AnnouncementList />
                </Col>
            </Row>
        </Container>
    );
};


export default Board;