import React, {useState} from "react";
import {Form, FormContainer, LinkElement, PrimaryButton} from "./StyledComponents";

import FormInput from "./FormInput";
import {loginUser} from "../services/session";
import {Link, Redirect} from "react-router-dom";


function Login({setUser}) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);

    const onChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        const {data, error} = await loginUser(formData);

        if (data) {
            console.log(data)
            setUser(data);
            setRedirect(true);
        } else {
            setError(error);
            console.error(error)
        }
    };

    return (redirect
            ? <Redirect to='/dashboard'/>
            : <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <FormInput
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={onChange}
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={onChange}
                        type="password"
                    />
                    <PrimaryButton style={{marginTop: "16px"}}>Login</PrimaryButton>
                </Form>
                {error && <p>{error}</p>}
                <Link to="/signup">
                    <LinkElement style={{marginTop: "16px"}}>Create an Account</LinkElement>
                </Link>
            </FormContainer>
    );
}

export default Login;