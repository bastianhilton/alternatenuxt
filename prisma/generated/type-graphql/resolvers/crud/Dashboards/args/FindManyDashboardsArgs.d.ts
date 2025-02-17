import { DashboardsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DashboardsOrderByWithRelationAndSearchRelevanceInput";
import { DashboardsWhereInput } from "../../../inputs/DashboardsWhereInput";
import { DashboardsWhereUniqueInput } from "../../../inputs/DashboardsWhereUniqueInput";
export declare class FindManyDashboardsArgs {
    where?: DashboardsWhereInput | undefined;
    orderBy?: DashboardsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DashboardsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "client_id" | "client_secret" | "privacy" | "category" | "url" | "media" | "task" | "reports" | "tasks" | "projects" | "tickets" | "customers" | "checklists" | "visits" | "users" | "products" | "articles" | "sales"> | undefined;
}
