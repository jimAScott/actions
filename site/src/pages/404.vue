<template>
  <Layout>
    <h1>404</h1>
    <h2>Nothing to see here!!!</h2>
    <p>
      Whoooops! You have stumbled on a hole in our site. Maybe you would like to
      <g-link to="/"> go back to the begining and try again</g-link>? Try to
      avoid the hole next time.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Whoooops",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
