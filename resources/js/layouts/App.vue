<template lang="pug">
nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-dark
    .container-fluid
        .collapse.navbar-collapse
            ul.navbar-nav.me-auto.mb-2.mb-md-0
                li.nav-item
                    router-link.nav-link(to="/") Главная
                li.nav-item.dropdown
                    a.nav-link.dropdown-toggle(href="#" id="dropdown1" data-bs-toggle="dropdown" aria-expanded="false") Каталог
                    ul.dropdown-menu(aria-labelledby="dropdown1")
                        template(v-for="group in groups")
                            li
                                router-link.dropdown-item(:to="{ name: 'Catalog', params: { id: group.id }}") {{ group.name }}
main(role="main" class="flex-shrink-0")
    .container
        router-view(:key="$route.fullPath")
</template>

<script setup lang="ts">
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { provideApolloClient, useResult } from '@vue/apollo-composable'
import { useGroupsQuery } from "../../../graphql/generated";

const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
})
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})
provideApolloClient(apolloClient)

const { result, loading, error } = useGroupsQuery()

const groups = useResult(result, null, data => data.groups)
</script>

<style lang="stylus" scoped>
main
	.container
		padding: 60px 15px 0;
</style>
