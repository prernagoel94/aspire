<template>
  <div>
    <div class="card-number">
      <p class="white-space"></p>
      <div class="show">Show card number</div>
    </div>
    <div class="card">
      <div class="card-number">
        <div class="white-space"></div>
        <div class="logo">
          <img src="../assets/aspire-logo.png" alt="Aspire Singapore" />
        </div>
      </div>
      <div class="card-details">
        <h1 class="name">Mark Henry</h1>
        <h2 class="number">1234 6789 0122 0205</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="scss" scoped>
.card-number {
  display: flex;
}
.white-space {
  flex: 1;
}
.card {
  background-color: #01d167;
  border-radius: 20px;
  min-height: 250px;
}
.show {
  font-weight: bold;
  color: #01d167;
  flex: 1;
  text-align: end;
}

.logo {
  width: 7rem;
  margin-right: 65px;
  flex: 1;

  text-align: end;
}
.card-details {
  text-align: left;
  color: white;
  margin-left: 30px;
}
</style>
