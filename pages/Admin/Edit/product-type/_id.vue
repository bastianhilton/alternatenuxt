<template>
  <div>
    <form v-for="product_types in product_types" :key="product_types" method="POST" enctype="multipart/form-data" @submit.prevent>
        <div class="row">
          <div class="col-lg-6">
            <table class="table">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th scope="col" class="productTypesAddOptions">
                    <li>
                      <input type="submit" value="Save" @click="addProduct_Type" />
                    </li>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style="text-align: right;">Product Type Name</td>
                  <td>
                    <input id="productTypesLabel" v-model="type_name" type="text" required />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Product Types</td>
                  <td>
                    <input id="productTypesCode" v-model="product_type" type="radio" :options="{first: 'Regular product type', second: 'Gift card product type'}" value="This is used internally. Make sure you don’t use spaces"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Taxes</td>
                  <td>
                    <input id="productTypesValue" v-model="taxes" type="text" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Name</td>
                  <td>
                    <input id="productTypesValue" v-model="meta_name" type="text" value="Used in Search Engine Optimization" />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta URL</td>
                  <td>
                    <input id="productTypesValue" v-model="meta_url" type="text" value="Used in Search Engine Optimization"  />
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Meta Description</td>
                  <td>
                    <input id="productTypesValue" v-model="meta_description" type="text" value="Used in Search Engine Optimization"  />
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
          <div class="col-lg-6">
            <table class="table">
                <thead>
                <tr>
                  <th><h5>Shipping</h5></th>
                  <th scope="col">
                    <li>
                      <p>Define if this item is shippable in AlternateCMS</p>
                    </li>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: right;">Is this product shippable?</td>
                  <td>
                    <input id="productTypesShippable" v-model="isShippable" type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import  gql from 'graphql-tag'
import  product_types from '~/graphql/mutations/shop/product-type'

const DELETE_PRODUCT_TYPE = gql `
  mutation delete_product_types($id: Int!){
  delete_product_types(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_PRODUCT_TYPE = gql `
  mutation update_product_types($id: Int!){
  update_product_types(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Product Type'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteProduct_Type(product_type){
    await this.$apollo.mutate({
        mutation: DELETE_PRODUCT_TYPE,
        variables: {
          id: product_type.id
        },
        refetchQueries: [
          {
            query: product_Types
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/product-types'})
            }).catch(err => console.log(err));
    },
    async updateProduct_Type(product_type){
    await this.$apollo.mutate({
        mutation: UPDATE_PRODUCT_TYPE,
        variables: {
          id: product_type.id
        },
        refetchQueries: [
          {
            query: product_Types
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    product_types: {
      query: product_types,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

  .form-switch .form-check-input:checked[type=checkbox]:after,
  .form-switch .form-check-input:after {
    margin-top: -7px;
  }

</style>
