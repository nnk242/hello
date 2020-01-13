<template>
    <heart v-if="suit === 'heart'"/>
    <diamond v-else-if="suit === 'diamond'"/>
    <club v-else-if="suit === 'club'"/>
    <spade v-else-if="suit === 'spade'"/>
</template>

<script>
    import heart from '@/components/Card/Suit/heart'
    import diamond from '@/components/Card/Suit/diamond'
    import club from '@/components/Card/Suit/club'
    import spade from '@/components/Card/Suit/spade'

    export default {
        name: "suit",
        components: {
            heart, diamond, club, spade
        },
        props: {
            suit: {
                type: String,
                required: true
            }
        }
    }
</script>
