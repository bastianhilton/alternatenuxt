
<template>
  <div>
    <form  v-for="target in targets" :key="target.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="targetAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addTarget" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Prefix</td>
              <td>
                <input v-model="prefix" type="text" />{{ targets.prefix }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">First Name</td>
              <td>
                <input v-model="first_name" type="text" />{{ targets.first_name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Last Name</td>
              <td>
                <input v-model="last_name" type="text" />{{ targets.last_name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Job Title</td>
              <td>
                <input v-model="job_title" type="text" />{{ targets.job_title }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Department</td>
              <td>
                <input v-model="department" type="text" />{{ targets.department }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Account Name</td>
              <td>
                <input v-model="account_name" type="text" />{{ targets.account_name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Office Phone</td>
              <td>
                <input v-model="office_phone" type="text" />{{ targets.office_phone }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Mobile</td>
              <td>
                <input v-model="mobile" type="text" />{{ targets.mobile }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Fax</td>
              <td>
                <input v-model="fax" type="text" />{{ targets.fax }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Website</td>
              <td>
                <input v-model="website" type="text" />{{ targets.website }}
              </td>
            </tr>
            <div class="col">
            <tr>
              <td style="text-align: right;">Primary Address Street</td>
              <td>
                <input v-model="address" type="text" />{{ targets.address }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address Postalcode</td>
              <td>
                <input v-model="postalcode" type="text" />{{ targets.postalcode }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address City</td>
              <td>
                <input v-model="city" type="text" />{{ targets.city }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address State</td>
              <td>
                <input v-model="state" type="text" />{{ targets.state }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address Country</td>
              <td>
                <input v-model="country" type="text" />{{ targets.country }}
              </td>
            </tr>
            </div>
            <div class="col">
            <tr>
              <td style="text-align: right;">Alternate Address Street</td>
              <td>
                <input v-model="alt_address" type="text" value="Other Address" />{{ targets.address }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address Postalcode</td>
              <td>
                <input v-model="alt_postalcode" type="text" value="Other Address Postalcode" />{{ targets.alt_postalcode }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address City</td>
              <td>
                <input v-model="alt_city" type="text" value="Other Address City" />{{ targets.alt_city }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address State</td>
              <td>
                <input v-model="alt_state" type="text" value="Other Address State" />{{ targets.alt_state }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address Country</td>
              <td>
                <input v-model="alt_country" type="text" value="Other Address Country" />{{ targets.alt_country }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Email Address</td>
              <td>
                <input v-model="email" type="text" />{{ targets.email }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <input v-model="description" type="textarea" />{{ targets.description }}
              </td>
            </tr>
            </div>
          </tbody>
        </table>
      </div>
      <br><br>
      <div id="accordionExample" class="accordion">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <button class="accordion-button" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              More Information
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Email Opt Out</td>
                      <td>
                        <input v-model="email_opt_out" type="text" />{{ targets.email_opt_out }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Do Not Call</td>
                      <td>
                        <input v-model="donotcall" type="textarea" />{{ targets.donotcall }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  targets from '~/graphql/mutations/customers/targets'

const DELETE_TARGET = gql `
  mutation delete_targets($id: Int!){
  delete_targets(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_TARGET = gql `
  mutation update_targets($id: Int!){
  update_targets(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Target'
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
   async deleteTarget(target){
    await this.$apollo.mutate({
        mutation: DELETE_TARGET,
        variables: {
          id: target.id
        },
        refetchQueries: [
          {
            query: targets
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/customers/targets'})
            }).catch(err => console.log(err));
    },
    async updateTarget(target){
    await this.$apollo.mutate({
        mutation: UPDATE_TARGET,
        variables: {
          id: target.id
        },
        refetchQueries: [
          {
            query: targets
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    targets: {
      query: targets,
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

</style>
