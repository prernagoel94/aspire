<template>
  <div class="row">
    <div class="column">
      <div class="row card-row"><Card /></div>
      <div class="row"></div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import Card from '@/components/card'
export default {
  name: 'myDebitCards',
  components: {
    Card,
  },
}
</script>

<style lang="scss">
.card-row {
  width: 50%;
}
</style>
