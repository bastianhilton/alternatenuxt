<template>
  <div>
    <form v-for="pdf_template in pdf_templates" :key="pdf_template.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="pdf_templateAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addPDF_TEMPLATE" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Active</td>
              <td>
                <input v-model="active" type="checkbox" />{{ pdf_template.active }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Template Name</td>
              <td>
                <input v-model="name" type="text" required />{{ pdf_template.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Orientation</td>
              <td>
                <input v-model="orientation" type="text" />{{ pdf_template.orientation }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <input v-model="content" type="textarea" />{{ pdf_template.description }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Header</td>
              <td>
                <input v-model="header" type="text" placeholder="#" required />{{ pdf_template.header }}
              </td>
            </tr>
            
            <tr>
              <td style="text-align: right;">Footer</td>
              <td>
                <input v-model="footer" type="text" />{{ pdf_template.footer }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Page Size</td>
              <td>
                <input v-model="page_size" type="text" />{{ pdf_template.page_size }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <input v-model="height" type="text" />{{ pdf_template.height }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Type</td>
              <td>
                <input v-model="type" type="text" />{{ pdf_template.type }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin allHeader</td>
              <td>
                <input v-model="margin_header" type="text" />{{ pdf_template.margin_header }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Bottom</td>
              <td>
                <input v-model="margin_bottom" type="text" />{{ pdf_template.margin_bottom }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Left</td>
              <td>
                <input v-model="margin_left" type="text" />{{ pdf_template.margin_left }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Right</td>
              <td>
                <input v-model="margin_right" type="text" />{{ pdf_template.margin_right }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Margin Top</td>
              <td>
                <input v-model="margin_top" type="text" />{{ pdf_template.margin_top }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <input v-model="assigned_to" type="text" />{{ pdf_template.assigned_to }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import  gql from 'graphql-tag'
import  pdf_templates from '~/graphql/mutations/marketing/pdf_templates'

const DELETE_PDF_TEMPLATE = gql `
  mutation delete_pdf_templates($id: Int!){
  delete_pdf_templates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_PDF_TEMPLATE = gql `
  mutation update_pdf_templates($id: Int!){
  update_pdf_templates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Pdf Template'
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
   async deletePdf_template(pdf_template){
    await this.$apollo.mutate({
        mutation: DELETE_PDF_TEMPLATE,
        variables: {
          id: pdf_template.id
        },
        refetchQueries: [
          {
            query: pdf_templates
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/pdf_templates'})
            }).catch(err => console.log(err));
    },
    async updatePdf_template(pdf_template){
    await this.$apollo.mutate({
        mutation: UPDATE_PDF_TEMPLATE,
        variables: {
          id: pdf_template.id
        },
        refetchQueries: [
          {
            query: pdf_templates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    pdf_templates: {
      query: pdf_templates,
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
