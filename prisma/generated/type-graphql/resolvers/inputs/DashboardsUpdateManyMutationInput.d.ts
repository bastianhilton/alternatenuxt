import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class DashboardsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    client_id?: NullableStringFieldUpdateOperationsInput | undefined;
    client_secret?: NullableStringFieldUpdateOperationsInput | undefined;
    privacy?: NullableStringFieldUpdateOperationsInput | undefined;
    category?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
    task?: NullableStringFieldUpdateOperationsInput | undefined;
    reports?: NullableStringFieldUpdateOperationsInput | undefined;
    tasks?: NullableStringFieldUpdateOperationsInput | undefined;
    projects?: NullableStringFieldUpdateOperationsInput | undefined;
    tickets?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    checklists?: NullableStringFieldUpdateOperationsInput | undefined;
    visits?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
    articles?: NullableStringFieldUpdateOperationsInput | undefined;
    sales?: NullableStringFieldUpdateOperationsInput | undefined;
}
