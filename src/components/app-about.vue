<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">About</h1>
      </div>
    </div>
    <div class="container">
      <h3>What is Easely?</h3>
      <p>
        Easely is an unofficial API and client for accessing the HUCS EASEL website. It was made as a more functional and attractive alternative to the traditional site, with maintaining as much functionality as possible.
      </p>
      <h3>Affiliation</h3>
      <p>
        Easely is not affiliated with Harding University, the Harding University Computer Science department, or DormNet.
      </p>
      <h3>Security</h3>
      <p>
        Easely hashes account passwords with jBCrypt, however EASEL credentials are stored in plain text. You are using this service at your own risk. Please ensure your EASEL password is unique and not used with any other services.
      </p>
      <p>
        While I have no intention to exploit EASEL credentials, it's important to disclose that I, or anyone with access to the database, could.
      </p>
      <h3>Source</h3>
      <p>
        Easely is completely open source. You can view the project on <a href="https://github.com/Easely">GitHub</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="scss" scoped>

</style>
