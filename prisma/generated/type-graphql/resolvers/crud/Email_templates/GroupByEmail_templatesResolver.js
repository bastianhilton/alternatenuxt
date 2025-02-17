"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByEmail_templatesArgs_1 = require("./args/GroupByEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const Email_templatesGroupBy_1 = require("../../outputs/Email_templatesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEmail_templatesResolver = class GroupByEmail_templatesResolver {
    async groupByEmail_templates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Email_templatesGroupBy_1.Email_templatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEmail_templatesArgs_1.GroupByEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByEmail_templatesResolver.prototype, "groupByEmail_templates", null);
GroupByEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], GroupByEmail_templatesResolver);
exports.GroupByEmail_templatesResolver = GroupByEmail_templatesResolver;
