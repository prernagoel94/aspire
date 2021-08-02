<template>
  <ul>
    <li>Freze card</li>
    <li>Set spend limit</li>
    <li>Replace card</li>
    <li>Google pay</li>
    <li>Cancel card</li>
  </ul>
</template>

<script>
export default {
  name: 'CardMenu',
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  background: #d5e8ef;
  border-radius: 11px;
  padding: 15px;
  li {
    display: table-cell;
    padding: 20px 0;
    font-size: 20px;
    padding: 0 10px;
    font-size: 14px;
    width: 20%;
  }
}
.cards:active {
  color: #01d167;
}
@media (max-width: 1023px) {
  ul {
    margin-top: 1px;
  }
}
</style>
