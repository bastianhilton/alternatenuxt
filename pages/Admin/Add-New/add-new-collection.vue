<template>
    <div>
        <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Collection" @click="addCollection" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Collection</a>
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
                        <td style="text-align: right;">Collection Name</td>
                        <td><input id="collectionsName" v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><input id="collectionsName" v-model="description" type="textarea" required /></td>
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
                        <td><div class="file-upload-wrapper">
  <input
    type="file"
    id="input-file-now"
    class="file-upload-input"
    data-mdb-file-upload="file-upload"
    data-mdb-accepted-extensions="image/*"
  />
</div></td>
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
                        <table class="table" >
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Title</td>
                                        <td><input v-model="meta_title" type="text" value="Collection Url" required /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Keywords</td>
                                        <td><input v-model="meta_keywords" type="text" value="Collection Keywords" /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Description</td>
                                        <td><input
  v-model="meta_description" type="textarea" value="Collection Description" rows="10" cols="50" /></td>
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

import collections from "~/graphql/queries/shop/collections";

const ADD_COLLECTIONS = gql`
    mutation ($name:String!,$description:String!,$image:String!,$meta_description:String!,$meta_keywords:String!,$meta_title:String!){
    insert_collections(objects: {name: $name, description: $description, image: $image, meta_description: $meta_description, meta_title: $meta_title, meta_keywords: $meta_keywords}) {
        affected_rows
        returning {
            name
            description
            image
            meta_description
            meta_keywords
            meta_title
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        description: " ",
        image: " ",
        meta_description: " ",
        meta_keywords: " ",
        meta_title: " ",
        
      }
  },
    head: {
        title: 'Add New Collection'
    }, 
   /* eslint-disable camelcase */
  methods: {
      async addCollection() {
            const name = this.name;
            const description = this.description;
            const image = this.image;
            const meta_description = this.meta_description;
            const meta_keywords = this.meta_keywords;
            const meta_title = this.meta_title;
            await this.$apollo.mutate({
                mutation: ADD_COLLECTIONS,
                variables: {
                    name,
                    description,
                    image,
                    meta_description,
                    meta_keywords,
                    meta_title,
                 },
        update: (cache, { data: { insertCollections }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCollection = insertCollections.returning;
                            console.log(insertedCollection)
                            cache.writeQuery({
                                query: collections
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/collections'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.image = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.meta_title = ' ';
            },
            onFileAdded(e) {},
            onError(e) {},
            onSuccess(e) {},
            onComplete(e) {}
        },
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