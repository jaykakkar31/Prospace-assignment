import React, { useEffect, useState } from "react";
import CreateCompanyForm from "../../components/companyForm/companyForm";
import CompanyWidget from "../../components/companyWidget/companyWidget";
import CreateOfficeForm from "../../components/officeCreateForm/officeCreateForm";
import * as Styled from "./styled";
import { useCompanyData } from "../../context/companyContext";
import { Modal } from "antd";
const OverviewPage = () => {
    const ctx = useCompanyData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [removeCompany, setRemoveCompany] = useState("");
    const [companiesList, setCompaniesList] = useState([]);

    const handleOk = () => {
        const selectedCopy = Array.from(companiesList);
        selectedCopy?.splice(removeCompany, 1);
        ctx.setCompanies({
            companies: selectedCopy,
        });
        setCompaniesList(selectedCopy);
        localStorage.setItem('companies',JSON.stringify(selectedCopy))
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (ctx.companies.companies) {
            setCompaniesList(ctx.companies.companies);
        }
    }, [ctx.companies]);

    useEffect(() => {
        if (localStorage.getItem("companies")) {
            ctx.setCompanies({
                companies: JSON.parse(localStorage.getItem("companies")),
            });
        }
    }, []);
    return (
        <div>
            <Styled.ModalWrapper>
                <Modal
                    title=<Styled.BoldText
                        marginTop={"8px"}
                        marginBottom={"8px"}
                    >
                        Warning
                    </Styled.BoldText>
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Are you sure you want to remove the company</p>
                </Modal>
            </Styled.ModalWrapper>
            <Styled.TopContainer>
                <CreateCompanyForm />
                <CreateOfficeForm />
            </Styled.TopContainer>
            <hr />
            <Styled.BoldText paddingLeft="50px" marginBottom={"0"}>
                Companies
            </Styled.BoldText>
            <Styled.Wrapper>
                {ctx.companies.companies?.length > 0 ? (
                    ctx.companies.companies.map((item, index) => {
                        return (
                            <CompanyWidget
                                setRemoveCompany={setRemoveCompany}
                                setIsModalOpen={setIsModalOpen}
                                company={item}
                                index={index}
                            />
                        );
                    })
                ) : (
                    <p> There is no companies created yet.</p>
                )}
            </Styled.Wrapper>
        </div>
    );
};

export default OverviewPage;
