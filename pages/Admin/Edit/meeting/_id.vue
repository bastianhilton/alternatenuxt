<template>
    <div>
        <form  v-for="meeting in meetings" :key="meeting.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="meetingAddOptions">
                            <li><input type="submit" value="Save" @click="addMeeting" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Subject</td>
                        <td><input v-model="subject" type="text" required />{{ meeting.subject }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Start Date</td>
                        <td><input v-model="start_date" type="text" />{{ meeting.start_date }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">End Date</td>
                        <td><input v-model="due_date" type="text" />{{ meeting.end_date }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Duration</td>
                        <td><input v-model="duration" type="datetime-local" />{{ meeting.duration }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Status</td>
                        <td><input v-model="status" type="text" />{{ meeting.status }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Related To</td>
                        <td><input v-model="related_to" type="text" />{{ meeting.related_to }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Reminders</td>
                        <td><input v-model="reminders" type="text" />{{ meeting.reminders }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><input v-model="content" type="textarea" />{{ meeting.content }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><input v-model="assigned_to" type="textarea" />{{ meeting.assigned_to }}</td>
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
import  meeting from '~/graphql/mutations/customers/meetings'

const DELETE_MEETING = gql `
  mutation delete_meeting($id: Int!){
  delete_meeting(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_MEETING = gql `
  mutation update_meeting($id: Int!){
  update_meeting(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Meeting'
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
   async deleteMeeting(meeting){
    await this.$apollo.mutate({
        mutation: DELETE_MEETING,
        variables: {
          id: meeting.id
        },
        refetchQueries: [
          {
            query: meetings
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../customers/meetings'})
            }).catch(err => console.log(err));
    },
    async updateMeeting(meeting){
    await this.$apollo.mutate({
        mutation: UPDATE_MEETING,
        variables: {
          id: meeting.id
        },
        refetchQueries: [
          {
            query: meetings
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    meeting: {
      query: meeting,
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
</style>