
<template>
  <div>
    <form v-for="lead in leads" :key="lead.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="leadAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addLead" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Prefix</td>
              <td>
                <input v-model="prefix" type="text" />{{ leads.prefix }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">First Name</td>
              <td>
                <input v-model="first_name" type="text" />{{ leads.first_name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Last Name</td>
              <td>
                <input v-model="last_name" type="text" />{{ leads.last_name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Job Title</td>
              <td>
                <input v-model="job_title" type="text" />{{ leads.job_title }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Department</td>
              <td>
                <input v-model="department" type="text" />{{ leads.department }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Account Name</td>
              <td>
                <input v-model="account_name" type="text" />{{ leads.account_name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Office Phone</td>
              <td>
                <input v-model="office_phone" type="text" />{{ leads.office_phone }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Mobile</td>
              <td>
                <input v-model="mobile" type="text" />{{ leads.mobile }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Fax</td>
              <td>
                <input v-model="fax" type="text" />{{ leads.fax }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Website</td>
              <td>
                <input v-model="website" type="text" />{{ leads.website }}
              </td>
            </tr>
            <div class="col">
            <tr>
              <td style="text-align: right;">Primary Address Street</td>
              <td>
                <input v-model="address" type="text" />{{ leads.address }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address Postalcode</td>
              <td>
                <input v-model="postalcode" type="text" />{{ leads.postalcode }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address City</td>
              <td>
                <input v-model="city" type="text" />{{ leads.city }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address State</td>
              <td>
                <input v-model="state" type="text" />{{ leads.state }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address Country</td>
              <td>
                <input v-model="country" type="text" />{{ leads.country }}
              </td>
            </tr>
            </div>
            <div class="col">
            <tr>
              <td style="text-align: right;">Alternate Address Street</td>
              <td>
                <input v-model="alt_address" type="text" value="Other Address" />{{ leads.alt_address }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address Postalcode</td>
              <td>
                <input v-model="alt_postalcode" type="text" value="Other Address Postalcode" />{{ leads.postalcode }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address City</td>
              <td>
                <input v-model="alt_city" type="text" value="Other Address City" />{{ leads.alt_city }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address State</td>
              <td>
                <input v-model="alt_state" type="text" value="Other Address State" />{{ leads.alt_state }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address Country</td>
              <td>
                <input v-model="alt_country" type="text" value="Other Address Country" />{{ leads.alt_country }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Email Address</td>
              <td>
                <input v-model="email" type="text" />{{ leads.email }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <input v-model="description" type="textarea" />{{ leads.description }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <input v-model="assigned_to" type="text" />{{ leads.assigned_to }}
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
                      <td style="text-align: right;">Status</td>
                      <td>
                        <input v-model="status" type="text" />{{ leads.status }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Status Description</td>
                      <td>
                        <input v-model="status_description" type="textarea" />{{ leads.status_description }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Opportunity Amount</td>
                      <td>
                        <input v-model="opportunity_amount" type="text" />{{ leads.opportunity_amount }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Campaign</td>
                      <td>
                        <input v-model="campaign" type="text" />{{ leads.campaign }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Lead Source</td>
                      <td>
                        <input v-model="lead_source" type="text" />{{ leads.lead_source }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Lead Source Description</td>
                      <td>
                        <input v-model="lead_source_description" type="textarea" />{{ leads.lead_source_description }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Referred By</td>
                      <td>
                        <input v-model="referred_by" type="text" />{{ leads.referred_by }}
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
import  leads from '~/graphql/mutations/customers/leads'

const DELETE_LEAD = gql `
  mutation delete_leads($id: Int!){
  delete_leads(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_LEAD = gql `
  mutation update_leads($id: Int!){
  update_leads(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Lead'
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
   async deleteLead(lead){
    await this.$apollo.mutate({
        mutation: DELETE_LEAD,
        variables: {
          id: lead.id
        },
        refetchQueries: [
          {
            query: leads
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/customers/leads'})
            }).catch(err => console.log(err));
    },
    async updateLead(lead){
    await this.$apollo.mutate({
        mutation: UPDATE_LEAD,
        variables: {
          id: lead.id
        },
        refetchQueries: [
          {
            query: leads
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    leads: {
      query: leads,
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
