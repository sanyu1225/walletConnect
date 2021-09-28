<template>
  <Modal :modal-open="boardOpen" @close="close">
    <div class="wallet-item" @click="connectMetamask">
      <div class="item 123">
        <MetaMask style="width: 50px; height: 50px" />
    <div class="line"></div>

  </Modal>
</template>

<script>
  import { defineComponent, onMounted } from 'vue'
  import { useBoard, useWallet, Wallet } from 'vue-dapp'
  import Modal from './Modal.vue'
  import WalletConnect from './logos/WalletConnect.vue'
  import MetaMask from './logos/MetaMask.vue'

  export default defineComponent({
    components: {
      Modal,
      WalletConnect,
      MetaMask,
    },
    setup() {
      const { boardOpen, close } = useBoard()
      const { connect } = useWallet()

      onMounted(() => {
        console.log('fk')
      })

      const connectMetamask = async () => {
        console.log('Wallet: ', Wallet)
        await connect(Wallet.metamask)
        close()
      }

      return {
        boardOpen,
        close,
        connectMetamask,
      }
    },
  })
</script>

<style scoped>
  .wallet-item {
    @apply flex justify-center sm:w-sm py-8 px-10 cursor-pointer hover:bg-gray-100 m-2 rounded-xl;
  }
  .item {
    @apply flex flex-col justify-center space-y-4 items-center text-2xl;
  }

  .line {
    @apply border-b border-solid;
  }

  /* work in process */
  .wip {
    @apply opacity-50 hover:bg-white cursor-default;
  }
</style>
