<template>
    <div>
        <form v-for="returns in returns" :key="returns.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="returnsAddOptions">
                            <li><input type="submit" @click="addReturn" value="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Returns Name</td>
                        <td>
                            <input id="returnsName" type="returnsName" required />{{ returns.name }}
                            <p for="name">Name of the return</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Time limit of validity</td>
                        <td>
                            <input id="returnsName" type="returnsName" required />{{ returns.name }}
                            <p for="validity">How many days after the delivery date does the customer have to return a product?</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Returns prefix</td>
                        <td>
                            <input id="returnsName" type="returnsName" required />{{ returns.name }}
                            <p for="returnsPrefix">Prefix used for returns name (e.g. RE00001).</p>
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
import  returns from '~/graphql/mutations/sales/returns'

const DELETE_RETURN = gql `
  mutation delete_returns($id: Int!){
  delete_returns(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_RETURN = gql `
  mutation update_returns($id: Int!){
  update_returns(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Return'
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
   async deleteReturn(returns){
    await this.$apollo.mutate({
        mutation: DELETE_RETURN,
        variables: {
          id: returns.id
        },
        refetchQueries: [
          {
            query: returns
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/returns'})
            }).catch(err => console.log(err));
    },
    async updateReturn(returns){
    await this.$apollo.mutate({
        mutation: UPDATE_RETURN,
        variables: {
          id: returns.id
        },
        refetchQueries: [
          {
            query: returns
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    returns: {
      query: returns,
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
    width: 50%;
}

li {
    display: inline-block;
}
</style>