<template>
  <div class="card">
    <div class="card-row row no-wrap items-center">
      <div class="space"></div>
      <img
        src="../assets/aspire-logo.png"
        alt="Aspire Singapore"
        class="logo"
      />
    </div>
    <div class="card-details">
      <h1 class="name">Mark Henry</h1>
      <h1 class="card-number">. . . .     . . . .     . . . .</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #01d167;
  border-radius: 20px;
  min-height: 250px;
}
.card-row {
  display: flex;
  position: relative;
  width: 100%;
}
.logo {
  margin-top: 10px;
  width: 7rem;
  margin-right: 15px;
}
.card-details {
  text-align: left;
  color: white;
  margin-left: 30px;
}
.card-number {
  font-size: 50px;
}
</style>
