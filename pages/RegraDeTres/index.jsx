import React from "react";

import { Container, Row, Result } from "./styles.js";

export function RegraDeTres() {
    
    return (
        <Container>
            <Row>
                <input type="number" placeholder="First Value" />
                <p>=</p>
                <input type="number" placeholder="100%" />
            </Row>
            <Row>
                <input type="number" placeholder="Second Value" />
                <p>=</p>
                <Result>
                    <span>10</span>
                </Result>
            </Row>
        </Container>
    )
}