import React from "react";
import * as Styled from "./styled";
import { toTitleCase } from "../../utils/titleCase";
const OfficeWidget = ({ office, index, setRemoveOffice, setIsModalOpen }) => {
    return (
        <div>
            <Styled.WidgetWrapper>
                <Styled.HeadingWrapper>
                    <Styled.BoldText>
                        {toTitleCase(office.name)}
                    </Styled.BoldText>
                    <img
                        src="/close.svg"
                        alt=""
                        onClick={() => {
                            setIsModalOpen(true);
                            setRemoveOffice(index);
                        }}
                    />
                </Styled.HeadingWrapper>
                <Styled.BodyTextWrapper>
                    <Styled.BoldText fontSize="16px">Location:</Styled.BoldText>
                    <Styled.Lat>Lat - {office?.latitude}</Styled.Lat>
                    <p>Long - {office?.latitude}</p>
                    <Styled.BoldText fontSize="16px">
                        Office Start Date:
                    </Styled.BoldText>

                    <p>{office?.start_date}</p>
                </Styled.BodyTextWrapper>
            </Styled.WidgetWrapper>
        </div>
    );
};

export default OfficeWidget;
