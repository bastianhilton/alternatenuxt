<template>
  <div>
    <form v-for="knowledgebase in knowledgebases" :key="knowledgebase.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="knowledgebaseAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addKnowledgebase" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Knowledgebase Name</td>
              <td>
                <input v-model="name" type="text" required />{{ knowledgebase.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Content</td>
              <td>
                <vue-simplemde id="longDescription" v-model="content" required />{{ knowledgebase.content }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Resolution</td>
              <td>
                <input v-model="resolution" type="textarea" />{{ knowledgebase.resolution }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Author</td>
              <td>
                <input v-model="author" type="text" />{{ knowledgebase.author }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Approver</td>
              <td>
                <input v-model="approver" type="text" />{{ knowledgebase.approver }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Revision</td>
              <td>
                <input v-model="revision" type="text" />{{ knowledgebase.revision }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <input v-model="status" type="text" /> {{ knowledgebase.status }}
              </td>
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
import  knowledgebases from '~/graphql/mutations/system/knowledgebase'

const DELETE_KNOWLEDGEBASE = gql `
  mutation delete_knowledgebases($id: Int!){
  delete_knowledgebases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_KNOWLEDGEBASE = gql `
  mutation update_knowledgebases($id: Int!){
  update_knowledgebases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Knowledgebase'
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
   async deleteKnowledgebase(knowledgebase){
    await this.$apollo.mutate({
        mutation: DELETE_KNOWLEDGEBASE,
        variables: {
          id: knowledgebase.id
        },
        refetchQueries: [
          {
            query: knowledgebases
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/system/knowledgebases'})
            }).catch(err => console.log(err));
    },
    async updateKnowledgebase(knowledgebase){
    await this.$apollo.mutate({
        mutation: UPDATE_KNOWLEDGEBASE,
        variables: {
          id: knowledgebase.id
        },
        refetchQueries: [
          {
            query: knowledgebases
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    knowledgebases: {
      query: knowledgebases,
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
