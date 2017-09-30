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
    computed: {
      assignments: function () {
        return this.$store.state.Assignments.assignments;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
