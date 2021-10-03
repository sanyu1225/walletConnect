<template>
  <div class="header">
    <div class="header__title">
      <img class="logo" src="@/assets/doge.png" alt="logo" />
      DOGE
    </div>
    <div class="btn-wrap">
      <button
        class="btn"
        type="button"
        :disabled="status === 'connecting'"
        @click="isActivated ? disconnect() : open()"
      >
        <div v-if="status === 'connected'" class="circle" />
        {{
          status === 'connected'
            ? shortenAddress(address)
            : status === 'connecting'
            ? 'Connecting...'
            : 'Connect'
        }}
      </button>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import {
    useBoard,
    useEthers,
    useWallet,
    displayChainName,
    displayEther,
    shortenAddress,
  } from 'vue-dapp'

  export default defineComponent({
    name: 'Header',
    setup() {
      const { open } = useBoard()
      const { status, disconnect, error } = useWallet()
      const { address, balance, chainId, isActivated } = useEthers()

      return {
        isActivated,
        address,
        status,
        error,
        chainId,
        balance,
        open,
        disconnect,
        displayEther,
        displayChainName,
        shortenAddress,
      }
    },
  })
</script>

<style scoped>
  .header {
    @apply w-full flex flex-wrap sm:justify-between;
  }
  .header__title {
    @apply flex justify-center items-center;
  }
  .logo {
    max-width: 42px;
  }
  .header__title {
    @apply text-xl text-center w-full pt-3 text-white sm:w-3/12;
  }
  .btn-wrap {
    @apply flex w-full flex justify-center items-center pt-2 sm:w-3/12;
  }
  .btn {
    @apply px-6 py-2 rounded-3xl inline-block flex justify-center items-center
    border-solid border-1 border-light-white
    bg-transparent text-white border-white text-xl cursor-pointer
    hover:bg-black focus:outline-none
    disabled:cursor-default disabled:opacity-70 disabled:bg-blue-400;
  }
  .circle {
    @apply w-2 h-2 mr-3 bg-green-400 rounded-3xl;
  }
</style>
