<template>
  <div>
    <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Project" @click="addProject" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Project</a>
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
                      <td style="text-align: right;">Article Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Categories</td>
                      <td>
                        <input type="select" :options="categories.name" v-model="categories" name="Select" />
                      </td>
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
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Excerpt</td>
                              <td>
                                <div class="form-check form-switch">
                                  <input id="excerpt" type="textarea" validation="required|max:50,length"
                                    :help="`Keep it under 50 characters. ${50 - value.length} left.`" cols="50"
                                    rows="10" value="Add a short Description" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <client-only>
                                    <vue-simplemde id="articleDescription" v-model="content" />
                                  </client-only>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingThree" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Images and Videos
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <td>
                        <div class="file-upload-wrapper">
                          <input type="file" id="input-file-now" class="file-upload-input"
                            data-mdb-file-upload="file-upload" data-mdb-accepted-extensions="image/*" />
                        </div>
                      </td>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingFive" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Related Products, Up-Sells, and Cross-Sells
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import articles from "~/graphql/queries/content/articles";
  import categories from '~/graphql/queries/shop/categories'

  const ADD_ARTICLES = gql `
    mutation ($name:String!,$excerpt:String,$categories:String,$content:String,$image:String){
    insert_articles(objects: {name: $name, excerpt: $excerpt, categories: $categories, content: $content, image: $image}) {
        affected_rows
        returning {
            name
            excerpt
            categories
            content
            image
    }
  }
}`;

  export default {
    data() {
      return {
        categories: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",

      }
    },
    methods: {
      async addArticle() {
        const name = this.name;
        const content = this.content;
        const excerpt = this.excerpt;
        const categories = this.categories;
        const image = this.image;
        await this.$apollo.mutate({
          mutation: ADD_ARTICLES,
          variables: {
            name,
            excerpt,
            categories,
            content,
            image,
          },
          update: (cache, {
            data: {
              insertCategories
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              console.log(insertedCategory)
              cache.writeQuery({
                query: articles
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../content/blog'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.excerpt = ' ';
        this.categories = ' ';
        this.content = ' ';
        this.image = ' ';
      },

    },
    apollo: {
      categories: {
        prefetch: true,
        query: categories
      }
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Project'
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
