<template>
    <div class="stage">
        <div class="card">
            <div class="card-behind">
                <img :src="img.cardBehind">
            </div>
        </div>
        //JQK
        <div class="card">
            <div class="card-top">
                <h4 class="black-text">J</h4>
                <club/>
            </div>
            <div class="card-middle">
                <img :src="img.jc">
            </div>
            <div class="card-bottom">
                <club/>
                <h4 class="black-text">J</h4>
            </div>
        </div>


        //suit diamond
        <div class="card">
            <div class="card-top">
                <h4 class="red-text">A</h4>
                <diamond/>
            </div>
            <div class="card-middle">
                <diamond/>
            </div>
            <div class="card-bottom">
                <diamond/>
                <h4 class="red-text">A</h4>
            </div>
        </div>
        //suit heart
        <div class="card">
            <div class="card-top">
                <h4 class="red-text">A</h4>
                <heart/>
            </div>
            <div class="card-middle">
                <heart/>
            </div>
            <div class="card-bottom">
                <heart/>
                <h4 class="red-text">A</h4>
            </div>
        </div>
        //suit spade
        <div class="card">
            <div class="card-top">
                <h4 class="black-text">A</h4>
                <spade/>
            </div>
            <div class="card-middle">
                <spade/>
            </div>
            <div class="card-bottom">
                <spade/>
                <h4 class="black-text">A</h4>
            </div>
        </div>
        //suit club
        <div class="card">
            <div class="card-top">
                <h4 class="black-text">A</h4>
                <club/>
            </div>
            <div class="card-middle">
                <club/>
            </div>
            <div class="card-bottom">
                <club/>
                <h4 class="black-text">A</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import spade from '@/components/Card/Suit/spade'
    import heart from '@/components/Card/Suit/heart'
    import diamond from '@/components/Card/Suit/diamond'
    import club from '@/components/Card/Suit/club'

    import jc from '@/assets/card/JQK/jc.svg'
    import jd from '@/assets/card/JQK/jd.svg'
    import jh from '@/assets/card/JQK/jh.svg'
    import js from '@/assets/card/JQK/js.svg'

    import qc from '@/assets/card/JQK/jc.svg'
    import qd from '@/assets/card/JQK/jd.svg'
    import qh from '@/assets/card/JQK/jh.svg'
    import qs from '@/assets/card/JQK/js.svg'

    import kc from '@/assets/card/JQK/jc.svg'
    import kd from '@/assets/card/JQK/jd.svg'
    import kh from '@/assets/card/JQK/jh.svg'
    import ks from '@/assets/card/JQK/js.svg'

    import cardBehind from '@/assets/card/behind.svg'

    export default {
        name: "card",
        components: {
            spade,
            heart,
            diamond,
            club
        },
        props: {
            dataCard: {
                type: Object,
                required: false
            }
        },
        data: () => {
            return {
                ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
                suits: ['♥', '♦', '♠', '♣'],
                cards: [],
                suitColor: {
                    '♠': 'black',
                    '♣': 'black',
                    '♦': 'red',
                    '♥': 'red',
                },
                shuffleSpeed: 'shuffleMedium',
                shuffleTypes: ['Slow', 'Medium', 'Fast'],
                img: {
                    jc, jd, jh, js,
                    qc, qd, qh, qs,
                    kc, kd, kh, ks,
                    cardBehind
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/styles/color.scss";

    .card {
        display: flex;
        background-color: $white;
        box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: .375em;
        width: 6.25em;
        height: 8.75em;
        overflow: hidden;
        will-change: transform;
        padding: 1px;

        &-top, &-bottom {
            text-align: center;
            width: 20%;

            h4 {
                margin: auto;
            }
        }

        &-bottom {
            margin: auto auto 0 auto;

            h4, svg {
                transform: rotate(180deg);
            }
        }

        &-behind, &-middle {
            img {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }

        &-middle {
            width: 60%;
            margin: auto;
            padding: 2px;
        }

        &-behind {
            background: #f2f2f2;
            border-radius: .375em;
            padding: 3px;
            margin: 3px;

            img {
                transform: rotate(35deg);
            }
        }
    }

</style>
