<template>
    <v-simple-table dark>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    New Link
                </th>
                <th class="text-left">
                    Original Link
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                    v-for="item in $store.state.moduleShortLink.links"
                    :key="item.name"
            >
                <td>
                    <router-link :to="item.short_link">
                        {{ item.short_link }}
                    </router-link>

                </td>
                <td>{{ item.link }}</td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>
