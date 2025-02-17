import { ChecklistOrderByRelevanceInput } from "../inputs/ChecklistOrderByRelevanceInput";
export declare class ChecklistOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    regional_manager?: "asc" | "desc" | undefined;
    manager?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    ticket?: "asc" | "desc" | undefined;
    project?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    trainings?: "asc" | "desc" | undefined;
    _relevance?: ChecklistOrderByRelevanceInput | undefined;
}
