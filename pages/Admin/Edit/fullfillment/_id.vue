<template>
  <div>
    <form method="POST" enctype="multipart/form-data"  @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="fullfillmentAddOptions">
                <li><a href="/admin/add-new/add-new-warehouse">
                    <input type="submit" class="btn btn-warning" value="Add A Warehouse" /></a></li>
                <li>
                  <input type="submit" value="Save" @click="addFullfillment" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Pickup</td>
              <td>
                <input v-model="pickup" name="fullfillmentPickup" type="checkbox" value="Check this box if this fullfillment allows pickups" />{{ fullfillment.pickup }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Stock</td>
              <td>
                <input v-model="stock" name="fullfillmentStock" type="text" />{{ fullfillment.stock }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Company Name</td>
              <td>
                <input v-model="company" name="fullfillmentCompanyName" type="text" />{{ fullfillment.company }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Warehouse Name</td>
              <td>
                <input v-model="name" type="text" required />{{ fullfillment.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Phone Number</td>
              <td>
                <input v-model="phone" type="text" placeholder="#" />{{ fullfillment.phone }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Shipping Zones</td>
              <td>
                <input v-model="shipping_zones" name="fullfillmentShippingZones" type="text" />{{ fullfillment.shipping_zones }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Address</td>
              <td>
                <input v-model="address" type="text" />{{ fullfillment.address }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Address Line 2</td>
              <td>
                <input v-model="address_two" type="text" name="addressTwo" />{{ fullfillment.address_two }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">City</td>
              <td>
                <input v-model="city" type="text" />{{ fullfillment.city }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">State</td>
              <td>
                <input v-model="state" type="text" />{{ fullfillment.state }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Fullfillment Area</td>
              <td>
                <input v-model="country_area" name="fullfillmentFullfillmentArea" type="text" />{{ fullfillment.country_area }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Fullfillment</td>
              <td>
                <input v-model="country" name="fullfillmentFullfillment" type="text" />{{ fullfillment.country }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Zipcode</td>
              <td>
                <input v-model="zipcode" name="fullfillmentZipcode" type="text" />{{ fullfillment.zipcode }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
import  gql from 'graphql-tag'
import  fullfillments from '~/graphql/mutations/shop/fullfillments'

const DELETE_FULLFILLMENT = gql `
  mutation delete_fullfillments($id: Int!){
  delete_fullfillments(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_FULLFILLMENT = gql `
  mutation update_fullfillments($id: Int!){
  update_fullfillments(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Fullfillment'
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
   async deleteFullfillment(fullfillment){
    await this.$apollo.mutate({
        mutation: DELETE_FULLFILLMENT,
        variables: {
          id: fullfillment.id
        },
        refetchQueries: [
          {
            query: fullfillments
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/fullfillments'})
            }).catch(err => console.log(err));
    },
    async updateFullfillment(fullfillment){
    await this.$apollo.mutate({
        mutation: UPDATE_FULLFILLMENT,
        variables: {
          id: fullfillment.id
        },
        refetchQueries: [
          {
            query: fullfillments
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    fullfillments: {
      query: fullfillments,
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

</style>
