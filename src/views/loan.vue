<template>
  <div class="outer-div">
    <form>
      <p class="group">
        <label for="amount">Amount Required(in Rs.):</label>
        <input
          id="amount"
          v-model.number="amount"
          placeholder="Amount Required"
          required
        />
      </p>
      <p class="group">
        <label for="loan">Loan Term(in months):</label>
        <input
          id="loan"
          v-model.number="loanTerm"
          placeholder="Loan Term"
          required
        />
      </p>
      <div class="submit">
        <div class="space"></div>
        <div class="apply">
          <button id="apply" class="btn" @click="onSubmit">APPLY</button>
        </div>
      </div>
      <p v-if="error" class="error">
        {{ error }}
      </p>
    </form>

    <div v-if="isApproved && weeklyAmount !== 'paid'" class="approved">
      You loan has been Approved. Do you want to repay your weekly payment?
      <div class="repay-button">
        <button class="btn" id="repay" @click="onRepay">Repay</button>
      </div>
    </div>
    <div v-if="weeklyAmount === 'paid'" class="approved">
      You have repaid your weekly payment.
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'loan',
  components: {},
  data: () => {
    return {
      amount: 100,
      loanTerm: 1,
      status: 'none',
      weeklyAmount: 'unpaid',
      error: '',
    }
  },
  computed: {
    isApproved() {
      return this.status === 'approved'
    },
  },
  methods: {
    onSubmit() {
      this.error = ''
      if (this.amount < 100) {
        this.error = 'Amount should be greater than 100'
        return
      }
      axios({
        method: 'post',
        url: 'https://aspire-be-loan.azurewebsites.net/api/Loan',
        data: {
          amount: this.amount,
          loanTerm: this.loanTerm,
        },
      })
        .then((response) => {
          if (!response) {
            throw new Error('No response')
          }
          if (response && response.status !== 200) {
            throw new Error(response.status)
          }
          const { data } = response
          if (!data) {
            throw new Error('No data found')
          }
          this.status = response.data
        })
        .catch((error) => {
          console.log('There was an error:', error.response) // Logs out the error
        })
    },
    onRepay() {
      this.weeklyAmount = 'paid'
    },
  },
}
</script>

<style lang="scss" scoped>
.outer-div {
  box-shadow: 1px 1px 4px 0px #948e8e;
  border-radius: 5px;
  padding: 50px;
  .group {
    display: flex;
    label {
      flex: 1;
      text-align: start;
      font-weight: bold;
      font-size: 18px;
    }
    input {
      flex: 1;
      text-align: start;
      padding: 5px;
    }
  }
  .error {
    color: rgb(172, 27, 27);
    font-size: 20px;
    text-align: center;
  }

  .submit {
    display: flex;
    margin-top: 50px;
    .space {
      flex: 1;
    }
    .apply {
      flex: 1;
      text-align: end;
    }
    .btn {
      background-color: #01d167;
      border: #01d167;
      color: black;
      padding: 5px 15px;
      border-radius: 5px;
      font-size: 15px;
      cursor: pointer;
    }
  }
  .approved {
    color: #01d167;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    .btn {
      background-color: #202c94;
      border: #202c94;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 15px;
      cursor: pointer;
      margin-top: 40px;
    }
  }
  .repay-button {
    text-align: center;
  }
}
@media (max-width: 1023px) {
  .outer-div {
    box-shadow: none;
    padding: 20px;
  }
}
</style>
