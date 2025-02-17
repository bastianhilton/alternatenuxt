"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProjectsScalarFieldEnum;
(function (ProjectsScalarFieldEnum) {
    ProjectsScalarFieldEnum["id"] = "id";
    ProjectsScalarFieldEnum["name"] = "name";
    ProjectsScalarFieldEnum["project_manager"] = "project_manager";
    ProjectsScalarFieldEnum["start_date"] = "start_date";
    ProjectsScalarFieldEnum["end_date"] = "end_date";
    ProjectsScalarFieldEnum["resource"] = "resource";
    ProjectsScalarFieldEnum["considerworkingdays"] = "considerworkingdays";
    ProjectsScalarFieldEnum["project_template"] = "project_template";
    ProjectsScalarFieldEnum["status"] = "status";
    ProjectsScalarFieldEnum["created_at"] = "created_at";
    ProjectsScalarFieldEnum["assignee"] = "assignee";
    ProjectsScalarFieldEnum["cust_id"] = "cust_id";
    ProjectsScalarFieldEnum["doing"] = "doing";
    ProjectsScalarFieldEnum["done"] = "done";
    ProjectsScalarFieldEnum["goal_collaborators"] = "goal_collaborators";
    ProjectsScalarFieldEnum["goal_measurement"] = "goal_measurement";
    ProjectsScalarFieldEnum["goal_name"] = "goal_name";
    ProjectsScalarFieldEnum["goal_privacy"] = "goal_privacy";
    ProjectsScalarFieldEnum["goal_progress_source"] = "goal_progress_source";
    ProjectsScalarFieldEnum["goal_timeperiod"] = "goal_timeperiod";
    ProjectsScalarFieldEnum["goal_updatemethod"] = "goal_updatemethod";
    ProjectsScalarFieldEnum["priority"] = "priority";
    ProjectsScalarFieldEnum["section_rule"] = "section_rule";
    ProjectsScalarFieldEnum["staff_id"] = "staff_id";
    ProjectsScalarFieldEnum["task_id"] = "task_id";
    ProjectsScalarFieldEnum["ticket_id"] = "ticket_id";
    ProjectsScalarFieldEnum["customers"] = "customers";
    ProjectsScalarFieldEnum["tasks"] = "tasks";
    ProjectsScalarFieldEnum["ticketing"] = "ticketing";
    ProjectsScalarFieldEnum["users"] = "users";
    ProjectsScalarFieldEnum["workspaces"] = "workspaces";
})(ProjectsScalarFieldEnum = exports.ProjectsScalarFieldEnum || (exports.ProjectsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProjectsScalarFieldEnum, {
    name: "ProjectsScalarFieldEnum",
    description: undefined,
});
