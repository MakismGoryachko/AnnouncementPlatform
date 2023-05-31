import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import { FAVOURITEANNOUNCEMENTPAGE_ROUTE } from "../utils/consts";

const FavouriteAnnouncementItem = ({ device }) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className="mt-3" onClick={() => navigate(FAVOURITEANNOUNCEMENTPAGE_ROUTE + "/" + device.id)}>
            <Card style={{ width: 230, cursor: 'pointer' }} border={"light"}>
                <Image width={230} height={150} src={process.env.REACT_APP_API_URL + "/" + device.image} />
                <div className="mt-1 ms-2">
                    <div className="h5">{device.cost} р.</div>
                    <div className="h6">{device.name}</div>
                    <div className="text-black-50">{device.region}</div>
                </div>
            </Card>
        </Col>
    );
};

export default FavouriteAnnouncementItem;