import { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passconfirm, setPassconfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password }
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setPassconfirm("");
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!"
        } else {
            return "Please submit the form."
        }
    }
    return (
        <div>
            <form onSubmit={ createUser }>
                <h3>{formMessage()}</h3>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value)}/>
                    { firstname.length < 2 && firstname.length > 0 ? <p>First name must be at least 2 characters.</p> : null}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value)}/>
                    { lastname.length < 2 && lastname.length > 0 ? <p>Last name must be at least 2 characters.</p> : null}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
                    { email.length < 5 && email.length > 0 ? <p>Email must be at least 5 characters.</p> : null}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
                    { password.length < 8 && password.length > 0 ? <p>Password must be at least 8 characters.</p> : null}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ (e) => setPassconfirm(e.target.value)}/>
                    { password !== passconfirm && passconfirm.length > 0 ? <p>Passwords must match.</p> : null}
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {passconfirm}</p>
            </div>
        </div>
    )
}

export default Form;