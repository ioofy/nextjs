import { Task } from "./task";
import { FetchTasksAction } from "./action";

export interface AppState {
 tasks: Task[];
}

const defaultState = {
 tasks: [],
};

export const reducer = (
 state: AppState = defaultState,
 action: FetchTasksAction
) => {
 switch (action.type) {
  case "FETCH_TASKS":
   return {
    ...state,
    tasks: action.tasks,
   };

  default:
   return state;
 }
};
