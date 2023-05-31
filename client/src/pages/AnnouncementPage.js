import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createFavouriteAnnouncement, deleteAnnouncement, getOneAnnouncement } from '../http/announcementApi';
import { Context } from '..';
import jwt_decode from "jwt-decode";
import { BOARD_ROUTE, USERALLANNOUNCEMENT_ROUTE } from '../utils/consts';
import AnnouncementList from '../components/AnnouncementList';
import BasicRating from '../components/Rating';


const AnnouncementPage = () => {
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
    const [phoneNumber, setPhoneNumber] = useState('')
    const [userId, setUserId] = useState(0)
    const [ownerName, setOwnerName] = useState('')
    const [value, setValue] = React.useState(5);

    useEffect(() => {
        getOneAnnouncement(id).then(data => {
            setDevice(data);
            setPrice(data.cost);
            setName(data.name);
            setDescription(data.description);
            setRegion(data.region)
            console.log(data)
            setCategory(data.category)
            setImage(data.image)
            console.log(data.image)
            setUserId(data.userId)
            setPhoneNumber(data.phoneNumber)
        })
    }, [id])
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token)
    const role = decoded.role

    const remove = async () => {
        deleteAnnouncement(id)
        setTimeout(() => { navigate(BOARD_ROUTE) }, 500);
    }

    const favourite = async () => {
        formData.append('cost', +price)
        formData.append('image', image)
        formData.append('name', name)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('region', region)
        formData.append('userId', +userId)
        formData.append('phoneNumber', phoneNumber)
        createFavouriteAnnouncement(formData)
        setTimeout(() => { navigate(BOARD_ROUTE) }, 500);
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <Card.Img variant="top" style={{ maxHeight: '700px', borderRadius: '10px' }} src={process.env.REACT_APP_API_URL + "/" + device.image} />
                    <hr />
                    <div className='h4 fw-bold'>Описание</div>
                    <div>{device.description}</div>
                    <hr />
                    <div className='h4 fw-bold'>Похожие объявления</div>
                    <Row>
                        <Col md={20}>
                            <AnnouncementList />
                            <hr />
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <div className='h3 fw-bold'>{device.cost} р.</div>
                    <div className='h3 fw-bold'>{device.name}</div>
                    <div className='text-black-50'>Минск, {device.region}</div>
                    <div className='text-black-50'>{device.category}</div>
                    <div className='text-black-50'>{device.publicationDate}</div>
                    <hr />
                    {role === 'ADMIN' ?
                        <div>
                            <Button variant='success' style={{ width: '100%' }} onClick={favourite}>Добавить в избранное</Button>
                            <Button onClick={remove} className='mt-2' variant='danger' style={{ width: '100%' }}>Деактивировать</Button>
                        </div>
                        :
                        <Button variant='success' style={{ width: '100%' }} onClick={favourite}>Добавить в избранное</Button>
                    }
                    <hr />
                    <div className='h4 fw-bold'>О продавце</div>
                    <div>{device.ownerName}</div>
                    <div className='fw-bold'>Номер для связи: {device.phoneNumber}</div>
                    <BasicRating value={value} handleValue={setValue}/>
                    <Link to={USERALLANNOUNCEMENT_ROUTE + '/' + device.userId} style={{ textDecoration: 'none', outline: 'none', color: 'green' }}>Объявления</Link>
                </Col>
            </Row>
        </Container>
    );
};
export default AnnouncementPage;