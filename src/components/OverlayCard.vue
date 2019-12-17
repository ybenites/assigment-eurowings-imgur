<template>
    <div class="overlay-card">
        <div class="overlay-card__box"> 
            <div class="bigcard">
                <div class="bigcard__title">{{chosenCard.title}}</div> 
                <img :src="chosenCard.link" class="bigcard__image" :alt="chosenCard.title" />
                <p class="bigcard__description" v-if="chosenCard.description">
                    {{chosenCard.description}}
                </p>
            </div>
            <div class="votes">
                <div class="votes__item">
                    <i class="material-icons">file_upload</i><span>{{chosenCard.ups}}</span>
                </div>
                <div class="votes__item">
                    <i class="material-icons">visibility</i><span>{{chosenCard.views}}</span>
                </div>
            </div>
        </div>
        <button class="overlay-card__close" @click="$emit('closeOverlay')">X</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters({
            chosenCard: 'gallery/getChosenCard'
        })
    }
}
</script>
<style lang="scss" scoped>
$height-votes-box: 56px;
.overlay-card{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    &__box{
        position:relative;
        color:#333;
        background-color: #fff;
        overflow: hidden;
        max-height: 95%;
        max-width: 650px;
        height: auto;
        padding: 20px 0;
        // padding: 45px 40px 25px;
    }
    &__close{
        position: absolute;
        right: 15px;
        top: 15px;
        background: transparent;
        border: none;
        font-size: 20px;
        outline: none;
        color: rgba(256,256,256,0.7);
        font-weight: 500;
        padding: 0;
        &:hover{
            color: rgba(256,256,256,1);
            transition: color 0.35s;
        }
    }
}
.bigcard{
    font-family: Roboto;
    height: calc( 100vh - #{$height-votes-box});
    overflow: scroll;
    padding-bottom: $height-votes-box;
    padding-left: 15px;
    padding-right: 15px;
    &__title{
        font-size: 24px;
        font-weight: 300;
        text-align: center;
        padding: 15px 20px;
    }
    &__image{
        max-height: 100%;
        max-width: 100%;
        height: auto;
        width: auto;
        margin: 0 auto;
        display: block;
        border: 1px solid rgba(0,0,0,0.14);
    }
    &__description{
        padding: 24px 20px 15px;
        margin: 0 auto;
        max-width: 650px;
        font-weight: 100;
    }
}
.votes{
    display: flex;
    justify-content: space-around;
    padding: 15px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    &__item{
        color: $primary-color;
        i{
            display: inline-block;
            vertical-align: middle;
        }
        span{
            display: inline-block;
            vertical-align: middle;
            padding-left: 5px;
        }
    }
}
</style>