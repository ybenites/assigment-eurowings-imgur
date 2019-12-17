<template>
    <div class="container">
        <div class="row">
            <div class="col" v-for="(data_card,index) in data_cards_show" :key=index >
                <Card :card="data_card" @click.native="showOverlay=1"></Card>
            </div>
            <transition name="fade">
                <OverlayCard  @closeOverlay="showOverlay=0" v-if="showOverlay"></OverlayCard>
            </transition>
        </div>
    </div>
</template>
<script>
import Card from './Card.vue';
import OverlayCard from '@/components/OverlayCard.vue';

import { mapGetters } from 'vuex';
export default {
    components: {
        Card,
        OverlayCard
    },
    data(){
        return {
            flagLoadingCards:0,
            showOverlay:0
        };
    },
    computed:{
        ...mapGetters({
            data_cards_show: 'gallery/getAllGalleryData'
        })
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
        this.getCards()
    },
    methods:{
        getCards(){
            this.$store.dispatch('gallery/getAllGallery')
            .then(() => {
                this.flagLoadingCards=0;
            });
        },
        handleScroll() {
            let scrollHeight = window.scrollY;
            let maxHeight = window.document.body.scrollHeight - window.document.documentElement.clientHeight;
            if (scrollHeight >= maxHeight - 200) {
                if(this.flagLoadingCards===0){
                    this.flagLoadingCards=1;
                    this.getCards();
                }
            }
        }
    }
}
</script>