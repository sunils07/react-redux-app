import React from 'react';
import { oneOfType, array, object } from "prop-types";
import {
    Card,
    CardBody
} from 'reactstrap';

import "./app-card.scss";

export default function AppCard({ children }) {

    return (
        <Card className="app-card">
            <CardBody>
                {children}
            </CardBody>
        </Card>
    );
}

AppCard.propTypes = {
    children: oneOfType([array, object]).isRequired
};