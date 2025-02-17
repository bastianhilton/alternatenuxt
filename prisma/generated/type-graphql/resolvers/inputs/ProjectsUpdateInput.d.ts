import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ProjectsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    project_manager?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableStringFieldUpdateOperationsInput | undefined;
    end_date?: NullableStringFieldUpdateOperationsInput | undefined;
    resource?: NullableStringFieldUpdateOperationsInput | undefined;
    considerworkingdays?: NullableStringFieldUpdateOperationsInput | undefined;
    project_template?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    assignee?: NullableStringFieldUpdateOperationsInput | undefined;
    cust_id?: NullableIntFieldUpdateOperationsInput | undefined;
    doing?: NullableStringFieldUpdateOperationsInput | undefined;
    done?: NullableStringFieldUpdateOperationsInput | undefined;
    goal_collaborators?: NullableStringFieldUpdateOperationsInput | undefined;
    goal_measurement?: NullableStringFieldUpdateOperationsInput | undefined;
    goal_name?: NullableStringFieldUpdateOperationsInput | undefined;
    goal_privacy?: NullableStringFieldUpdateOperationsInput | undefined;
    goal_progress_source?: NullableStringFieldUpdateOperationsInput | undefined;
    goal_timeperiod?: NullableStringFieldUpdateOperationsInput | undefined;
    goal_updatemethod?: NullableStringFieldUpdateOperationsInput | undefined;
    priority?: NullableStringFieldUpdateOperationsInput | undefined;
    section_rule?: NullableStringFieldUpdateOperationsInput | undefined;
    staff_id?: NullableIntFieldUpdateOperationsInput | undefined;
    task_id?: NullableBigIntFieldUpdateOperationsInput | undefined;
    ticket_id?: NullableBigIntFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    tasks?: NullableStringFieldUpdateOperationsInput | undefined;
    ticketing?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
    workspaces?: NullableStringFieldUpdateOperationsInput | undefined;
}
