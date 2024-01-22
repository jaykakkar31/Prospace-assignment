import React from "react";
import * as Styled from "./styled";
import { toTitleCase } from "../../utils/titleCase";
import { useNavigate } from "react-router-dom";

const CompanyWidget = ({ company, setIsModalOpen, setRemoveCompany, index }) => {
    const navigate = useNavigate();
    return (
        <Styled.WidgetWrapper>
            <Styled.HeadingWrapper>
                <Styled.BoldText>{toTitleCase(company.name)}</Styled.BoldText>
                <img
                    src="/close.svg"
                    alt=""
                    onClick={() => {
                        setIsModalOpen(true);
                        setRemoveCompany(index);
                    }}
                />
            </Styled.HeadingWrapper>
            <Styled.BodyTextWrapper
                onClick={() => {
                    navigate(`/${index}`);
                }}
            >
                <Styled.BoldText fontSize="16px">Address:</Styled.BoldText>
                <p>{company.address}</p>
                <Styled.BoldText fontSize="16px">Revenue:</Styled.BoldText>
                <p>{company.revenue}</p>
                <Styled.BoldText fontSize="16px">Phone no:</Styled.BoldText>
                <p>
                    {company.code} {company.phoneno}
                </p>
            </Styled.BodyTextWrapper>
        </Styled.WidgetWrapper>
    );
};

export default CompanyWidget;
