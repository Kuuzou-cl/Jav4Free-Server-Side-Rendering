<template>
    <div class="container">
        <div><h1>Categories</h1></div>
        <div>
      <a v-for="breed in breeds" :key="breed" class="breed">
        {{breed}}
      </a>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios.get('https://api.jav4free.tv/jav4free/categories')
    return { breeds: data.categories }
  },
}

</script>

