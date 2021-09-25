<template>
  <div class="flex flex-col justify-center items-center bg-white dark:bg-black">
    <HeaderView />
    <!-- <p
      v-if="error"
      class="text-red-500"
    >{{ error }}</p> -->

    <!-- <div
      v-if="isActivated"
      class="text-center"
    >
      <p>{{ shortenAddress(address) }}</p>
      <p>{{ displayEther(balance) }} ETH</p>
      <p>network: <span class="capitalize"> {{ chainId ? displayChainName(chainId) : '' }} </span></p>
    </div> -->

  </div>
  <vdapp-board />
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import HeaderView from './components/Header.vue'
export default defineComponent({
  name: 'App',
  components:{
    HeaderView
  },
  setup() {

    const setThemeMode = () =>{
      if (localStorage.theme === 'dark' || !localStorage.theme ) {
        document.querySelector('html').classList.add('dark')
      } else {
        document.querySelector('html').classList.remove('dark')
      }
    }
    onMounted(()=>{
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
      // shortenAddress,
    }
  },
})
</script>


