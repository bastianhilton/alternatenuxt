<template>
  <div>
    <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Article" @click="addArticle" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Article</a>
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
                        <select id="category" v-model="categories" name="template" class="form-category">
                          <option v-for="categories in categories" :key="categories" :value="categories">
                            {{ categories.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tags</td>
                      <td>
                        <select id="category" v-model="tags" name="template" class="form-category">
                          <option v-for="tags in tags" :key="tags" :value="tags">{{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Post Access</td>
                      <td>
                        <input v-model="isPublic" type="select"
                          :options="{first: 'Public', second: 'Private', third: 'Members-Only', fourth: 'Specific Tier(s)'}"
                          value="Default is public" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Published Date</td>
                      <td>
                        <input v-model="published" type="datetime-local"
                          value="Default is published immediately" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Author(s)</td>
                      <td>
                        <select id="category" v-model="customers" name="template" class="form-category">
                          <option v-for="customers in customers" :key="customers" :value="customers">
                            {{ customers.name }}</option>
                        </select>
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
                                <textarea id="excerpt" v-model="excerpt" cols="50" rows="10" value="Add a short Description"></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <editor :init="{ plugins: 'lists link image table code help wordcount'}" />
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
                        <input v-model="image" type="image" name="headshot" value="Select an image to upload"
                          help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />
                      </td>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingFour" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Search Engine Optimization
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td></td>
                            <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to
                              potential customers using search engine like Google, Bing, etc.</td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Title</td>
                            <td>
                              <input v-model="meta_title" type="text" value="Article Url" required />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Description</td>
                            <td>
                              <textarea v-model="meta_description" value="SEO Description"
                                rows="10" cols="50"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Url</td>
                            <td>
                              <input v-model="meta_url" type="url" value="Article URL" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
  import  gql from "graphql-tag";
  /* eslint-disable camelcase */
  import articles from "~/graphql/queries/content/articles";
  import  categories from '~/graphql/queries/shop/categories';
  import  tags from '~/graphql/queries/content/tags';
  import  customers from '~/graphql/queries/customers/customers';

  const ADD_ARTICLES = gql `
    mutation ($categories:String!, $content:String!, $cust_id:String!, $customers:String!, $excerpt:String!, $id:String!, $image:String!, $isPublic:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $name:String!, $published:String!, $tags:String!, $users:String!,){
    insert_articles(objects: {categories: $categories, content: $content, cust_id: $cust_id, customers: $customers, excerpt: $excerpt, id: $id, image: $image, isPublic: $isPublic, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, name: $name, published: $published, tags: $tags, users: $users,}) {
        affected_rows
        returning {
            categories
            content
            cust_id
            customers
            excerpt
            id
            image
            isPublic
            meta_description
            meta_name
            meta_url
            name
            published
            tags
            users
            }
  }
}`;

  export default {
    data() {
      return {
        categories: [],
        content: " ",
        cust_id: [],
        customers: [],
        excerpt: " ",
        id: " ",
        image: " ",
        isPublic: " ",
        meta_description: " ",
        meta_name: " ",
        meta_url: " ",
        name: " ",
        published: " ",
        tags: [],
        users: [],
      }
    },
    methods: {
      async addArticle() {
        const categories = this.categories;
        const content = this.content;
        const cust_id = this.cust_id;
        const customers = this.customers;
        const excerpt = this.excerpt;
        const id = this.id;
        const image = this.image;
        const isPublic = this.isPublic;
        const meta_description = this.meta_description;
        const meta_name = this.meta_name;
        const meta_url = this.meta_url;
        const name = this.name;
        const published = this.published;
        const tags = this.tags;
        const users = this.users;

        await this.$apollo.mutate({
          mutation: ADD_ARTICLES,
          variables: {
            categories,
            content,
            cust_id,
            customers,
            excerpt,
            id,
            image,
            isPublic,
            meta_description,
            meta_name,
            meta_url,
            name,
            published,
            tags,
            users,
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
        this.categories = ' ';
        this.content = ' ';
        this.cust_id = ' ';
        this.customers = ' ';
        this.excerpt = ' ';
        this.id = ' ';
        this.image = ' ';
        this.isPublic = ' ';
        this.meta_description = ' ';
        this.meta_name = ' ';
        this.meta_url = ' ';
        this.name = ' ';
        this.published = ' ';
        this.tags = ' ';
        this.users = ' ';

      },

    },
    apollo: {
      categories: {
        prefetch: true,
        query: categories
      },
      tags: {
        prefetch: true,
        query: tags
      },
      customers: {
        prefetch: true,
        query: customers
      }
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Article'
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
