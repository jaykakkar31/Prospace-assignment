// src/pages/OverviewPage.js
import React, { useEffect, useState } from "react";
import {
    BoldText,
    CompanyDetailsWrapper,
    ModalWrapper,
    Row,
    Wrapper,
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { useCompanyData } from "../../context/companyContext";
import { useOfficeData } from "../../context/officeContext";
import OfficeWidget from "../../components/officeWidget";
import { Button, Modal } from "antd";

const OverviewPage = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    let { id } = useParams();
    const ctx = useCompanyData();
    const ctxOffice = useOfficeData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [removeOffice, setRemoveOffice] = useState("");
    const [officeList, setOfficeList] = useState();

    const handleOk = () => {
        const selectedCopy = Array.from(officeList);

        selectedCopy?.splice(removeOffice, 1);
        ctxOffice.setOffices({
            [data?.name?.toUpperCase()]: selectedCopy,
        });
        setOfficeList(selectedCopy);
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (id) {
            setData(ctx.companies.companies[id]);
        }
    }, [ctx.companies.companies, id]);
    useEffect(() => {
        if (data.name && ctxOffice.offices[data?.name?.toUpperCase()]) {
            setOfficeList(ctxOffice.offices[data?.name?.toUpperCase()]);
        }
    }, [ctxOffice.offices, data?.name]);

    return (
        <div>
            <ModalWrapper>
                <Modal
                    title=<BoldText marginTop={"8px"} marginBottom={"8px"}>
                        Warning
                    </BoldText>
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Are you sure you want to remove the company office</p>
                </Modal>
            </ModalWrapper>
            {data && (
                <div>
                    <hr />
                    <BoldText marginLeft="50px" capatilise={true}>
                        {data.name}
                    </BoldText>
                    <hr />

                    <CompanyDetailsWrapper>
                        <BoldText
                            fontSize={"20px"}
                            marginTop={"0"}
                            marginBottom="0"
                        >
                            Address:
                        </BoldText>
                        <p>{data.address}</p>
                        <BoldText
                            fontSize={"20px"}
                            marginTop={"0"}
                            marginBottom="0"
                        >
                            Revenue:
                        </BoldText>
                        <p>{data.revenue}</p>
                        <Row>
                            <div>
                                {" "}
                                <BoldText
                                    fontSize={"20px"}
                                    marginTop={"0"}
                                    marginBottom="0"
                                >
                                    Phone No:
                                </BoldText>
                                <p>
                                    {data.code} {data.phoneno}
                                </p>
                            </div>
                            <Button
                                type="primary"
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Back to Overview
                            </Button>
                        </Row>
                    </CompanyDetailsWrapper>
                    <hr />
                    <Wrapper>
                        {ctxOffice?.offices[data?.name?.toUpperCase()]
                            ?.length === 0 ? (
                            <p>There are no companies created yet.</p>
                        ) : (
                            ctxOffice.offices[data?.name?.toUpperCase()]?.map(
                                (item, index) => (
                                    <OfficeWidget
                                        index={index}
                                        setRemoveOffice={setRemoveOffice}
                                        office={item}
                                        setIsModalOpen={setIsModalOpen}
                                    />
                                )
                            )
                        )}
                    </Wrapper>
                </div>
            )}
        </div>
    );
};

export default OverviewPage;
