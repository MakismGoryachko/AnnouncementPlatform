import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";


const BrandBar = observer( () => {
    const {device} = useContext(Context)

    return (
        <Form className="d-flex flex-row flex-wrap">
            {device.brands.map(brand =>
                <Card
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                style={{cursor: "pointer"}}
                active={brand.id === device.selectedBrand.id}
                onClick={(() => device.setSelectedBrand(brand))}
                key={brand.id}
                className="p-3"
                >
                    {brand.name}
                </Card>
            )}
      </Form>
    )
});

export default BrandBar;