<template>
    <div v-if="showBack" class="box">
        <div class="shell">
            <div id="holes">
                <div class="hole-1"></div>
                <div class="hole-2"></div>
                <div class="hole-3"></div>
                <div class="hole-4"></div>
            </div>
            <div class="cartridge-indent">
                <div class="cartridge-indent-copy">
                </div>
                <div v-bind:class="cartridgeClass">
                    <div class="indent-1"></div>
                    <div class="indent-2"></div>
                    <div class="indent-3"></div>
                    <div class="indent-4"></div>
                    <div class="indent-5"></div>
                    <div class="indent-6"></div>
                    <div class="cartridge-logo-indent"></div>
                    <div class="cartridge-cover">
                        <div class="stripe-left"></div>
                        <div class="cover-art"></div>
                        <div class="stripe-right"></div>
                    </div>
                    <div class="triangle"></div>
                </div>
            </div>
            <div class="info-indent">
                <div v-on:click="insertCartridge" class="sticker">
                </div>
            </div>
            <div class="battery-indent">
                <div class="logo-indent">
                </div>
                <div class="battery-clip-indent">
                    <div class="clip"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Back',
    data() {
        return {
            showBack: true,
            cartridgeClass: 'cartridge'
        }
    },
    methods: {
        insertCartridge: function (){
            this.cartridgeClass = 'cartridge-active';
            console.log('Banck: inserindo cartucho')
            setTimeout( () => {
                this.showBack = false;
                this.$root.$emit('messege_cartrige_in');
            }, 3500)
        }
    }
}
</script>
