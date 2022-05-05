<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="title"
            :rules="rules"
            counter="25"
            hint="テストの確認"
            label="姓名"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
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
      title: 'Preliminary report',
      rules: [v => v.length <= 25 || '25文字までとなります'],
    }
  },
  // setup() {

  // },
})
</script>

