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
`;
export const BoldText = styled.div`
    font-weight: 700;
    font-family: sans-serif;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "22px")};
`;
export const HeadingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    & > img {
        cursor: pointer;
    }
`;
export const BodyTextWrapper = styled.div`
    padding-top: 20px;
    & > p {
        margin-top: 5px;
    }
`;
export const Lat = styled.p`
    margin: 0px;
`;
