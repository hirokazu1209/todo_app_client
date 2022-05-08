<template>
  <v-form>
    <v-text-field
      v-model="value"
      :rules="rules"
      counter="25"
      hint="文字数"
      :label="label"
    ></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rules: [(v: string) => v.length <= 25 || '25文字までとなります'],
    }
  },
  setup() {
    const value = ref("");
    return {
      value
    }
  }
})

</script>

