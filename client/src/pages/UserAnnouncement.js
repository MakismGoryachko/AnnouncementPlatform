import { Button, Container, Row } from 'react-bootstrap';
import { getAdvertisements, getAdvertisementsModeration, getFavourite } from '../http/announcementApi';
import React, { useContext, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import UserAnnouncementList from '../components/UserAnnouncementList';
import { Context } from '..';
import ModerationAnnouncementList from '../components/ModerationAnnouncementList';
import FavouriteAnnouncementList from '../components/FavouriteAnnouncementList';


const AdvertisementsPage = () => {
    const { device } = useContext(Context)
    const [activeList, setActiveList] = useState(0)
    useEffect(() => {
        getAdvertisements().then(data => device.setDevices(data))
    }, [])

    const moderation = async () => {
        getAdvertisementsModeration().then(data => device.setDevices(data))
    }

    const active = async () => {
        getAdvertisements().then(data => device.setDevices(data))
    }

    const favourite = async () => {
        getFavourite().then(data => device.setDevices(data))
    }

    const changesLists = async (callBack, count) => {
        await callBack()
        setActiveList(count)
    }
    return (
        <Container>
            <Row className="mt-5" md={3}>
                <Button className='mt-2' variant={"outline-dark"} style={{ width: '400px' }} onClick={() => changesLists(active, 0)}>Активные</Button>
                <Button className='mt-2 ms-1 w-10' variant={"outline-dark"} style={{ width: '400px' }} onClick={() => changesLists(moderation, 1)}>На модерации</Button>
                <Button className='mt-2 ms-1 w-10' variant={"outline-dark"} style={{ width: '400px' }} onClick={() => changesLists(favourite, 2)}>Избранное</Button>
                <Col md={9}>
                    {activeList === 0 ?
                        <UserAnnouncementList />
                        :
                        activeList === 1 ?
                            <ModerationAnnouncementList />
                            :
                            activeList === 2 ?
                            <FavouriteAnnouncementList />
                            :
                            <></>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default AdvertisementsPage;