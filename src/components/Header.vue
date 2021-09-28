<template>
  <div class="header w-full flex flex-wrap">
    <div class="header__title">DEMO</div>
    <div class="btn-wrap flex w-full flex justify-center pt-2">
      <button
        class="btn"
        type="button"
        :disabled="status === 'connecting'"
        @click="isActivated ? disconnect() : open()"
      >
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
  .header__title {
    @apply text-xl text-center w-full pt-3 text-white;
  }
  .btn {
    @apply px-6 py-2 rounded-3xl inline-block flex justify-center
    border-solid border-1 border-light-white
    bg-transparent text-white border-white text-xl cursor-pointer
    hover:bg-black focus:outline-none
    disabled:cursor-default disabled:opacity-70 disabled:bg-blue-400;
  }
</style>
