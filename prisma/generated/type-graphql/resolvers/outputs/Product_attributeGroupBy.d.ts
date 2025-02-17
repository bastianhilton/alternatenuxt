import { Product_attributeAvgAggregate } from "../outputs/Product_attributeAvgAggregate";
import { Product_attributeCountAggregate } from "../outputs/Product_attributeCountAggregate";
import { Product_attributeMaxAggregate } from "../outputs/Product_attributeMaxAggregate";
import { Product_attributeMinAggregate } from "../outputs/Product_attributeMinAggregate";
import { Product_attributeSumAggregate } from "../outputs/Product_attributeSumAggregate";
export declare class Product_attributeGroupBy {
    id: number;
    default_label: string | null;
    attribute_code: string | null;
    filter_options: string | null;
    use_search: string | null;
    layered_navigation: boolean | null;
    search_results_layered_navigation: boolean | null;
    position: string | null;
    promo_rule_conditions: boolean | null;
    allow_html_tags_storefront: boolean | null;
    visible_catalog_pages_storefront: boolean | null;
    used_product_listing: boolean | null;
    used_sorting_product_listing: boolean | null;
    prod_id: bigint;
    attribute_class: string | null;
    attribute_value: string | null;
    column_options: string | null;
    faceted_navigation: boolean | null;
    isPublic: string | null;
    meta_description: string | null;
    meta_name: boolean | null;
    meta_url: string | null;
    product_attribute_set: string | null;
    products: string | null;
    _count: Product_attributeCountAggregate | null;
    _avg: Product_attributeAvgAggregate | null;
    _sum: Product_attributeSumAggregate | null;
    _min: Product_attributeMinAggregate | null;
    _max: Product_attributeMaxAggregate | null;
}
