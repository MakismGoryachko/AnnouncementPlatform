import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "..";
import FavouriteAnnouncementItem from "./FavouriteAnnouncementItem";

const FavouriteAnnouncementList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Form className="d-flex flex-wrap mt-2">
            {device.devices?.map(device =>
                <FavouriteAnnouncementItem key={device.id} device={device} />
            )}
        </Form>
    );
});

export default FavouriteAnnouncementList;