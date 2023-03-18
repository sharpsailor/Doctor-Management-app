import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Login = () => {
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="text" required />
          </Form.Item>
          <Link to="/Register" className="m-2">
            New User?Register here
          </Link>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
