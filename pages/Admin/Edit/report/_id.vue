<template>
  <div>
    <form v-for="report in reports" :key="report.id" method="POST" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" value="Save Report" @click="addReport" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Account Information</a>
          </div>
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-content">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <!--<tr>
                      <td style="text-align: right;">Customer Since</td>
                      <client-only>
                      <td><input id="currentDate" v-model="customer_since" type="text" disabled /></td>
                      </client-only>
                    </tr>-->
                    <tr>
                      <td style="text-align: right;">Name Prefix</td>
                      <td><input type="text" />{{ report.name_prefix }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">First Name</td>
                      <td><input type="text" required />{{ report.first_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Middle Name/Initial</td>
                      <td><input type="text" />{{ report.middle_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><input type="text" required />{{ report.last_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name Suffix</td>
                      <td><input type="text" />{{ report.name_suffix }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><input type="text" required />{{ report.email }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date of Birth</td>
                      <td><input type="text" />{{ report.date_of_birth }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Phone Number</td>
                      <td><input type="text" />{{ report.phone }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax/VAT Number</td>
                      <td><input type="text" />{{ report.tax_vat_number }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gender</td>
                      <td><input id="gender" name="gender" type="text" />{{ report.gender }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">About Customer</td>
                      <td><input id="aboutCustomer" type="textarea" name="aboutCustomer" />{{ report.short_description }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 1</td>
                      <td><input type="text" />{{ report.address }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 2</td>
                      <td><input type="text" />{{ report.address_two }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td><input id="state" name="state" :options="states.name" />{{ report.state }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal Code</td>
                      <td><input type="text" />{{ report.zipcode }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td><input id="country" name="country" />{{ report.country }}
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
import  reports from '~/graphql/mutations/reports/reports'

const DELETE_REPORT = gql `
  mutation delete_reports($id: Int!){
  delete_reports(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_REPORT = gql `
  mutation update_reports($id: Int!){
  update_reports(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Report'
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
   async deleteReport(report){
    await this.$apollo.mutate({
        mutation: DELETE_REPORT,
        variables: {
          id: report.id
        },
        refetchQueries: [
          {
            query: reports
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/reports/reports'})
            }).catch(err => console.log(err));
    },
    async updateReport(report){
    await this.$apollo.mutate({
        mutation: UPDATE_REPORT,
        variables: {
          id: report.id
        },
        refetchQueries: [
          {
            query: reports
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    reports: {
      query: reports,
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
</style>
