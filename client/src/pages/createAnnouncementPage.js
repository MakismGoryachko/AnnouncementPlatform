import React, { useContext, useState } from 'react';
import { Container, Form, Button, Dropdown } from 'react-bootstrap';
import { createAnnouncement } from '../http/announcementApi';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { BOARD_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const CreateAdvertisementPage = observer(() => {
    const navigate = useNavigate()
    const { device } = useContext(Context)
    const [image, setImage] = useState(null)
    const formData = new FormData()
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [type, setType] = useState('')
    const [region, setRegion] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);

    const data = [
        {
            id: 1,
            title: "Авто и транспорт",
            subs: [
                {
                    id: 2,
                    title: "Легковые авто"
                },

                {
                    id: 3,
                    title: "Грузовики и автобусы"
                },
            ]
        },

        {
            id: 4,
            title: "Бытовая техника",
            subs: [
                {
                    id: 5,
                    title: "Техника для кухни"
                },

                {
                    id: 6,
                    title: "Техника для уборки"
                },
            ]
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryHover = (categoryId) => {
        const category = data.find(item => item.id === categoryId);
        setSelectedCategory(category);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.append('cost', +price)
        formData.append('image', image)
        formData.append('name', name)
        formData.append('description', description)
        formData.append('category', type)
        formData.append('region', region)
        formData.append('phoneNumber', phoneNumber)
        createAnnouncement(formData);
        setTimeout(() => { navigate(BOARD_ROUTE) }, 500);

    };


    const handleFileSelect = (event) => {
        const files = event.target.files;
        setSelectedImage(URL.createObjectURL(files[0]));
        setImage(files[0]);
    };

    return (
        <Container className="mt-4">
            <h2>Подача объявления</h2>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="photo">
                    <Form.Label className='fw-bold mt-4'>Фотография</Form.Label>
                    <Form.Control
                        style={{ width: '320px' }}
                        onInput={handleFileSelect}
                        type="file"
                        name="image"
                    />
                </Form.Group>
                {selectedImage && (
                    <img className='mt-2' src={selectedImage} alt="Selected" style={{ width: '600px', height: 'auto' }} />
                )}
                <Form.Group controlId="title">
                    <Form.Label className='fw-bold mt-4'>Название товара/услуги</Form.Label>
                    <Form.Control
                        style={{ width: '600px' }}
                        placeholder="Например, телевизор Horizont"
                        type="text"
                        name="name"
                        maxLength={20}
                        onChange={(event) => setName(
                            event.target.value
                        )}
                    />
                </Form.Group>
                <div className="text-black-50">{name.length} из 20 знаков</div>
                <div className='fw-bold mt-4 mb-2'>Выбор категории</div>
                <div style={{ display: 'flex' }}>
                    <Form.Group
                        controlId="category"
                        style={{
                            width: '600px',
                            border: '1px solid #D3D3D3',
                            borderRadius: '10px',
                            flexGrow: 1,
                        }}
                        className="mr-2"
                    >
                        <div style={{ display: 'flex' }}>
                            <ul style={{ flex: '1 1 0' }}>
                                {data.map(category => (
                                    <li className='mt-2'
                                        key={category.id}
                                        onMouseEnter={() => handleCategoryHover(category.id)
                                        }
                                        style={{
                                            whiteSpace: 'nowrap',
                                            cursor: 'pointer',
                                            backgroundColor: 'transparent',
                                            transition: 'background-color 0.3s ease',
                                            listStyleType: 'none'
                                        }}
                                    >
                                        {category.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Form.Group>
                    <Form.Group
                        controlId="category1"
                        style={{
                            width: '600px',
                            border: '1px solid #D3D3D3',
                            borderRadius: '10px',
                            flexGrow: 0,
                        }}
                        className="mr-2"
                    >
                        <div style={{ display: 'flex' }}>
                            {selectedCategory && (
                                <ul style={{ flex: '0 0 auto' }}>
                                    {selectedCategory.subs.map(sub => (
                                        <li className='mt-1'
                                            key={sub.id}
                                            style={{
                                                whiteSpace: 'nowrap',
                                                cursor: 'pointer',
                                                backgroundColor: 'transparent',
                                                transition: 'background-color 0.3s ease',
                                                listStyleType: 'none'
                                            }}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#f1f1f1')}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                                        >
                                            {sub.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </Form.Group>
                </div>
                <Form.Group controlId="description">
                    <Form.Label className='fw-bold mt-4'>Описание</Form.Label>
                    <Form.Control
                        style={{ width: '600px', height: '200px' }}
                        as="textarea"
                        name="description"
                        maxLength={250}
                        onChange={(event) => setDescription(
                            event.target.value
                        )}
                    />
                </Form.Group>
                <div className="text-black-50">{description.length} из 250 знаков</div>
                <Form.Group controlId="number">
                    <Form.Label className='fw-bold mt-4'>Номер телефона для связи</Form.Label>
                    <Form.Control
                        style={{ width: '600px' }}
                        placeholder="Например: +375291112233"
                        type="tel"
                        name="cost"
                        onChange={(event) => setPhoneNumber(
                            event.target.value
                        )}
                    />
                </Form.Group>
                <hr />
                <Form.Group controlId="price">
                    <Form.Label className='fw-bold mt-3 h4'>Цена</Form.Label>
                    <Form.Control
                        style={{ width: '600px' }}
                        placeholder="Например: 20"
                        type="number"
                        name="cost"
                        onChange={(event) => setPrice(
                            event.target.value
                        )}
                    />
                </Form.Group>
                <hr className='mt-5' />
                <h4 className='fw-bold mt-4'>Местоположение товара / услуги</h4>
                <div className='fw-bold mt-3'>Область</div>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle variant='outline-dark' style={{ width: '600px', textAlign: 'left' }}>{region || "Вся Беларусь"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item onClick={() => setRegion(brand.name)} key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <div className='fw-bold mt-3'>Город / район</div>
                <Dropdown className="mt-3">
                    <Dropdown.Toggle variant='outline-dark' style={{ width: '600px', textAlign: 'left' }}>{type || "Выберите категорию"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item onClick={() => setType(type.name)} key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Button className="mt-2" variant="btn btn-success" type="submit" style={{ width: '600px' }}>
                    Подать объявление
                </Button>
                <hr />
            </Form>
        </Container>
    );
});

export default CreateAdvertisementPage;
