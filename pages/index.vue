<!--コメントアウト
<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input type="text" name="addName" id ="addName" placeholder="タスクを入力してください">
      <ATextField
        :type=inputType
        :placeholder=placeholderContents
        :v-model="value"
        />
      <button id="addButton" class="button button--green">追加</button>
    </div>
    <div class="Filter">
      <button class="button button--gray is-active">全て</button>
      <button class="button button--gray">作業前</button>
      <button class="button button--gray">作業中</button>
      <button class="button button--gray">完了</button>
    </div>
    <table class="Lists">
      <thead>
        <tr>
          <th>タスク</th>
          <th>登録日時</th>
          <th>状態</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>テスト</td>
          <td>2020-04-30 17:00</td>
          <td><button class="button button--yet">作業前</button></td>
          <td><button class="button button--delete">削除</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
-->

<template>
  <div class="container">
    <h1>Todoリスト</h1>
    <form>
      <div class="form-group">
        <label>新規リスト</label>
        <input type="text" class="#" placeholder="入力してください" v-model=>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const value = ref("");
    return {
      value
    }
  }
})
</script>
<style>

</style>
