
import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { createAnnouncement } from '../http/announcementApi';
import { Context } from '..';

const CreateAdvertisementPage = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')
    const [district, setDistrict] = useState('')
    const { device } = useContext(Context)

    const selectImage = e => {
        setImage(e.target.files[0])
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const adData = {
        
    }
    return (
        <Container className="mt-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="photo">
                    <Form.Label>Фотография</Form.Label>
                    <Form.Control
                        type="file"
                        name="photo"
                        onChange={selectImage}
                    />
                </Form.Group>
                <Form.Group controlId="title">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        onChange={setName}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Стоимость</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        onChange={setPrice}
                    />
                </Form.Group>
                <Form.Group controlId="district">
                    <Form.Label>Район</Form.Label>
                    <Form.Control
                        type="text"
                        name="district"
                        onChange={setDistrict}
                    />
                </Form.Group>
                <Form.Group controlId="category">
                    <Form.Label>Категория</Form.Label>
                    <Form.Control
                        type="text"
                        name="category"
                        onChange={setCategory}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        onChange={setDescription}
                    />
                </Form.Group>
                <Button className="mt-2" variant="btn btn-success" >
                    Добавить
                </Button>
            </Form>
        </Container>
    );
};

export default CreateAdvertisementPage;
