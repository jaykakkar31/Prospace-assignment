import { styled } from "styled-components";

export const BoldText = styled.div`
    font-weight: 700;
    text-transform: ${props=>props.capatilise?"capitalize":""};
    font-family: sans-serif;
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "")};
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : "30px"};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "30px")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "26px")};
`;
export const CompanyDetailsWrapper = styled.div`
    padding: 50px;
    & > p {
        margin: 5px 0 15px 0;
    }
    @media (max-width:425px) {
        padding: 24px;
    }
`;
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    & > div {
        & > p {
            margin: 5px 0 15px 0;
        }
    }
    & > button {
        height: 40px;
        padding: 0 20px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        border-radius: 8px;
    }

    @media(max-width:425px){
        flex-direction: column;
        &>button{
            margin-top: 20px;
            width: 300px;
        }
    }
`;
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    flex-wrap: wrap;
    gap: 30px;
    padding: 50px;
    & > p {
        font-size: 18px;
        font-weight: 700;
    }
    @media (max-width: 768px) {

        padding: 24px;
        /* justify-content: center; */
        grid-template-columns: auto auto;
    }
    @media(max-width:425px){
        display: flex;
        justify-content: center;
    }
`;
export const ModalWrapper = styled.div`
    color: red !important;
    & > div {
        background-color: red;
        width: 900px !important;
        & > div {
            & > div {
                & > div {
                    & > div {
                        color: red !important;
                        & > div {
                            & > div {
                                font-size: 24px !important;
                            }
                        }
                    }
                }
            }
        }
    }
`;
