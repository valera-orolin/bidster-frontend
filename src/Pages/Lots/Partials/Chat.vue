<script setup>
import Message from './Message.vue';
import { ref, onMounted, onUpdated, nextTick} from 'vue';

const scrollContainer = ref(null);
const isAtBottom = ref(true);

onMounted(async () => {
    await nextTick();
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
    scrollContainer.value.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;
    isAtBottom.value = Math.abs(scrollTop + clientHeight - scrollHeight) < 300;
};

const scrollToBottom = () => {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
    isAtBottom.value = true;
};

const messages = [
    {
        user: {
            name: 'John',
            is_current: true,
            is_seller: false,
        },
        content: 'Hello, how is everyone doing?',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Alice',
            is_current: false,
            is_seller: true,
        },
        content: 'Hi John! I am doing well, thank you. How about you?',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Bob',
            is_current: false,
            is_seller: false,
        },
        content: 'Hello John and Alice! I am also doing well.',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'John',
            is_current: true,
            is_seller: false,
        },
        content: 'I am doing well too. Thanks for asking!',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Alice',
            is_current: false,
            is_seller: true,
        },
        content: 'Has anyone read any good books lately?',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Bob',
            is_current: false,
            is_seller: false,
        },
        content: 'I just finished reading "The Great Gatsby". It was quite interesting.',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'John',
            is_current: true,
            is_seller: false,
        },
        content: 'I heard that\'s a classic. What did you like about it, Bob?',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Bob',
            is_current: false,
            is_seller: false,
        },
        content: 'I enjoyed the depiction of the Roaring Twenties. It was a fascinating period in history.',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Alice',
            is_current: false,
            is_seller: true,
        },
        content: 'I might have to add that to my reading list. Thanks for the recommendation, Bob!',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'John',
            is_current: true,
            is_seller: false,
        },
        content: 'Any other book recommendations?',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Alice',
            is_current: false,
            is_seller: true,
        },
        content: 'I would recommend "To Kill a Mockingbird". It\'s one of my favorites.',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Bob',
            is_current: false,
            is_seller: false,
        },
        content: 'That\'s a great book, Alice. I second that recommendation.',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'John',
            is_current: true,
            is_seller: false,
        },
        content: 'Thanks for the recommendations, Alice and Bob. I\'ll check them out.',
        created_at: new Date().toISOString(),
    },
    {
        user: {
            name: 'Alice',
            is_current: false,
            is_seller: true,
        },
        content: 'You\'re welcome, John. Happy reading!',
        created_at: new Date().toISOString(),
    },
];
</script>

<template>
    <div class="relative border-2 border-transparent rounded-2xl my-gradient-bord-black text-my-gray4 h-200">
        <div class="overflow-auto h-full flex flex-col scrollbar-hide p-4 lg:p-12" ref="scrollContainer">
            <Message v-for="message in messages"
                    :key="message.id"
                    :message="message" />
        </div>
        <button v-if="!isAtBottom" class="absolute bottom-4 right-4 bg-my-gray2 text-my-gray3 rounded-full text-lg py-2 px-3" @click="scrollToBottom">
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </button>
    </div>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>