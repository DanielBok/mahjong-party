import { AppAction } from "@/domain/application";
import { ActionType } from "typesafe-actions";

type AllActions = ActionType<typeof AppAction>;

export default AllActions;
