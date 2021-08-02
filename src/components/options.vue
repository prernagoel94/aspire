<template>
  <ul>
    <li>Home</li>
    <li class="cards">Cards</li>
    <li>Loan</li>
    <li>Credit</li>
    <li>Sign Out</li>
  </ul>
</template>

<script>
export default {
  name: 'Options',
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  li {
    padding: 20px 0;
    font-size: 20px;
  }
}
.cards:active {
  color: #01d167;
}
@media (max-width: 1023px) {
  ul {
    display: flex;
    li {
      flex: 1;
      color: gray;
      padding: 0 0;
    }
  }
}
</style>
