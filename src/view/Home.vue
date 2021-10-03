<template>
  <div class="home">
    <HeaderView />
    <!-- <p
      v-if="error"
      class="text-red-500"
    >{{ error }}</p> -->
    <WordImg />
    <!-- <div v-if="isActivated" class="text-center text-white">
      <p>{{ shortenAddress(address) }}</p>
      <p>{{ balance }} ETH</p>
      <p>
        network:
        <span class="capitalize">
          {{ chainId ? displayChainName(chainId) : '' }}
        </span>
      </p>
    </div> -->
    <div class="desc">
      <p>NFT to the moon 🚀</p>
    </div>
    <div class="openSea">
      <button class="btn-opensea" type="button" @click="toPage">
        Buy at OpenSea
      </button>
    </div>
    <vdapp-board />
  </div>
</template>

<script>
  import { onMounted } from 'vue'
  import HeaderView from '../components/Header.vue'
  import WordImg from '../components/WordImg.vue'
  import { useEthers, displayChainName, shortenAddress } from 'vue-dapp'
  import useLink from '../hooks/useLink'
  import useTheme from '../hooks/useTheme'

  export default {
    name: 'Home',
    components: {
      HeaderView,
      WordImg,
    },

    setup() {
      const { address, balance, chainId, isActivated } = useEthers()
      const [link2] = useLink()
      const [setTheme] = useTheme()

      const toPage = () => {
        link2('https://opensea.io/')
      }

      onMounted(() => {
        setTheme()
      })

      return {
        // address,
        // status,
        // error,
        // chainId,
        // balance,
        // open,
        // disconnect,
        // displayEther,
        // displayChainName,
        shortenAddress,
        address,
        balance,
        chainId,
        displayChainName,
        isActivated,
        toPage,
      }
    },
  }
</script>

<style scopted>
  .home {
    @apply h-full flex flex-wrap justify-center bg-white dark:bg-black;
  }
  .openSea {
    @apply w-11/12 sm:w-3/12;
  }
  .btn-opensea {
    @apply px-6 py-2 inline-block flex justify-center
    border-solid border-1 border-light-white w-full
    bg-transparent text-white border-white text-xl cursor-pointer
    sm:rounded-3xl
    hover:bg-black focus:outline-none;
  }
  .desc {
    @apply text-white mb-3 flex justify-center w-full;
  }
</style>
