<template>
  <v-form>
    <v-text-field
      v-model="title"
      :rules="rules"
      counter="25"
      hint="文字数"
      label="姓名"
    ></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // props : {
  //   type: {
  //     type: String,
  //     default: '',
  //   }
  // },
  data() {
    return {
      title: '',
      rules: [v => v.length <= 25 || '25文字までとなります'],
    }
  },
  // setup() {

  // },
})
</script>

