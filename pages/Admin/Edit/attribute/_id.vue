
<template>
    <div>
        <form v-for="attribute in attributes" :key="attribute.id"  method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="attributesAddOptions">
                            <li><input type="submit" value="Save" @click="addAttribute" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Attribute Name</td>
                        <td><input id="attributesLabel" type="text" required />{{ agreement.default_label }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Attribute Code</td>
                        <td><input id="attributesCode" type="text" required />{{ agreement.attribute_code }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Default Value</td>
                        <td><input id="attributesValue" type="text" required />{{ agreement.default_value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  attributes from '~/graphql/mutations/shop/attributes'

const DELETE_ATTRIBUTE = gql `
  mutation delete_attributes($id: Int!){
  delete_attributes(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_ATTRIBUTE = gql `
  mutation update_attributes($id: Int!){
  update_attributes(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Attribute'
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
   async deleteAttribute(attribute){
    await this.$apollo.mutate({
        mutation: DELETE_ATTRIBUTE,
        variables: {
          id: attribute.id
        },
        refetchQueries: [
          {
            query: attributes
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/attributes'})
            }).catch(err => console.log(err));
    },
    async updateAttribute(attribute){
    await this.$apollo.mutate({
        mutation: UPDATE_ATTRIBUTE,
        variables: {
          id: attribute.id
        },
        refetchQueries: [
          {
            query: attributes
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    attributes: {
      query: attributes,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}

.form-switch .form-check-input:checked[type=checkbox]:after, .form-switch .form-check-input:after {
    margin-top: -7px;
}
</style>