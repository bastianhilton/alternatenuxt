"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOccassionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOccassionsArgs_1 = require("./args/AggregateOccassionsArgs");
const Occassions_1 = require("../../../models/Occassions");
const AggregateOccassions_1 = require("../../outputs/AggregateOccassions");
const helpers_1 = require("../../../helpers");
let AggregateOccassionsResolver = class AggregateOccassionsResolver {
    async aggregateOccassions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).occassions.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOccassions_1.AggregateOccassions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOccassionsArgs_1.AggregateOccassionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOccassionsResolver.prototype, "aggregateOccassions", null);
AggregateOccassionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Occassions_1.Occassions)
], AggregateOccassionsResolver);
exports.AggregateOccassionsResolver = AggregateOccassionsResolver;
