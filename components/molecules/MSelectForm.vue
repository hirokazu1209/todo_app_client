<template>
  <v-select
    :items="items"
    :label="label"
  ></v-select>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
    },
    label: {
      type: String
    }
  }
})
</script>
<style>
</style>
