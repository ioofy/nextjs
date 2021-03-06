import { Action } from "redux";
import { Task } from "./task";

export interface FetchTasksAction extends Action<"FETCH_TASKS"> {
 tasks: Task[];
}

export const fetchTasks = (): FetchTasksAction => ({
 type: "FETCH_TASKS",
 tasks: [
  {
   title: "First Task",
  },
  {
   title: "Second Task",
  },
  {
   title: "Three Task",
  },
  {
   title: "Four Task",
  },
  {
   title: "Five Task",
  },
 ],
});
