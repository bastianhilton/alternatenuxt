<template>
    <div>
        <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Case" @click="addCase" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Case</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                <tbody>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><input v-model="state" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Type</td>
                        <td><input v-model="type" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Subject</td>
                        <td><input v-model="subject" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><input v-model="description" type="textarea"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Resolution</td>
                        <td><input v-model="resolution" type="textarea"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><input v-model="assigned_to" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Priority</td>
                        <td><input v-model="priority" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Status</td>
                        <td><input v-model="status" type="text"  /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Account Name</td>
                        <td><input v-model="account_name" type="text"  /></td>
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
import  gql from "graphql-tag";
/* eslint-disable camelcase */
import cases from "~/graphql/queries/reports/cases";

const ADD_CASES = gql`
    mutation ($status:String!,$state:String,$assigned_to:String,$description:String,$resolution:String!,$subject:String!,$type:String!,$priority:String!,$account_name:String){
    insert_cases(objects: {status: $status, state: $state, assigned_to: $assigned_to, description: $description, resolution: $resolution, subject: $subject, type: $type, priority: $priority}) {
        affected_rows
        returning {
            description
            assigned_to
            account_name
            priority
            resolution
            state
            status
            subject
            type
    }
  }
}`;

export default {
    data() {
    return {
        assigned_to: [],
        status: " ",
        state: " ",
        description: " ",
        resolution: " ",
        account_name: " ",
        type: " ",
        priority: " ",
        subject: " ",
      }
  },
  methods: {
      async addCase() {
            const status = this.status;
            const description = this.description;
            const state = this.state;
            const assigned_to = this.assigned_to;
            const priority = this.priority;
            const account_name = this.account_name;
            const subject = this.subject;
            const type = this.type;
            const resolution = this.resolution;
            await this.$apollo.mutate({
                mutation: ADD_CASES,
                variables: {
                    description,
                    assigned_to,
                    account_name,
                    priority,
                    resolution,
                    state,
                    status,
                    subject,
                    type,
                },
        update: (cache, { data: { insertCases }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCase = insertCases.returning;
                            console.log(insertedCase)
                            cache.writeQuery({
                                query: cases
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../reports/cases'})
                }).catch(err => console.log(err));
                this.status = ' ';
                this.description = ' ';
                this.state = ' ';
                this.assigned_to = ' ';
                this.priority = ' ';
                this.account_name = ' ';
                this.subject = ' ';
                this.type = ' ';
                this.resolution = ' ';
            },
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Case'
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
</style>