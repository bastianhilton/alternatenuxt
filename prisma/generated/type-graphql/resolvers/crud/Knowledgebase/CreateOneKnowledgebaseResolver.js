"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneKnowledgebaseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneKnowledgebaseArgs_1 = require("./args/CreateOneKnowledgebaseArgs");
const Knowledgebase_1 = require("../../../models/Knowledgebase");
const helpers_1 = require("../../../helpers");
let CreateOneKnowledgebaseResolver = class CreateOneKnowledgebaseResolver {
    async createOneKnowledgebase(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).knowledgebase.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Knowledgebase_1.Knowledgebase, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneKnowledgebaseArgs_1.CreateOneKnowledgebaseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneKnowledgebaseResolver.prototype, "createOneKnowledgebase", null);
CreateOneKnowledgebaseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Knowledgebase_1.Knowledgebase)
], CreateOneKnowledgebaseResolver);
exports.CreateOneKnowledgebaseResolver = CreateOneKnowledgebaseResolver;
