import React, { useState } from "react";
import * as Styled from "./styled";
import { Button, DatePicker, Form, Input, Select, notification } from "antd";
import { toTitleCase } from "../../utils/titleCase";
import { useOfficeData } from "../../context/officeContext";
import { useCompanyData } from "../../context/companyContext";
import moment from "moment";
const CreateCompanyForm = () => {
    const [form] = Form.useForm();
    const ctx = useOfficeData();
    const ctxCompany = useCompanyData();
    let initialValues={}

    const onFinish = (values) => {
        values.start_date = moment(values.start_date["$d"]).format(
            "MM/DD/YYYY"
        );
        ctx.setOffices({
            ...ctx.offices,
            [values?.company_name?.toUpperCase()]: [
                ...ctx?.offices[values.company_name.toUpperCase()],
                values,
            ],
        });

        openNotificationWithIcon("success");
        form.resetFields();
    };
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: "Success",
            description: "Office successfully created!",
        });
    };
    return (
        <div>
            <Styled.PageHeading>Create Office</Styled.PageHeading>
            <Form
                onFinish={onFinish}
                form={form}
                initialValues={initialValues}
                layout="vertical"
            >
                <Styled.FormItemWrapper>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the test title!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Enter Name here"
                            style={{
                                width: "400px",
                                height: "40px",
                            }}
                        />
                    </Form.Item>
                </Styled.FormItemWrapper>
                <Styled.Label>
                    <span>* </span>Location:
                </Styled.Label>

                <Styled.Row>
                    {" "}
                    <Form.Item
                        name="latitude"
                        rules={[
                            {
                                required: true,
                                message: "Latitude!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Latitude"
                            style={{
                                height: "40px",
                                marginBottom: "0px",
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="longitude"
                        rules={[
                            {
                                required: true,
                                message: "Longitude!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Longitude"
                            style={{
                                height: "40px",
                                marginBottom: "0px",
                            }}
                        />
                    </Form.Item>
                </Styled.Row>
                <Styled.FormItemWrapper>
                    <Form.Item
                        label="Office Start Date:"
                        name="start_date"
                        rules={[
                            {
                                required: true,
                                message: "Please enter office start date!",
                            },
                        ]}
                    >
                        <DatePicker
                            style={{ width: "400px", height: "40px" }}
                        />
                    </Form.Item>
                </Styled.FormItemWrapper>

                <Styled.FormItemWrapper>
                    <Form.Item
                        label="Company:"
                        name={"company_name"}
                        rules={[
                            {
                                required: true,
                                message: "Please enter the company name!",
                            },
                        ]}
                    >
                        <Select
                            style={{ height: "40px", width: "400px" }}
                            disabled={
                                ctxCompany.companies?.companies.length === 0
                            }
                            placeholder="Select Company"
                        >
                            {ctxCompany.companies?.companies?.map((item) => {
                                return (
                                    <Select.Option
                                        value={item.name.toUpperCase()}
                                    >
                                        {toTitleCase(item.name)}
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </Styled.FormItemWrapper>
                <Form.Item>
                    <Styled.BtnWrapper>
                        <Button
                            style={{ width: "400px" }}
                            type="primary"
                            htmlType="submit"
                        >
                            CREATE
                        </Button>
                    </Styled.BtnWrapper>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateCompanyForm;
