<template>
  <div>
    <div class="links">
      <router-link
        id="debit-card"
        to="myDebitCards"
        class="link cards-link"
        :class="{ activeRouter: showRouter === 'myDebitCards' }"
        >My debit cards</router-link
      >
      <router-link
        id="loan"
        to="loan"
        class="link"
        :class="{ activeRouter: showRouter === 'loan' }"
        >Loan</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'links',
  computed: {
    showRouter() {
      return this.$route.name
    },
  },
}
</script>

<style lang="scss" scoped>
.links {
  text-align: left;
  .link {
    font-size: 16px;
    text-decoration: none !important;
    color: grey;
  }
  .activeRouter {
    font-weight: bold;
    color: black !important;
  }
  .cards-link {
    margin-right: 25px;
  }
}
@media (max-width: 1023px) {
  .links {
    margin-top: 15px;
    .activeRouter {
      color: white !important;
    }
  }
}
</style>
