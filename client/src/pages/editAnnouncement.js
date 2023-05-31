import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Button, Dropdown } from 'react-bootstrap';
import { getOneAnnouncement, updateAnnouncement } from '../http/announcementApi';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { BOARD_ROUTE } from '../utils/consts';
import { useNavigate, useParams } from 'react-router-dom';

const EditAdvertisementPage = observer(() => {
    const navigate = useNavigate()
    const { device } = useContext(Context)
    const [image, setImage] = useState(device.image)
    const formData = new FormData()
    const [price, setPrice] = useState(device.cost)
    const [name, setName] = useState(device.name)
    const [region, setRegion] = useState(device.region)
    const [category, setCategory] = useState(device.category)
    const [description, setDescription] = useState(device.description)
    const { id } = useParams();
    useEffect(() => {
        getOneAnnouncement(id).then(data => {
            setPrice(data.cost);
            setName(data.name);
            setDescription(data.description);
            setRegion(data.region)
            setCategory(data.category)
        });
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        formData.append('cost', +price)
        formData.append('image', image)
        formData.append('name', name)
        formData.append('description', description)
        if (category !== device.selectedType.name) {
            formData.append('category', device.selectedType.name)
        }
        else {
            formData.append('category', category)
        }
        if (region !== device.selectedBrand.name) {
            formData.append('region', device.selectedBrand.name)
        }
        else {
            formData.append('region', region)
        }
        updateAnnouncement(formData, id);
        setTimeout(() => { navigate(BOARD_ROUTE) }, 500);

    };

    const handleFileSelect = (event) => {
        const files = event.target.files;
        setImage(files[0]);
    };
    
    return (
        <Container className="mt-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="photo">
                    <Form.Label>Фотография</Form.Label>
                    <Form.Control
                        onInput={handleFileSelect}
                        value={image}
                        type="file"
                        name="image"
                    />
                </Form.Group>
                <Form.Group controlId="title">
                    <Form.Label>Название</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Стоимость</Form.Label>
                    <Form.Control
                        type="number"
                        name="cost"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </Form.Group>
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>{device.selectedBrand.name || region}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-3">
                    <Dropdown.Toggle>{device.selectedType.name || category}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Group controlId="description">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Group>
                <Button className="mt-2" variant="btn btn-success" type="submit">
                    Сохранить
                </Button>
            </Form>
        </Container>
    );
});

export default EditAdvertisementPage;