import React, { useState } from "react";
import { useApp } from '../../context/Context';
import { Container } from "./styles";

export function Square({ page, pages, setPageSelected, pageSelected }) {
    return (
        <Container onClick={()=> setPageSelected(pages.indexOf(page))}>
            <p>{page}</p>
        </Container>
    )
}