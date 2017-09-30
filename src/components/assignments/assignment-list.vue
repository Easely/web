<template>
  <div>
    <ul>
      <template v-for="assignment in assignments">
        <li>{{ assignment.name }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Assignment-List',
    props: {
      assignments: {
        type: Array,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
