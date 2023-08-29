import { useEffect, useState } from "react";
import instance from "../api/InstanceApi";
import { useParams } from "react-router-dom";

function EditUserPage() {
  const { id } = useParams();

  console.log("ID: " + id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    instance
      .get(`/edit/${id}`)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setPassword(res.data.password);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .put(`/edit/${id}`, {
        lastName,
        firstName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  console.log("re-render");

  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>{" "}
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Password
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>{" "}
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserPage;
