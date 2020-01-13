<template>
    <img :src="img.jh" v-if="suit=== 'heart' && rank==='J'">
    <img :src="img.jd" v-else-if="suit=== 'diamond' && rank==='J'">
    <img :src="img.jc" v-else-if="suit=== 'club' && rank==='J'">
    <img :src="img.js" v-else-if="suit=== 'spade' && rank==='J'">

    <img :src="img.qh" v-else-if="suit=== 'heart' && rank==='Q'">
    <img :src="img.qd" v-else-if="suit=== 'diamond' && rank==='Q'">
    <img :src="img.qc" v-else-if="suit=== 'club' && rank==='Q'">
    <img :src="img.qs" v-else-if="suit=== 'spade' && rank==='Q'">

    <img :src="img.kh" v-else-if="suit=== 'heart' && rank==='K'">
    <img :src="img.kd" v-else-if="suit=== 'diamond' && rank==='K'">
    <img :src="img.kc" v-else-if="suit=== 'club' && rank==='K'">
    <img :src="img.ks" v-else-if="suit=== 'spade' && rank==='K'">
</template>

<script>
    import jc from '@/assets/card/JQK/djc.svg'
    import jd from '@/assets/card/JQK/djd.svg'
    import jh from '@/assets/card/JQK/djh.svg'
    import js from '@/assets/card/JQK/djs.svg'

    import qc from '@/assets/card/JQK/dqc.svg'
    import qd from '@/assets/card/JQK/dqd.svg'
    import qh from '@/assets/card/JQK/dqh.svg'
    import qs from '@/assets/card/JQK/dqs.svg'

    import kc from '@/assets/card/JQK/dkc.svg'
    import kd from '@/assets/card/JQK/dkd.svg'
    import kh from '@/assets/card/JQK/dkh.svg'
    import ks from '@/assets/card/JQK/dks.svg'

    export default {
        name: "jqk",
        props: {
            suit: {
                type: String,
                required: true
            },
            rank: {
                type: String,
                required: true
            }
        },
        data: () => {
            return {
                arr_rank_img: ['J', 'Q', 'K'],
                img: {
                    jc, jd, jh, js,
                    qc, qd, qh, qs,
                    kc, kd, kh, ks
                }
            }
        }
    }
</script>

<style scoped>

</style>
