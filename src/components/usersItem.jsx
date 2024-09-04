import React, { useState } from "react";
import api from "../api/index";
const UsersItem = () => {
  const [user, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(user.filter((user) => user._id !== userId));
  };

  return (
    <>
      <h2>
        <span
          className={"badge bg-" + (user.length > 0 ? "primary" : "danger")}
        >
          {user.length > 0
            ? `${user.length} человек тусанет с тобой сегодня`
            : "Никто с тобой не тусанет"}
        </span>
      </h2>

      {user.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Проффессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>
                    {user.qualities.map((item) => (
                      <span
                        className={"badge m-1 bg-" + item.color}
                        key={item._id}
                      >
                        {item.name}{" "}
                      </span>
                    ))}
                  </td>
                  <td>{user.profession.name} </td>
                  <td>{user.completedMeetings} </td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      className={"btn btn-danger"}
                      onClick={() => handleDelete(user._id)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default UsersItem;
