<template>
  <div class="balance">
    <div class="first-div">
      <p>Account balance</p>
      <p class="amount"><span class="dollar">S$</span> 3,000</p>
    </div>
    <div class="second-div">
      <button type="button" class="btn btn-primary">+ New card</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'balance',
}
</script>

<style lang="scss" scoped>
p {
  margin: 5px 0px;
}
.balance {
  display: flex;
}
.first-div {
  text-align: start;
  flex: 1;
}
.second-div {
  text-align: end;
  margin: auto;
  flex: 1;
}
.amount {
  font-size: 25px;
  font-weight: bold;
  .dollar {
    background-color: #01d167;
    color: white;
    padding: 2px 16px;
    border-radius: 4px;
    font-size: 14px !important;
  }
}
.btn {
  background-color: #0c3c84;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}
@media (max-width: 1023px) {
  .btn {
    border: none;
    color: rgb(74, 183, 219);
    background: none;
    font-size: 17px;
  }
}
</style>
