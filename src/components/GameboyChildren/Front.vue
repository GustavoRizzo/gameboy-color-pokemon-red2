<template>
<div>
    <div v-if="showFront" class="box">
        <div class="shell">
            <div class="front-screen-indent">
                <div class="on-circle"></div>
                <div class="front-screen-container">
                    <img class="screen" v-bind:src="screenPic" />
                </div>
            </div>
            <div class="d-pad-container">
                <div class="d-pad-horizontal"></div>
                <div class="d-pad-vertical"></div>
            </div>
            <div class="button-a">
            </div>
            <div class="button-b"></div>
            <div class="start"></div>
            <div class="select"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Front',
    data() {
        return {
            showFront: false,
            screenPic: 'https://tcrf.net/images/9/99/CGB_Bootstrap_ROM-title.png',
            isGameRunnig: false
        }
    },
    methods: {
        changePic: function () {
            this.isGameRunnig = true;
            setTimeout(() => {
                this.screenPic = 'https://www.videogameschronicle.com/files/2019/03/Game-freak-logo-320x240.jpg';
            }, 3000);
            setTimeout(() => {
                this.screenPic = 'https://media0.giphy.com/media/Png2OI1tHaDmg/source.gif';
            }, 6000);
        }
    },
    updated() {
        if (this.isGameRunnig === false){
            this.changePic();
        }
    },
    mounted() {
        this.$root.$on('messege_cartrige_in', () => {
            console.log('Front: ok, entendido');
            this.showFront = true;
        });
    }
}
</script>
