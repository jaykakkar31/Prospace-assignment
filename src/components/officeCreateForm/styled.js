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
// export const FormItemWrapper = styled.div`
//     background-color: white;

//     border-radius: 8px;
//     width: 400px;
//     padding: 0px 30px;
//     display: flex;
//     align-items: center;
//     margin-bottom: 20px;
//     & > div {
//         /* margin-bottom: 0px; */
//         margin-bottom: 0;
//         /* margin-top: 15px; */
//         & > div {
//             width: 400px;
//             & > div {
//                 height: 40px !important;
//                 & > div {
//                     height: 40px !important;
//                     & > div {
//                         height: 40px !important;
//                         & > div {
//                             height: 40px;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     &:first-child {
//         margin-top: 20px;
//     }
// `;

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
`;
export const BtnWrapper = styled.div`
    padding: 0 30px;
    & > button {
        font-weight: 600;
        font-size: 18px;
        height: 40px;
    }
`;
export const Row = styled.div`
    display: flex;
    padding: 0px 30px;
    margin-top: 6px;
    & > div {
        flex: 1;
        margin-right: 20px;
        &:last-child {
            width: 100%;
            margin-right: 0px;
        }
    }
`;
export const Label = styled.label`
    padding: 0 30px;
    & > span {
        color: #ff5b5d;
    }
`;
