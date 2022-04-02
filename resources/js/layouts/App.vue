<template lang="pug">
nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-dark
    .container-fluid
        .collapse.navbar-collapse
            ul.navbar-nav.me-auto.mb-2.mb-md-0
                li.nav-item
                    router-link.nav-link(to="/") Главная
main(role="main" class="flex-shrink-0")
    .container
        router-view(:key="$route.fullPath")
</template>

<script setup lang="ts">
</script>

<style lang="stylus" scoped>
main
	.container
		padding: 60px 15px 0;
</style>
