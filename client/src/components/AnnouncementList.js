import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Context } from "..";
import AnnouncementItem from "./AnnouncementItem";
import { BsSearch } from 'react-icons/bs';

const AnnouncementList = observer(() => {
    const { device } = useContext(Context)
    const [searchTerm, setSearchTerm] = useState('');
    console.log(Object.keys(device.selectedBrand).length)
    const generateList = () => {
        if (Object.keys(device.selectedBrand).length !== 0 && Object.keys(device.selectedType).length !== 0) {
            return device.devices
                .filter((item) => item.region === device.selectedBrand.name && item.category === device.selectedType.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(device => <AnnouncementItem key={device.id} device={device} />);
        } else if (Object.keys(device.selectedBrand).length !== 0) {
            return device.devices
                .filter((item) => item.region === device.selectedBrand.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(device => <AnnouncementItem key={device.id} device={device} />);
        } else if (Object.keys(device.selectedType).length !== 0) {
            return device.devices
                .filter((item) => item.category === device.selectedType.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(device => <AnnouncementItem key={device.id} device={device} />);
        } else {
            return device.devices
                .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(device => <AnnouncementItem key={device.id} device={device} />);
        }
    };

    const generatedList = generateList()
    return (
        <Form className="d-flex flex-wrap mt-2">
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Искать товары"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-light"
                />
                <Button
                    variant="outline-secondary"
                    disabled
                    className="bg-light">
                    <BsSearch />
                </Button>
            </InputGroup>
            {generatedList}
        </Form>
    );
});

export default AnnouncementList;