<template>
  <div>
    <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Website" @click="addWebsite" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Website</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody class="row">
                    <tr class="col-lg-6">
                      <td>
                        <label for="name">Website Name</label><br>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="url">Website URL</label><br>
                        <input v-model="url" type="text" name="Type" require>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="category">Website Category</label><br>
                        <select id="category" v-model="category" name="template" class="form-category">
                          <option v-for="category in categories" :key="category" :value="category">{{ category.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="shop">Shops for this website</label><br>
                        <select id="shop" v-model="shop" name="template" class="form-category">
                          <option v-for="shop in shops" :key="shop" :value="shop">{{ shop.name }}</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
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
import websites from "~/graphql/queries/content/website";
import categories from "~/graphql/queries/shop/categories"
import shops from "~/graphql/queries/shop/shops"

  const ADD_WEBSITES = gql `
    mutation MyMutation {
    insert_websites(objects: {created_at: "", id: "", name: "", shop: "", store: "", url: ""}) {
        affected_rows
        returning {
            name
            category
            url
            shop
            image
    }
  }
}`;

  export default {
    data() {
      return {
        url: [],
        name: " ",
        category: " ",
        shop: " ",
        image: " ",

      }
    },
    head: {
      title: 'Add New Website'
    },
    methods: {
      async addWebsite() {
        const name = this.name;
        const shop = this.shop;
        const category = this.category;
        const url = this.url;
        const image = this.image;
        await this.$apollo.mutate({
          mutation: ADD_WEBSITES,
          variables: {
            name,
            category,
            url,
            shop,
            image,
          },
          update: (cache, {
            data: {
              insertWebsites
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedWebsite = insertWebsites.returning;
              console.log(insertedWebsite)
              cache.writeQuery({
                query: websites
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../content/websites'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.category = ' ';
        this.url = ' ';
        this.shop = ' ';
        this.image = ' ';
      },

    },
    apollo: {
      categories: {
        prefetch: true,
        query: categories
      },
      shops: {
        prefetch: true,
        query: shops
      }
    },
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
