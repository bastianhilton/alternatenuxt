<template>
  <div>
    <form v-for="review in reviews" :key="review.id"  method="POST" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" @click="addReview" value="Save Review" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Review</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab content -->
          <div id="v-tabs-tabContent" class="tab-content">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">First Name</td>
                      <td><input v-model="first_name" type="text" />{{ review.first_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><input v-model="last_name" type="text" />{{ review.last_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td><input v-model="website" id="websites" name="websites" type="url" />{{ review.websites }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Review Content</td>
                      <td><vue-simplemde id="reviewDescription" v-model="content" />{{ review.content }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Tab content -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  reviews from '~/graphql/mutations/marketing/reviews'

const DELETE_REVIEW = gql `
  mutation delete_reviews($id: Int!){
  delete_reviews(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_REVIEW = gql `
  mutation update_reviews($id: Int!){
  update_reviews(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Review'
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
   async deleteReview(review){
    await this.$apollo.mutate({
        mutation: DELETE_REVIEW,
        variables: {
          id: review.id
        },
        refetchQueries: [
          {
            query: reviews
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/reviews'})
            }).catch(err => console.log(err));
    },
    async updateReview(review){
    await this.$apollo.mutate({
        mutation: UPDATE_REVIEW,
        variables: {
          id: review.id
        },
        refetchQueries: [
          {
            query: reviews
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    reviews: {
      query: reviews,
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
