import React from "react";
import { useApp } from '../../context/Context';
import { Container, Content } from "./styles.js";
import { RegraDeTres } from "../RegraDeTres";
import { Square } from '../../components/Square';

export function Main() {
    const { pageSelected, setPageSelected, pages } = useApp();
    return (
        <Container>
            <Content>
                {pageSelected === undefined && (
                    pages.map(page => {
                        return (
                            <Square
                                page={page}
                                pages={pages}
                                setPageSelected={setPageSelected}
                                pageSelected={pageSelected}
                            />
                        )
                    })
                )}

            </Content>
        </Container>
    )
}