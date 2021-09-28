<template>
  <div class="home">
    <HeaderView />
    <!-- <p
      v-if="error"
      class="text-red-500"
    >{{ error }}</p> -->
    <WordImg />
    <div v-if="isActivated" class="text-center text-white">
      <p>{{ shortenAddress(address) }}</p>
      <p>{{ balance }} ETH</p>
      <!-- <p>
        network:
        <span class="capitalize">
          {{ chainId ? displayChainName(chainId) : '' }}
        </span>
      </p> -->
    </div>
    <div class="openSea">
      <button class="btn-opensea" type="button" @click="toPage">
        Buy at OpenSea
      </button>
    </div>
  </div>
  <vdapp-board />
</template>

<script>
  import { defineComponent, onMounted } from 'vue'
  import HeaderView from './components/Header.vue'
  import WordImg from './components/WordImg.vue'
  import { useEthers, displayChainName, shortenAddress } from 'vue-dapp'
  import useLink from './hooks/useLink'
  export default defineComponent({
    name: 'App',
    components: {
      HeaderView,
      WordImg,
    },

    setup() {
      const { address, balance, chainId, isActivated } = useEthers()
      const [link2] = useLink()

      const toPage = () => {
        link2('https://opensea.io/')
      }

      const setThemeMode = () => {
        if (localStorage.theme === 'dark' || !localStorage.theme) {
          document.querySelector('html').classList.add('dark')
        } else {
          document.querySelector('html').classList.remove('dark')
        }
      }
      onMounted(() => {
        setThemeMode()
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
  })
</script>

<style scopted>
  .home {
    @apply h-full flex flex-col justify-center items-center bg-white dark:bg-black;
  }
  .btn-opensea {
    @apply px-6 py-2 rounded-3xl inline-block flex justify-center
    border-solid border-1 border-light-white
    bg-transparent text-white border-white text-xl cursor-pointer
    hover:bg-black focus:outline-none
    disabled:cursor-default disabled:opacity-70 disabled:bg-blue-400;
  }
</style>
