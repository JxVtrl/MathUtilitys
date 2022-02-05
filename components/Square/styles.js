import styled from 'styled-components';

export const Container = styled.div`
    width: 130px;
    height: 130px;
    background: silver;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover {
        background: ${props => props.color};
    }
`;
