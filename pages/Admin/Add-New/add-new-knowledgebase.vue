<template>
  <div>
    <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Knowledgebase" @click="addKnowledgebase" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Knowledgebase</a>
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
                      <td style="text-align: right;">Knowledgebase Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Content</td>
                      <td>
                        <vue-simplemde :highlight="true" v-model="content" preview-class="markdown-body"
                          ref="markdownEditor" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Resolution</td>
                      <td>
                        <input v-model="resolution" type="textarea" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Author</td>
                      <td>
                        <input v-model="author" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Approver</td>
                      <td>
                        <input v-model="approver" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Revision</td>
                      <td>
                        <input v-model="revision" type="number" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Status</td>
                      <td>
                        <select name="status" id="status">
                          <option value="Draft">Draft</option>
                          <option value="review">In Review</option>
                          <option value="private">Private</option>
                          <option value="public">Public</option>
                          <option value="expired">Expired</option>
                        </select>
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
  import gql from "graphql-tag";

  import knowledgebases from "~/graphql/queries/system/knowledgebase";

  const ADD_KNOWLEDGEBASES = gql `
    mutation ($name: String!,$status: String!,$revision: String!,$resolution: String!,$approver: String!,$author: String!,$content: String!){
    insert_knowledgebases(objects: {name: $name,status: $status,revision: $revision,resolution: $resolution,approver: $approver,author: $author,content: $content}) {
        affected_rows
        returning {
            name
            status
            revision
            resolution
            approver
            author
            content
    }
  }
}`;


  export default {
    data() {
      return {
        content: [],
        countries: [],
        thumbnail: " ",
        name: " ",
        status: " ",
        revision: " ",
        resolution: " ",
        approver: " ",
        author: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Knowledgebase'
    },

    methods: {
      async addKnowledgebase({
        target
      }) {
        const name = this.name;
        const status = this.status;
        const revision = this.revision;
        const resolution = this.resolution;
        const approver = this.approver;
        const author = this.author;
        const content = this.content;

        await this.$apollo.mutate({
          mutation: ADD_KNOWLEDGEBASES,
          variables: {
            name,
            status,
            revision,
            resolution,
            approver,
            author,
            content,
          },
          update: (cache, {
            data: {
              insertKnowledgebases,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedKnowledgebase = insertKnowledgebases.returning;
              console.log(insertedKnowledgebase)
              cache.writeQuery({
                query: knowledgebases
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../system/knowledgebases'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.status = ' ';
        this.revision = ' ';
        this.resolution = ' ';
        this.approver = ' ';
        this.author = ' ';
        this.content = ' ';
      },
    },
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
