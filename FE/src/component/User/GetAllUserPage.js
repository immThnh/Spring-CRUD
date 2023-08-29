import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import instance from "../api/InstanceApi";
import Modal from "../UiComponent/Modal";

function GetAllUserPage() {
  const baseURL = "http://localhost:3000/api/v1/user";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    instance
      .get("/getAll")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteUser = (id) => {
    instance
      .delete(`/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("delete user");
  };
  return (
    <div>
      {" "}
      <h1>Users</h1>
      <Paper elevation={3}>
        {users === [] ? (
          <h1>Danh sách rỗng!</h1>
        ) : (
          Array.isArray(users) &&
          users.map((user) => (
            <Paper
              elevation={6}
              key={user.id}
              style={{ margin: "10px", padding: "15px" }}
            >
              ID: {user.id} <br />
              Firstname: {user.firstName} <br />
              LastName: {user.lastName} <br />
              Email: {user.email} <br />
              <button className=" btn btn-info me-3 link-offset-2 ">
                <a
                  href={`${baseURL}/edit/${user.id}`}
                  className="link-underline link-underline-opacity-0"
                >
                  Edit
                </a>
              </button>
              <Modal
                title="Spring-CRUD"
                content={`Xác nhận xóa người dùng ${user.firstName} ${user.lastName}!`}
                functionClick={() => handleDeleteUser(user.id)}
              ></Modal>
              {/* <button className="link-offset-2 link-underline link-underline-opacity-0 btn btn-danger">
                Delete
              </button> */}
              <button
                type="button"
                className="btn btn-info me-3 link-offset-2 "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Delete
              </button>
            </Paper>
          ))
        )}
      </Paper>
    </div>
  );
}

export default GetAllUserPage;
