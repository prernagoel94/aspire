<template>
  <div>
    <div class="recent-transactions">
      <span class="transactions">Recent Transactions</span>
      <font-awesome-icon class="icon" icon="caret-down" />
    </div>
    <span v-for="(d, index) in dummyData" :key="index">
      <div class="data">
        <span class="info">
          <div class="name">{{ d.name }}</div>
          <div class="date">{{ d.date }}</div>
          <div class="action" v-if="d.action === 'Refund'">
            Refund on debit card
          </div>
          <div v-else>Charged to debit card</div>
        </span>
        <span class="amount">
          <span v-if="d.action === 'Refund'" class="refund">+</span>
          <span v-else>-</span
          ><span :class="{ refund: d.action === 'Refund' }"
            >S$ {{ d.amount }}</span
          >
        </span>
      </div>
      <hr :class="[index < dummyData.length - 1 ? 'line' : 'full-line']" />
    </span>
  </div>
</template>

<script>
const dummyData = [
  {
    name: 'Hamleys',
    date: '20 May 2020',
    action: 'Refund',
    amount: '150',
  },
]
export default {
  name: 'recent-transactions',
  data: () => {
    return {
      dummyData,
    }
  },
}
</script>

<style lang="scss" scoped>
.recent-transactions {
  border: 1px solid #80808014;
  margin: 30px 20px;
  padding: 20px;
  background: #d8eef58c;
  display: flex;
  .transactions {
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
.data {
  border-left: 1px solid #8080806e;
  border-right: 1px solid #8080806e;
  padding: 10px 30px;
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -30px;
  .info {
    flex: 2;
    display: inline-block;
    text-align: start;
    .name {
      font-weight: bold;
      font-size: 15px;
    }
    .date {
      color: gray;
    }
    .action {
      color: #1372c3;
      font-weight: bold;
    }
  }
  .amount {
    flex: 1;
    text-align: end;
    font-weight: bold;
    .refund {
      color: #01d167;
    }
  }
}
.line {
  width: 80%;
  margin-top: 0;
}
.full-line {
  width: 90%;
  margin-top: 0;
}
@media (max-width: 1023px) {
  .full-line {
    width: 88%;
  }
}
</style>
