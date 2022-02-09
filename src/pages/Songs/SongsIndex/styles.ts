import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: #f5f5f5;
`;
export const WrapperSearch = styled.div`
    display: flex;
    align-items: center;

    width: 95%;
    max-width: 400px;

    padding: 7px;
    margin: 15px 0;

    background: #fff;

    border-radius: 30px;
    border: 1px solid #ddd;

    input {
        width: 100%;

        background: transparent;
        font-size: 17px;

        margin-left: 7px;
    }

    img {
        filter: invert(98%) sepia(2%) saturate(131%) hue-rotate(239deg) brightness(114%) contrast(73%);
    }
`;
export const WrapperSongs = styled.div`
    width: 95%;
    max-width: 800px;

    background-color: #fff;
    border-radius: 7px;
`;
export const Song = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #ddd;

    transition: 0.2s;
    cursor: pointer;

    padding: 15px 20px;

    :hover {
        background-color: #edf3fd;
    }

    span {
        color: #9a9a9a;
        font-weight: bold;
        font-size: 12px;
    }
`;
export const WrapperTitle = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 70px;
        height: 70px;
    }

    > p {
        margin-left: 11px;
        font-weight: 400;
        font-size: 20px;
    }
`;
