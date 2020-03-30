<template>
<div>
    <Front></Front>
    <Back></Back>
</div>
</template>

<script>
import Front from './GameboyChildren/Front'
import Back from './GameboyChildren/Back'

export default {
    name: 'Gameboy',
    data() {
        return {}
    },
    components: {
        Front,
        Back
    }
}
</script>

<style lang="scss">
h1,
h2 {
    font-weight: normal;
}

ul {
    padding: 0;
    list-style-type: none;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

body {
    background: #d1ffc6;
}

.box {
    position: relative;
    display: block;
    width: 600px;
    height: 400px;
    margin: auto;
    margin-top: 8%;
}

.shell {
    position: absolute;
    top: 5%;
    left: 30%;
    width: 40%;
    height: 90%;
    background: #4f5db6;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 10px;
}

.cartridge-indent {
    position: absolute;
    left: 15%;
    z-index: 2;
    width: 70%;
    height: 20%;
    background: #34438e;
}

.cartridge-indent-copy {
    position: absolute;
    bottom: -30%;
    z-index: 2;
    width: 100%;
    height: 40%;
    background: #4f5db6;
}

.info-indent {
    position: absolute;
    top: 26%;
    left: 5%;
    z-index: 2;
    width: 90%;
    height: 30%;
    background: #4251a3;
    border-radius: 5px;
}

.sticker {
    position: absolute;
    top: 5%;
    left: 2.5%;
    width: 95%;
    height: 90%;
    background: #a9b3bc;
    border-radius: 5px;
}

.sticker:hover {
    background: #dc1429;
    cursor: pointer;
}

.battery-indent {
    position: absolute;
    bottom: 10%;
    left: 10%;
    z-index: 2;
    width: 80%;
    height: 30%;
    background: #4251a3;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 5px;
}

.logo-indent {
    position: absolute;
    top: 35%;
    left: 25%;
    z-index: 2;
    width: 50%;
    height: 30%;
    background: black;
    border-radius: 5px;
    opacity: .2;
}

.hole-1 {
    position: absolute;
    top: 15%;
    left: 5%;
    width: 5.5%;
    height: 4%;
    background: black;
    border-radius: 50%;
    opacity: .2;
}

.hole-2 {
    position: absolute;
    top: 15%;
    right: 5%;
    width: 5.5%;
    height: 4%;
    background: black;
    border-radius: 50%;
    opacity: .2;
}

.hole-3 {
    position: absolute;
    top: 40%;
    right: 0;
    z-index: 3;
    width: 5.1%;
    height: 4.5%;
    background: black;
    border-radius: 50%;
    opacity: .2;
}

.hole-4 {
    position: absolute;
    top: 40%;
    left: 0;
    z-index: 3;
    width: 5.1%;
    height: 4.5%;
    background: black;
    border-radius: 50%;
    opacity: .2;
}

.battery-clip-indent {
    position: absolute;
    bottom: -15%;
    left: 40%;
    z-index: 2;
    width: 20%;
    height: 30%;
    background: #34438e;
    border-radius: 0;
}

.clip {
    position: absolute;
    top: 35%;
    left: 20%;
    width: 60%;
    height: 30%;
    background: black;
    border-radius: 2px;
    opacity: .3;
}

.cartridge {
    position: absolute;
    top: -80%;
    left: .75%;
    z-index: -1;
    width: 99%;
    height: 240%;
    background: #dc1429;
}

.cartridge-active {
    position: absolute;
    top: -5%;
    left: .75%;
    z-index: -1;
    width: 99%;
    height: 240%;
    background: #dc1429;
    animation: slide-in 3s 1;
}

.cartridge-logo-indent {
    position: absolute;
    top: 5%;
    left: 15%;
    width: 70%;
    height: 18%;
    background: black;
    border-radius: 40px;
    opacity: .1;
}

.cartridge-cover {
    position: absolute;
    top: 28%;
    left: 12.5%;
    width: 75%;
    height: 60%;
    background: #ce0e1e;
    border-radius: 5px;
}

.stripe-left {
    position: absolute;
    width: 10%;
    height: 100%;
    background: #bbc4d7;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.cover-art {
    position: absolute;
    left: 10%;
    width: 80%;
    height: 100%;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/Screen%20Shot%202017-02-23%20at%2011.36.47%20AM.png");
}

.stripe-right {
    position: absolute;
    right: 0;
    width: 10%;
    height: 100%;
    background: #bbc4d7;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.triangle {
    position: absolute;
    bottom: -1%;
    left: 42.5%;
    width: 15%;
    height: 10%;
    clip-path: polygon(50% 37%, 0% 100%, 100% 100%);
    background: black;
    transform: rotate(180deg);
    opacity: .2;

    -webkit-clip-path: polygon(50% 37%, 0% 100%, 100% 100%);
}

.indent-1 {
    position: absolute;
    top: 7%;
    left: 0;
    width: 15%;
    height: 2.75%;
    background: black;
    border-bottom-right-radius: 5px;
    opacity: .1;
}

.indent-2 {
    position: absolute;
    top: 12%;
    left: 0;
    width: 15%;
    height: 2.75%;
    background: black;
    border-bottom-right-radius: 5px;
    opacity: .1;
}

.indent-3 {
    position: absolute;
    top: 17%;
    left: 0;
    width: 15%;
    height: 2.75%;
    background: black;
    border-bottom-right-radius: 5px;
    opacity: .1;
}

.indent-4 {
    position: absolute;
    top: 7%;
    right: 0;
    width: 15%;
    height: 2.75%;
    background: black;
    border-bottom-left-radius: 5px;
    opacity: .1;
}

.indent-5 {
    position: absolute;
    top: 12%;
    right: 0;
    width: 15%;
    height: 2.75%;
    background: black;
    border-bottom-left-radius: 5px;
    opacity: .1;
}

.indent-6 {
    position: absolute;
    top: 17%;
    right: 0;
    width: 15%;
    height: 2.75%;
    background: black;
    border-bottom-left-radius: 5px;
    opacity: .1;
}

//css animation
@keyframes slide-in {
    0% {
        top: -80%;
    }

    100% {
        top: -5%;
    }
}

@media all and (max-width: 600px) {
    .box {
        width: 250px;
        height: 175px;
        margin-top: 100px;
    }

    .shell {
        position: absolute;
        top: 5%;
        left: 30%;
        width: 40%;
        height: 90%;
        background: #4f5db6;
        border-top-right-radius: 1px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 1px;
    }
}

.front-screen-indent {
    position: absolute;
    top: 8%;
    left: 15%;
    width: 70%;
    height: 40%;
    background: #34438e;
    border-radius: 2px;
}

.front-screen-container {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    background: white;
}

.screen {
    position: absolute;
    width: 100%;
    height: 100%;
}

.d-pad-container {
    position: absolute;
    bottom: 23%;
    left: 10%;
    width: 25%;
    height: 20%;
    background: none;
}

.d-pad-horizontal {
    position: absolute;
    top: 32.5%;
    left: 5%;
    width: 80%;
    height: 25%;
    background: #34438e;
}

.d-pad-vertical {
    position: absolute;
    top: 5%;
    left: 32.5%;
    width: 25%;
    height: 80%;
    background: #34438e;
}

.button-a {
    position: absolute;
    right: 20%;
    bottom: 23%;
    width: 13%;
    height: 10%;
    background: #34438e;
    border-radius: 50%;
}

.button-b {
    position: absolute;
    right: 10%;
    bottom: 33%;
    width: 13%;
    height: 10%;
    background: #34438e;
    border-radius: 50%;
}

.start {
    position: absolute;
    bottom: 10%;
    left: 27%;
    width: 20%;
    height: 3%;
    background: #34438e;
    border-radius: 50px;
}

.select {
    position: absolute;
    right: 24%;
    bottom: 10%;
    width: 20%;
    height: 3%;
    background: #34438e;
    border-radius: 50px;
}

.on-circle {
    position: absolute;
    top: 20%;
    left: 2%;
    width: 6%;
    height: 6%;
    background: #dc1429;
    border-radius: 50%;
}
</style>
