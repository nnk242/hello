<template>
    <div class="stage">
        <div class="card" v-if="!dataCard">
            <div class="card-behind">
                <img :src="img.cardBehind">
            </div>
        </div>
        <div class="card" v-else>
            <div class="card-top">
                <h4 :class="arr_black.indexOf(dataCard.suit) === -1 ? 'red-text' : 'black-text'">{{ dataCard.rank }}</h4>
                <suit :suit="dataCard.suit"/>
            </div>
            <div class="card-middle">
                <template v-if="arr_rank_img.indexOf(dataCard.rank) === -1">
                    <suit :suit="dataCard.suit"/>
                </template>
                <template v-else>
                    <img-card :suit="dataCard.suit" :rank="dataCard.rank"/>
                </template>
            </div>
            <div class="card-bottom">
                <suit :suit="dataCard.suit"/>
                <h4 :class="arr_black.indexOf(dataCard.suit) === -1 ? 'red-text' : 'black-text'">{{ dataCard.rank
                    }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import suit from './Suit/index'
    import imgCard from './Rank/JQK/index'

    import cardBehind from '@/assets/card/behind.svg'

    export default {
        name: "card",
        components: {
            suit, imgCard
        },
        props: {
            dataCard: {
                type: Object,
                required: false
            }
        },
        data: () => {
            return {
                arr_rank_img: ['J', 'Q', 'K'],
                arr_black: ['club', 'spade'],
                ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
                suits: ['♥', '♦', '♠', '♣'],
                cards: [],
                img: {
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
