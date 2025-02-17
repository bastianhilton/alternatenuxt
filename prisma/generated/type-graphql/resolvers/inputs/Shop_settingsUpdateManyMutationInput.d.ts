import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Shop_settingsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    store_name?: NullableStringFieldUpdateOperationsInput | undefined;
    store_phone?: NullableStringFieldUpdateOperationsInput | undefined;
    store_hours?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    region?: NullableStringFieldUpdateOperationsInput | undefined;
    zipcode?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    address_two?: NullableStringFieldUpdateOperationsInput | undefined;
    vat_number?: NullableStringFieldUpdateOperationsInput | undefined;
    allow_state?: NullableStringFieldUpdateOperationsInput | undefined;
    state_required_for?: NullableStringFieldUpdateOperationsInput | undefined;
    allow_countries?: NullableStringFieldUpdateOperationsInput | undefined;
    default_country?: NullableStringFieldUpdateOperationsInput | undefined;
    optional_zip?: NullableStringFieldUpdateOperationsInput | undefined;
    european_union_countries?: NullableStringFieldUpdateOperationsInput | undefined;
    top_destinations?: NullableStringFieldUpdateOperationsInput | undefined;
    base_currency?: NullableStringFieldUpdateOperationsInput | undefined;
    default_currency?: NullableStringFieldUpdateOperationsInput | undefined;
    allowed_currency?: NullableStringFieldUpdateOperationsInput | undefined;
}
