<template>
  <v-select
    :items="items"
    label="テスト"
  ></v-select>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
})
</script>
<style>
</style>

