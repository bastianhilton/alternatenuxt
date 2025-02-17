import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TrainingsWhereInput {
    AND?: TrainingsWhereInput[] | undefined;
    OR?: TrainingsWhereInput[] | undefined;
    NOT?: TrainingsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    link?: StringNullableFilter | undefined;
    steps?: StringNullableFilter | undefined;
    updated?: DateTimeNullableFilter | undefined;
    analytics?: StringNullableFilter | undefined;
    competency?: StringNullableFilter | undefined;
    course?: StringNullableFilter | undefined;
    grade?: StringNullableFilter | undefined;
    school?: StringNullableFilter | undefined;
    comment?: IntNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    country?: IntNullableFilter | undefined;
    state?: IntNullableFilter | undefined;
    postal?: StringNullableFilter | undefined;
    teacher?: StringNullableFilter | undefined;
    student?: StringNullableFilter | undefined;
    anncouncement?: StringNullableFilter | undefined;
    resource?: StringNullableFilter | undefined;
    badges?: StringNullableFilter | undefined;
    isPublic?: StringNullableFilter | undefined;
    isCompleted?: StringNullableFilter | undefined;
    speakers?: StringNullableFilter | undefined;
    fieldTrips?: StringNullableFilter | undefined;
    assignments?: StringNullableFilter | undefined;
    assignmentsDueDate?: StringNullableFilter | undefined;
    origanlityReport?: StringNullableFilter | undefined;
    products?: BigIntNullableFilter | undefined;
    faqs?: StringNullableFilter | undefined;
    languages?: StringNullableFilter | undefined;
    checklists?: BigIntNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    meetups?: StringNullableFilter | undefined;
    lab?: StringNullableFilter | undefined;
    digiboards?: StringNullableFilter | undefined;
    checklist?: StringNullableFilter | undefined;
    comments?: StringNullableFilter | undefined;
    countries?: StringNullableFilter | undefined;
    products_productsTotrainings?: StringNullableFilter | undefined;
    states?: StringNullableFilter | undefined;
}
