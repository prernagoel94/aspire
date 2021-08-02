<template>
  <div class="card-details">
    <span class="details">Card Details</span>
    <font-awesome-icon class="icon" icon="caret-down" />
  </div>
</template>

<script>
export default {
  name: 'card-details',
}
</script>

<style lang="scss" scoped>
.card-details {
  border: 1px solid #80808014;
  margin: 30px 20px;
  padding: 20px;
  background: #d8eef58c;
  display: flex;
  .details {
    flex: 10;
    text-align: start;
    font-size: 15px;
    font-weight: bold;
  }
  .icon {
    flex: 1;
    text-align: end;
  }
}
</style>
