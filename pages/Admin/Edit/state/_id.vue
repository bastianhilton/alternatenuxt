<template>
    <div>
        <form v-for="state in states" :key="state.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="statesAddOptions">
                            <li><input type="submit" @click="addState" value="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">State Name</td>
                        <td><input id="statesName" type="statesName" required />{{ state.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">State Country</td>
                        <td><input id="statesCountry" type="statesCountry" required />{{ state.country }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table table-responsive">
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input
  type="textarea" id="tagDesc" name="tagDesc" cols="80" rows="10" />{{ state.description }}
                                            </div>
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
import  states from '~/graphql/mutations/shop/states'

const DELETE_STATE = gql `
  mutation delete_states($id: Int!){
  delete_states(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_STATE = gql `
  mutation update_states($id: Int!){
  update_states(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit State'
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
   async deleteState(state){
    await this.$apollo.mutate({
        mutation: DELETE_STATE,
        variables: {
          id: state.id
        },
        refetchQueries: [
          {
            query: states
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/states'})
            }).catch(err => console.log(err));
    },
    async updateState(state){
    await this.$apollo.mutate({
        mutation: UPDATE_STATE,
        variables: {
          id: state.id
        },
        refetchQueries: [
          {
            query: states
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    states: {
      query: states,
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