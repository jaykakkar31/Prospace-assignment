import styled from "styled-components";

export const WidgetWrapper = styled.div`
    border: 1px solid grey;
    padding: 20px;
    width: 380px;
    border-radius: 8px;
    @media (max-width: 1024px) {
        width: 245px;
    }
    @media (max-width: 768px) {
        width: 300px;
    }
    @media (max-width: 425px) {
        width: 280px;
    }
    @media (max-width: 325px) {
        width: 240px;
    }
`;
export const BoldText = styled.div`
    font-weight: 700;
    font-family: sans-serif;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "22px")};
    max-width: 280px;
    word-wrap: break-word;
    @media (max-width: 1024px) {
        width: 210px;
    }
    @media (max-width: 425px) {
        width: 250px;
    }
    @media (max-width: 325px) {
        width: 200px;
    }
`;
export const HeadingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    align-items: baseline;
    & > img {
        cursor: pointer;
    }
`;
export const BodyTextWrapper = styled.div`
    padding-top: 20px;
    cursor: pointer;
    width: 280px;
    word-wrap: break-word;
    & > p {
        margin-top: 4px;
    }
    @media (max-width: 1024px) {
        width: 210px;
    }
    @media (max-width: 425px) {
        width: 250px;
    }
    @media (max-width: 325px) {
        width: 200px;
    }
`;
