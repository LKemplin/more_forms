import { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passconfirm, setPassconfirm] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password: password }
        console.log("Welcome", newUser)
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setPassconfirm("");
    }
    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ (e) => setPassconfirm(e.target.value)}/>
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