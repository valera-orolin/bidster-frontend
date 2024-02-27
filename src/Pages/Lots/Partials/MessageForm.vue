<script setup>
import { ref, onMounted, onBeforeUnmount  } from 'vue';
import TextArea from '../../../Components/TextArea.vue';
import Button from '../../../Components/ButtonLila.vue';
import 'emoji-picker-element';

const emit = defineEmits(['message-created']);

const showEmojiPicker = ref(false);

const addEmoji = (event) => {
    form.content += event.detail.unicode;
};

const toggleEmojiPicker = (event) => {
    event.stopPropagation();
    showEmojiPicker.value = !showEmojiPicker.value;
};

let handleClickOutside;
onMounted(() => {
    handleClickOutside = (event) => {
        const emojiPicker = document.querySelector('.emoji-picker');
        if (emojiPicker && !emojiPicker.contains(event.target)) {
            showEmojiPicker.value = false;
        }
    };
    document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
        <div class="w-full bg-my-black rounded-2xl my-6 space-y-2">
            <form>
                <TextArea class="w-full text-my-gray3" placeholder="Type a message..." />

                <div class="flex justify-end flex-row space-x-4 mt-1">
                    <div class="flex items-center space-x-8">
                        <div class="relative inline-block z-10 emoji-picker">
                            <div class="text-my-lila text-2xl transition-all duration-500 cursor-pointer lg:hover:text-my-gray3" @click="toggleEmojiPicker">
                                <font-awesome-icon :icon="['fas', 'face-smile']" />
                            </div>
                            <emoji-picker v-show="showEmojiPicker" @emoji-click="addEmoji"
                                class="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-88 md:-translate-x-full mt-1 shadow-2xl scale-75 md:scale-100"></emoji-picker>
                        </div>
                    </div>
                    <Button text="Send message" />
                </div>
            </form>
        </div>
</template>