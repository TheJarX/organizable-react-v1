import React, {useState} from "react";
import {Form, FormContainer, LinkElement, PrimaryButton} from "./StyledComponents";
import FormInput from "./FormInput";
import {createUser} from "../services/users";
import {Link, Redirect} from "react-router-dom";
import {saveToken} from '../services/session';

function SignUp(setUser) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
    });
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);

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
        const {data, error} = await createUser(formData);

        if (data) {
            saveToken(data.token);
            setUser(data);
            setRedirect(true);
        } else {
            setError(error);
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
                    <FormInput
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        type="email"
                    />
                    <FormInput
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={onChange}
                    />
                    <FormInput
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={onChange}
                    />
                    <PrimaryButton style={{marginTop: "16px"}}>Create!</PrimaryButton>
                </Form>
                {error && <p>{error}</p>}
                <Link to="/login">
                    <LinkElement style={{marginTop: "16px"}}>or login with existing user</LinkElement>
                </Link>
            </FormContainer>
    );
}

export default SignUp;
