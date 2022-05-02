<template>
  <div class="container">
    <h1>Todoリスト</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="3"
          >
            <v-text-field
              label="姓名"
              placeholder="山田太郎"
            ></v-text-field>
          </v-col>
        </v-row>
        <label>新規リスト</label>
        <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

// export default defineComponent({
export default {
  data() {
    return {
      form: {
        body: ""
      }
    }
  }
  // methods: {
  //   submit(): void {
  //     console.log(this.form)
  //   }
  }
  // setup() {
  //   const value = ref("");
  //   return {
  //     value
  //   }
  // }
</script>
<style>

</style>
