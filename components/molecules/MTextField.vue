<template>
  <v-form>
    <v-container>
      <v-row
        v-for="j in justify"
        :key="j"
        :justify="j"
        >
        <v-col
          v-for="k in 2"
          :key="k"
          md="4"
        >
          <v-text-field
            v-model="title"
            :rules="rules"
            counter="25"
            hint="文字数"
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
      justify: [
        'start',
      ],
    }
    // return {
    //   title: 'Preliminary report',
    //   rules: [v => v.length <= 25 || '25文字までとなります'],
    // }
  },
  // setup() {

  // },
})
</script>

