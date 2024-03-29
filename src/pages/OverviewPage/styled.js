import { styled } from "styled-components";

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px;
    /* width: fit-content; */

    @media (max-width:850px) {
        flex-direction: column;
    }
    @media (max-width: 425px) {
        padding :25px ;
        justify-content: center;
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
        margin: 0;
    }
    @media (max-width: 850px) {

        padding: 24px;
        /* justify-content: center; */
        grid-template-columns: auto auto;
    }
    @media(max-width:425px){
        display: flex;
        justify-content: center;
    }
`;
export const BoldText = styled.div`
    font-weight: 700;
    font-family: sans-serif;
    /* margin: 30px 0; */
    padding-left: ${(props) => props.paddingLeft};
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : "30px"};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : "30px")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "26px")};
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
