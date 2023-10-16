"use client";

import { loginUser } from "@/api/auth/login";
import theme from "@/theme/themeConfig";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Tag,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";

const { Text } = Typography;

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean }
) => (
  <>
    {label}
    {required ? <Text style={{ color: "red" }}> *</Text> : null}
  </>
);

const LoginPage = () => {
  const [form] = Form.useForm();

  const router = useRouter();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState<Error | false>(false);
  const [submitted, setSubmitted] = useState(false);

  const memoizedFormData = useMemo(() => formValue, [formValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(async () => {
      const result = await loginUser(memoizedFormData);

      if (result === true) {
        localStorage.setItem("user", formValue.username);
        router.push("/");
      } else {
        setError(result);
      }
      setSubmitted(false);
    }, 1000);
  };

  return (
    <ConfigProvider theme={theme}>
      <Card>
        <Form
          layout="vertical"
          form={form}
          initialValues={{ layout: "vertical" }}
          style={{ width: "400px" }}
          requiredMark={customizeRequiredMark}
        >
          <Form.Item>
            <div className="flex items-end justify-between">
              <Text strong style={{ fontSize: "24px" }}>
                Đăng Nhập
              </Text>
              <Link href={"./register"}>Đăng ký</Link>
            </div>
          </Form.Item>
          <Form.Item label="Tên đăng nhập" required>
            <Input
              name="username"
              value={formValue.username}
              placeholder="Email"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Mật khẩu" required>
            <Input.Password
              name="password"
              value={formValue.password}
              placeholder="Mật khẩu"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              color="white"
              style={{ background: "red", width: "100%" }}
              onClick={handleSubmit}
              loading={submitted}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </ConfigProvider>
  );
};

export default LoginPage;
