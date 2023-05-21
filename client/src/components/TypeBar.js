import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{ border: "1px solid grey", cursor: "pointer", backgroundColor: type.id === device.selectedType.id ? 'grey' : 'white' }}
                    active={type.id === device.selectedType.id}
                    onClick={(() => device.setSelectedType(type))}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
});

export default TypeBar;