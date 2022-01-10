import { fetchTasks } from "@interface/action";
import { AppState } from "@interface/reducer";
import { Task } from "@interface/task";
import React, { Component } from "react";
import { connect } from "react-redux";

interface OwnProps {}

interface StateProps {
 tasks: Task[];
}

interface DispatchProps {
 fetchTasks: () => void;
}

interface AllProps extends StateProps, DispatchProps {}

export class TaskList extends Component<AllProps> {
 onClick = () => {
  const { fetchTasks } = this.props;
  fetchTasks();
 };

 render() {
  const { tasks } = this.props;
  return (
   <div>
    <ul>
     {tasks.map((task, i) => {
      return <li key={i}>{task.title}</li>;
     })}
    </ul>
    <button onClick={this.onClick}>Fetch Tasks</button>
   </div>
  );
 }
}

export const ConnectedTaskList = connect<
 StateProps,
 DispatchProps,
 OwnProps,
 AppState
>(
 (state) => ({
  tasks: state.tasks,
 }),
 (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
 })
)(TaskList);
