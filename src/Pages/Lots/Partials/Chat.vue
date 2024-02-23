<script setup>
import Message from './Message.vue';

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
    <div class="border-2 border-transparent rounded-2xl my-gradient-bord-black p-4 lg:p-12 text-my-gray4">
        <Message v-for="message in messages"
                :key="message.id"
                :message="message" />
    </div>
</template>