import styled from "@emotion/styled";
import React, { Component } from "react";

interface Task {
 title: string;
}

interface TasksListProps {
 initialTasks: Task[];
}

interface TasksListState {
 tasks: Task[];
}

const Data = styled.ul`
 list-style: none;
`;

const DataMapping = styled.li`
 color: green;
 font-weight: 500;
 padding: 10px 0px 0px;
`;

const DataButton = styled.button`
 margin: 10px 0 0;
 padding: 10px;
 font-size: 15px;
 outline: none;
 border: none;
 background-color: pink;
 color: black;
 cursor: pointer;
 border-radius: 5px;
`;

export class TaskList extends Component<TasksListProps, TasksListState> {
 // kita membuat constructor untuk pendefinisian atau menambahkan props tasks taskslistprops kedalam this.state
 constructor(props: TasksListProps) {
  super(props);

  this.state = {
   tasks: props.initialTasks,
  };
  this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
 }

 onAddNewTaskClick() {
  this.setState({
   tasks: [...this.state.tasks, { title: "New Task Rendered" }],
  });
 }

 render() {
  const { tasks } = this.state;

  return (
   <Data>
    {tasks.map((task, i) => {
     return (
      <DataMapping key={i} className="font-sm">
       {task.title}
      </DataMapping>
     );
    })}
    <DataButton onClick={this.onAddNewTaskClick}>Add new task</DataButton>
   </Data>
  );
 }
}

type ExportDefaultProps = {
 tasks: [];
};

export default (props: ExportDefaultProps) => {
 <div>
  <TaskList initialTasks={props.tasks} />
 </div>;
};
