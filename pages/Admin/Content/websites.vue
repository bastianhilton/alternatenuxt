<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-website"><input type="submit" class="btn btn-warning" value="Add New Websites"></a>
      </div>
    </nav>
    <br>
    <div class="table table-responsive">
      <div class="row">
        <div class="col-sm-4" v-for="websites in websites" :key="websites.id">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" :alt="websites.name" />
            <div class="card-body">
              Website Name: <h5 class="card-title">{{ websites.name }}</h5>
              Category: <p class="card-text">{{ websites.category }}</p>
              <a :href="websites.url" class="btn btn-primary" target="_blank">Enter Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import websites from '~/graphql/queries/content/website'

  export default {
    data() {
      return {
        websites: [],
      }
    },
    apollo: {
      websites: {
        prefetch: true,
        query: websites
      }
    },
    head: {
      title: 'Websites'
    }
  }

</script>
