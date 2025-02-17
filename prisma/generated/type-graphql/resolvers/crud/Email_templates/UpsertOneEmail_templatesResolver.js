"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneEmail_templatesArgs_1 = require("./args/UpsertOneEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const helpers_1 = require("../../../helpers");
let UpsertOneEmail_templatesResolver = class UpsertOneEmail_templatesResolver {
    async upsertOneEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEmail_templatesArgs_1.UpsertOneEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneEmail_templatesResolver.prototype, "upsertOneEmail_templates", null);
UpsertOneEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], UpsertOneEmail_templatesResolver);
exports.UpsertOneEmail_templatesResolver = UpsertOneEmail_templatesResolver;
