<template>
  <div class="outer-div">
    <div class="column">
      <div><card /></div>
      <div v-if="!isMobile"><card-menu /></div>
    </div>
    <div v-if="!isMobile" class="column">
      <card-details /><recent-transactions />
    </div>
  </div>
</template>

<script>
import Card from '@/components/card'
import CardMenu from '@/components/card-menu'
import CardDetails from '../components/card-details.vue'
import RecentTransactions from '../components/recent-transactions.vue'
export default {
  name: 'myDebitCards',
  components: {
    Card,
    CardMenu,
    CardDetails,
    RecentTransactions,
  },
  data: () => {
    return {
      fullWidth: 0,
    }
  },
  computed: {
    isMobile() {
      return this.fullWidth <= 1023
    },
  },
  methods: {
    handleResize() {
      this.fullWidth = screen.width
    },
  },
  mounted() {
    this.fullWidth = screen.width
    window.addEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss" scoped>
.outer-div {
  box-shadow: 1px 1px 4px 0px #948e8e;
  border-radius: 5px;
  display: flex;
  .column {
    flex: 1;
    padding: 30px;
  }
}
@media (max-width: 1023px) {
  .outer-div {
    flex-direction: column;
    box-shadow: none;
    .column {
      padding: 0;
    }
  }
}
</style>
