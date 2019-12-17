<template>
    <div class="container">
        <div class="row align-items-end">
            <div class="col-md-4">
                <div class="collection section">
                    <div class="collection__header">
                        <h4>Section</h4>
                    </div>
                    <div class="collection__body">
                        <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonSection==='hot'}" @click="clickButtonSection('hot')" >hot</button>
                        <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonSection==='top'}" @click="clickButtonSection('top')" >top</button>
                        <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonSection==='user'}" @click="clickButtonSection('user')" >user</button>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <transition name="fade">
                    <div class="collection sort" v-if="defaultActiveButtons.activeButtonSection=='user'">
                        <div class="collection__header">
                            <h4>Sort</h4>
                        </div>
                        <div class="collection__body">
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonSort==='viral'}" @click="defaultActiveButtons.activeButtonSort='viral'" >viral</button>
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonSort==='top'}" @click="defaultActiveButtons.activeButtonSort='top'" >top</button>
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonSort==='time'}" @click="defaultActiveButtons.activeButtonSort='time'" >time</button>
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonSort==='rising'}" @click="defaultActiveButtons.activeButtonSort='rising'" >rising</button>
                        </div>
                    </div>
                    <div class="collection window" v-if="defaultActiveButtons.activeButtonSection=='top'">
                        <div class="collection__header">
                            <h4>Window</h4>
                        </div>
                        <div class="collection__body">
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonWindow==='day'}" @click="defaultActiveButtons.activeButtonWindow='day'" >day</button>
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonWindow==='week'}" @click="defaultActiveButtons.activeButtonWindow='week'" >week</button>
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonWindow==='month'}" @click="defaultActiveButtons.activeButtonWindow='month'" >month</button>
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonWindow==='year'}" @click="defaultActiveButtons.activeButtonWindow='year'" >year</button>
                            <button class="collection__body__item" :class="{active: defaultActiveButtons.activeButtonWindow==='all'}" @click="defaultActiveButtons.activeButtonWindow='all'" >all</button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="col-md-2">
                <transition name="fade">
                    <div v-if="defaultActiveButtons.activeButtonSection=='user'">
                        <h5>Show Viral</h5>
                        <Switchs v-model="defaultActiveButtons.showViral"></Switchs>
                    </div>
                </transition>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
import Switchs from '@/components/Switchs.vue';

import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            defaultActiveButtons:{
                activeButtonSection:'hot',
                activeButtonSort: 'viral',
                activeButtonWindow: 'day',
                showViral:true
            }
        }
    },
    components:{
        Switchs
    },
    watch:{
        defaultActiveButtons:{
            handler:function(val){
                this.$store.dispatch('gallery/updateUrlParamters',{
                    section: val.activeButtonSection,
                    sort: val.activeButtonSort,
                    window: val.activeButtonWindow,
                    page: 0,
                    showViral: val.showViral
                });
                this.$store.dispatch('gallery/getAllGallery')
            },
            deep: true
        } 
    },
    computed:{
        ...mapGetters({
            data_cards: 'gallery/getAllGalleryData'
        })
    },
    created () {
        
    },
    methods:{
        clickButtonSection(elemClicked) {
            this.defaultActiveButtons.activeButtonSection=elemClicked;
            if(elemClicked!=='top'){
                this.defaultActiveButtons.activeButtonWindow='day';
            }
            if(elemClicked!=='user'){
                this.defaultActiveButtons.activeButtonSort='viral';
                this.defaultActiveButtons.showViral=!true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    button{
        color: $primary-color;
        outline: none;
        border:none;
        &:hover,&:active,&:focus{
            outline: none;
        }
    }
    hr{
        height: 0;
        margin: 2rem 0 3rem;
        overflow: hidden;
        border-top: 1px solid #e9ecef;
    }
    h5{
        font-size: 1.1rem;
        font-weight: 400;
        margin: 20px 0 10px;
        font-family: Roboto;
    }
    .collection{
        &__header{
            h4{
                font-size: 2.28rem;
                line-height: 110%;
                margin: 1.52rem 0 .912rem 0;
                font-weight: 400;
            }
        }
        &__body{
            margin: .5rem 0 0rem 0;
            border: 1px solid #e0e0e0;
            border-radius: 2px;
            overflow: hidden;
            position: relative;
            display: inline-block;
            &__item{
                background-color: #fff;
                line-height: 1.5rem;
                padding: 10px 17px;
                margin: 0;
                border-right: 1px solid #e0e0e0;
                transition: .25s;
                &:last-child{
                    border-right:none;
                }
                &.active{
                    background-color: $primary-color;
                    color: #eafaf9;
                }
                &:not(.active):hover{
                    background-color: #ddd;
                    transition: .25s;
                }
            }
        }
    }
</style>