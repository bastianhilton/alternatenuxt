/* eslint-disable camelcase */
<template>
  <div>
    <form v-for="permission in permissions" :key="permission.id" method="POST" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="permissionAddOptions">
                <li>
                  <input type="submit" @click="addPermission" value="Save" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Permission Name</td>
              <td>
                <input type="text" v-model="name" required />{{ permission.name }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">Role</td>
              <td>
                <input type="text" v-model="role" />{{ permission.role }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">Create</td>
              <td>
                <input type="text" v-model="create" />{{ permission.create }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">Read</td>
              <td>
                <input type="text" v-model="read" />{{ permission.read }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">Update</td>
              <td>
                <input type="text" v-model="update" />{{ permission.update }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">Delete</td>
              <td>
                <input type="text" v-model="Delete" />{{ permission.delete }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <div class="form-check form-switch">
                  <vue-simplemde id="permissionDescription" v-model="content" />{{ permission.content }}
                </div>
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
  import  permissions from '~/graphql/mutations/system/permissions'

  const DELETE_PERMISSION = gql `
  mutation delete_permissions($id: Int!){
  delete_permissions(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

  const UPDATE_PERMISSION = gql `
  mutation update_permissions($id: Int!){
  update_permissions(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

  export default {
    head: {
      name: 'Edit Permission'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deletePermission(permission) {
        await this.$apollo.mutate({
          mutation: DELETE_PERMISSION,
          variables: {
            id: permission.id
          },
          refetchQueries: [{
              query: permissions
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../admin/system/role-manager'
          })
        }).catch(err => console.log(err));
      },
      async updatePermission(permission) {
        await this.$apollo.mutate({
          mutation: UPDATE_PERMISSION,
          variables: {
            id: permission.id
          },
          refetchQueries: [{
              query: permissions
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      permissions: {
        query: permissions,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
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

  li {
    display: inline-block;
  }

</style>
