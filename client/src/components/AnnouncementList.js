import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "..";
import AnnouncementItem from "./AnnouncementItem";

const AnnouncementList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Form className="d-flex flex-wrap mt-2">
            {device.devices?.map(device =>
                <AnnouncementItem key={device.id} device={device} />
            )}
        </Form>
    );
});

export default AnnouncementList;