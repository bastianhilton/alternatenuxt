import { TasksOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TasksOrderByWithRelationAndSearchRelevanceInput";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";
export declare class FindManyTasksArgs {
    where?: TasksWhereInput | undefined;
    orderBy?: TasksOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TasksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "subject" | "start_date" | "due_date" | "priority" | "description" | "status" | "related_to" | "contact" | "assigned_to" | "date_modified" | "mediamanager" | "projects" | "workspaces"> | undefined;
}
