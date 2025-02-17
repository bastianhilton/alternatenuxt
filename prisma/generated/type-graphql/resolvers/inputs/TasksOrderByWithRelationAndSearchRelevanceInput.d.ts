import { TasksOrderByRelevanceInput } from "../inputs/TasksOrderByRelevanceInput";
export declare class TasksOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    due_date?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    related_to?: "asc" | "desc" | undefined;
    contact?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    date_modified?: "asc" | "desc" | undefined;
    mediamanager?: "asc" | "desc" | undefined;
    projects?: "asc" | "desc" | undefined;
    workspaces?: "asc" | "desc" | undefined;
    _relevance?: TasksOrderByRelevanceInput | undefined;
}
