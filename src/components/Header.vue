<template>
  <div class="header w-full flex flex-wrap ">
    <div class="w-full sm:pl-4 text-center">
      LOGO DEMO
    </div>
    <div class="btn-wrap flex w-full flex justify-center pt-2">
      <button
          @click="isActivated ? disconnect() : open()"
          class="btn"
          :disabled="status === 'connecting'"
      >{{ status === 'connected' ? "Disconnect" : status === 'connecting' ? "Connecting..." : "Connect" }}</button>
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
.btn {
  border: 1px solid white;
  @apply px-6 py-3 rounded-3xl inline-block flex justify-center flex
    bg-transparent text-white border-white text-xl cursor-pointer
    hover:bg-black focus:outline-none
    disabled:cursor-default disabled:opacity-70 disabled:bg-blue-400;
}
</style>