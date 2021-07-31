<template>
  <div>
        导航栏 | 
        <router-link to="/">Chen</router-link> | 
        <router-link to="/xxx">Chen2</router-link>
        </div>
        <hr/>
        <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>
