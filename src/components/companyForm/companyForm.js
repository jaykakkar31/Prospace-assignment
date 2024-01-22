import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { Button, Form, Input, Select, notification } from "antd";
import { useCompanyData } from "../../context/companyContext";
import { useOfficeData } from "../../context/officeContext";
import { countryCodes } from "../../utils/countrycodeList";
import { PhoneNumberUtil } from "google-libphonenumber";
import { numberValidator } from "../../utils/numberValidator";
const phoneUtil = PhoneNumberUtil.getInstance();
const CreateCompanyForm = () => {
    let initialValues={}

    const [form] = Form.useForm();
    const ctx = useCompanyData();
    const ctxOffice = useOfficeData();

    const onFinish = (values) => {
        values.revenue = Math.floor(parseFloat(values.revenue));
        ctx.setCompanies({
            ...ctx.companies,
            companies: [...ctx?.companies?.companies, values],
        });
        ctxOffice.setOffices({
            ...ctxOffice.offices,
            [values.name.toUpperCase()]: [],
        });
        openNotificationWithIcon("success");
        form.resetFields();
    };

    const isPhoneValid = (_, value) => {
        try {
            if (value === "" || value === undefined || value.length > 15)
                return Promise.reject("Please enter a valid phone no");
            else {
                let phoneNumber = form.getFieldValue("code") + value;

                if (
                    phoneUtil.isValidNumber(
                        phoneUtil.parseAndKeepRawInput(phoneNumber)
                    )
                ) {
                    return Promise.resolve();
                } else {
                    return Promise.reject("Please enter a valid phone no");
                }
            }
        } catch (error) {
            return Promise.reject("Please enter a valid phone no");
        }
    };

    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: "Success",
            description: "Company successfully created!",
        });
    };
    useEffect(() => {
        if (form) form.setFieldValue("code", "+91");
    }, []);
    return (
        <div>
            <Styled.PageHeading>Create Company</Styled.PageHeading>
            <Form
                name="myForm"
                onFinish={onFinish}
                initialValues={initialValues}
                form={form}
                layout="vertical"
            >
                <Styled.FormItemWrapper>
                    <Form.Item
                        label="Name:"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the name!",
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

                <Styled.FormItemWrapper>
                    <Form.Item
                        label="Address:"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the address!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Enter Address here"
                            style={{
                                width: "400px",
                                height: "40px",
                                marginBottom: "0px",
                            }}
                        />
                    </Form.Item>
                </Styled.FormItemWrapper>
                <Styled.FormItemWrapper>
                    <Form.Item
                        label="Revenue:"
                        name="revenue"
                        rules={[
                            {
                                required: true,
                                message: "",
                            },
                            { validator: numberValidator },
                        ]}
                    >
                        <Input
                            placeholder="Enter Revenue here"
                            style={{
                                // width: "400px",
                                height: "40px",
                                marginBottom: "0px",
                                width: "400px",
                            }}
                        />
                    </Form.Item>
                </Styled.FormItemWrapper>
                <Styled.Label>
                    <span>* </span>Phone No:
                </Styled.Label>
                <Styled.Row>
                    {" "}
                    <Form.Item
                        // label="Phone No"

                        name="code"
                        rules={[
                            {
                                required: true,
                                message: "code",
                            },
                        ]}
                    >
                        <Select
                            defaultValue="+91"
                            placeholder="Code"
                            style={{
                                height: "40px",
                            }}
                        >
                            {countryCodes.map((item) => {
                                return (
                                    <Select.Option value={item.value}>
                                        {item.label}
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        // label="Phone No"
                        name="phoneno"
                        rules={[
                            {
                                required: true,
                                message: "",
                            },
                            { validator: isPhoneValid },
                        ]}
                    >
                        <Input
                            placeholder="Enter Phone here"
                            style={{
                                height: "40px",
                                marginBottom: "0px",
                            }}
                        />
                    </Form.Item>
                </Styled.Row>
                <Form.Item>
                    <Styled.BtnWrapper>
                        <Button type="primary" htmlType="submit">
                            CREATE
                        </Button>
                    </Styled.BtnWrapper>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateCompanyForm;
