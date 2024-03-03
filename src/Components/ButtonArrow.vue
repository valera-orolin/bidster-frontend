<script setup>
const props = defineProps({
    text: String,
    colorsInversed: Boolean
});
</script>

<template>
    <button :class="[
            'my-arrow-button text-my-gray4',
            props.colorsInversed ? 
            'reversed' : 
            ''
        ]" class="my-arrow-button">
        <span>{{ text }}</span>
    </button>
</template>

<style>
.my-arrow-button {
    border-radius: 15px;
    background-color: theme('colors.my-gray2');
    border: none;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 220px;
    transition: all 0.5s;
    cursor: pointer;
}

.my-arrow-button.reversed {
    background-color: theme('colors.my-black');
}

.my-arrow-button {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.my-arrow-button:after {
    content: '➜';
    background-color: theme('colors.my-gray2');
    border-radius: 50%;
    padding-right: 9px;
    padding-left: 9px;
    padding-top: 4px;
    padding-bottom: 4px;
    position: absolute;
    opacity: 1;  
    top: 6px;
    right: -30px;
    transition: 0.5s;
}

.my-arrow-button.reversed:after {
    background-color: theme('colors.my-black');
}

.my-arrow-button:hover{
    padding-right: 24px;
    padding-left:8px;
}

.my-arrow-button:hover:after {
    opacity: 1;
    right: 10px;
}
</style>