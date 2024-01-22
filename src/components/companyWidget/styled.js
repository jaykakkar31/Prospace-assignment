import styled from "styled-components";

export const WidgetWrapper = styled.div`
    border: 1px solid grey;
    padding: 20px;
    width: 380px;
    border-radius: 8px;
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
    cursor: pointer;
    &>p{
        margin-top: 4px;
    }
`;