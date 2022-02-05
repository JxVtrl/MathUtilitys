import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    a {
        text-decoration: none;
        cursor: pointer;

        p {
            color: silver;
        }
    }

    a:visited {
        color: darkgray;
    }

    a:hover {
        color: gray;
    }
    
`;
