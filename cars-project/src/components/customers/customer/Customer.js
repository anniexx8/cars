import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../utils/http-utils/customer-requests";
// import {
//   getAllTasksForAuthor,
//   deleteTask,
//   saveTask,
// } from "../../../utils/http-utils/task-requests";
import { CustomerCard } from "../customerCard/CustomerCard";
// import { TaskCard } from "../../tasks/task-card/TaskCard";
import "./Customer.scss";

export function Customer(props) {
  const params = useParams();
  const [user, setUser] = useState(null);
  //   const [userTasks, setUserTasks] = useState();

  useEffect(() => {
    getUserById(params.id).then((response) => setUser(response.data));
    // getAllTasksForAuthor(params.id).then((response) =>
    //   setUserTasks(response.data)
    // );
  }, [params.id]);

  //   const onDeleteHandler = (id) => {
  //     deleteTask(id).then(() => {
  //       setUserTasks((prevState) => {
  //         return prevState.filter((task) => task.id !== id);
  //       });
  //     });
  //   };

  //   const onChangeStatusHandler = (status, id) => {
  //     const task = userTasks.find((task) => task.id === id);
  //     task.status = status;
  //     saveTask(task).then(() => {
  //       setUserTasks([...userTasks]);
  //     });
  //   };

  return (
    <div className="user">
      <CustomerCard user={user} isInDetails={true} />
      <div className="user-tasks-holder">
        {/* {userTasks?.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onTaskDelete={onDeleteHandler}
            changeStatus={onChangeStatusHandler}
          />
        ))} */}
      </div>
    </div>
  );
}
