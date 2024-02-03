import styled from "styled-components";

export const PageHeading = styled.div`
    font-size: 26px;
    font-weight: 700;
    font-family: sans-serif;
`;
export const BoldText = styled.p`
    font-weight: 700;
    font-style: 16px;
`;
export const FormItemWrapper = styled.div`
    background-color: white;
    width: 400px;
    border-radius: 8px;
    /* width: 100%; */
    padding: 0px 30px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    & > div {
        /* display: flex; */
        /* margin-bottom: 0px; */
        margin-bottom: 0;
        margin-right: 20px;
        width: 100%;
        /* margin-top: 15px; */
        & > div {
            & > div {
                & > div {
                    & > div {
                        display: flex;
                        & > input {
                            text-transform: capitalize;
                        }
                    }
                }
            }
        }
    }
    &:first-child {
        margin-top: 20px;
    }
    @media (max-width: 425px) {
        width: 300px;
        padding: 0px;
    }
`;
export const BtnWrapper = styled.div`
    padding: 0 30px;
    & > button {
        width: 400px;
        height: 40px;
        font-weight: 600;
        font-size: 18px;
        @media (max-width: 425px) {
            width: 300px;
        }
    }
    @media (max-width: 425px) {
        padding: 0px;
        width: 300px;
    }
`;
export const Row = styled.div`
    display: flex;
    padding: 0px 30px;
    margin-top: 6px;
    & > div {
        margin-right: 20px;
        width: 100%;
        &:last-child {
            width: 100%;
            margin-right: 0px;
        }
    }
    @media (max-width: 425px) {
        padding: 0px;
        width: 300px;
        justify-content: center;
    }
`;
export const Label = styled.label`
    padding: 0 30px;

    & > span {
        color: #ff5b5d;
        margin: 0px;
    }
    @media (max-width: 425px) {
        padding: 0px;
    }
`;
export const FormWrapper=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`