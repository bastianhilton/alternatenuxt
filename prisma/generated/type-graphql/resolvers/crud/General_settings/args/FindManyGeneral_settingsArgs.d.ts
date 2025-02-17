import { General_settingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/General_settingsOrderByWithRelationAndSearchRelevanceInput";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";
import { General_settingsWhereUniqueInput } from "../../../inputs/General_settingsWhereUniqueInput";
export declare class FindManyGeneral_settingsArgs {
    where?: General_settingsWhereInput | undefined;
    orderBy?: General_settingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: General_settingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "title" | "tagline" | "url" | "email" | "access_restrictions" | "restriction_mode" | "startup_page" | "landing_page" | "http_response" | "store_email" | "store_contact" | "store_contact_two" | "customer_support"> | undefined;
}
