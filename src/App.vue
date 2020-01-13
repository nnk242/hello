<template>
    <div id="app">
        <arena />
    </div>
</template>

<script>
    import arena from './components/Arena/index.vue'

    export default {
        name: 'app',
        components: {
            // card
            arena
        },
        data: () => {
            return {
                card: {
                    rank: 'K',
                    //heart, diamond, club, spade
                    suit: 'spade',
                }
            }
        },
        mounted() {
            // eslint-disable-next-line no-console
            console.log(123)
        }
    }
</script>
