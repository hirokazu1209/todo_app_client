<template>
  <p class="a-title">{{ title }}</p>
  
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss"scoped>
.a-title {
  color: #475776;
  font-weight: bold;
  font-size: large;
  text-align: left;
}
</style>
