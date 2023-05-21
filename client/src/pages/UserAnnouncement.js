import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AdvertisementPage = () => {
    const [activeAds, setActiveAds] = useState([]);
    const [pendingAds, setPendingAds] = useState([]);
    const [favoriteAds, setFavoriteAds] = useState([]);
    const [selectedButton, setSelectedButton] = useState('active');

    const handleActiveAdsClick = () => {
        setSelectedButton('active');
    };

    const handlePendingAdsClick = () => {
        setSelectedButton('pending');
    };

    const handleFavoriteAdsClick = () => {
        setSelectedButton('favorite');
    };
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Объявления</h1>
                    <div>
                        <Button
                            variant="primary"
                            onClick={handleActiveAdsClick}
                            active={selectedButton === 'active'}
                        >
                            Активные
                        </Button>{' '}
                        <Button
                            variant="primary"
                            onClick={handlePendingAdsClick}
                            active={selectedButton === 'pending'}
                        >
                            На модерации
                        </Button>{' '}
                        <Button
                            variant="primary"
                            onClick={handleFavoriteAdsClick}
                            active={selectedButton === 'favorite'}
                        >
                            Избранное
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>
                        {selectedButton === 'active' && 'Активные объявления'}
                        {selectedButton === 'pending' && 'Объявления на модерации'}
                        {selectedButton === 'favorite' && 'Избранные объявления'}
                    </h2>
                    {/* Код для отображения соответствующих объявлений */}
                </Col>
            </Row>
        </Container>
    );
};

export default AdvertisementPage;
