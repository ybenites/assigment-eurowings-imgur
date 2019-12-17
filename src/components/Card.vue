<template>
    <div class="card" @click="assignCardToModal">
        <div class="card__image">
            <img :src="card.link" class="img-responsive" :alt="card.title" />
        </div>
        <div class="card__content">
            <p class="card__description">
                {{card.title}}
            </p>
            <i class="material-icons">more</i>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        card:Object
    },
    methods: {
        assignCardToModal(){
            this.$store.dispatch('gallery/assignChosenCard',this.card);
        }
    }
}
</script>
<style lang="scss" scoped>
    .img-responsive{
        max-width: 100%;
        height: auto;
    }
    .card{
        cursor: pointer;
        margin: .5rem 0 1rem 0;
        background-color: #fff;
        -webkit-transition: -webkit-box-shadow .25s;
        transition: -webkit-box-shadow .25s;
        transition: box-shadow .25s;
        transition: box-shadow .25s, -webkit-box-shadow .25s;
        border-radius: 2px;
        width: 250px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid rgba(0,0,0,0.14);
        &:hover{
            // border: none;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
        }

        &__image{
            height: 320px;
            overflow: hidden;
            img{
                display: block;
                border-radius: 2px 2px 0 0;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                width: 100%;
            }
        }
        &__content{
            padding: 24px;
            border-radius: 0 0 2px 2px;
            display: flex;
            justify-content: space-between;
        }
        &__description{
            margin: 0;
            height: 24px;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 15px;
        }
    }
</style>