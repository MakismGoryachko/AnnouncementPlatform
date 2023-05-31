import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "..";
import ModerationAnnouncementItem from "./ModerationAnnouncementItem";

const ModerationAnnouncementList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Form className="d-flex flex-wrap mt-2">
            {device.devices?.map(device =>
                <ModerationAnnouncementItem key={device.id} device={device} />
            )}
        </Form>
    );
});

export default ModerationAnnouncementList;