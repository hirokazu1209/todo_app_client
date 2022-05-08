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
      type: String
    },
    label: {
      type: String
    }
  }
})
</script>
<style>
</style>
