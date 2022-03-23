export default ($axios) => () => ({
  // payloadを使いデータ取得の高速化
  getTodos(payload) {
    return $axios.get("/api/v1/todos", payload)
  },
})
