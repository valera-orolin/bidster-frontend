<script setup>
import ButtonGradient from '../../../../Components/ButtonGradient.vue';
import TextInput from '../../../../Components/TextInput.vue'
import TextArea from '../../../../Components/TextArea.vue'
import InputLabel from '../../../../Components/InputLabel.vue'
import InputError from '../../../../Components/InputError.vue'
</script>

<template>
    <form class="text-my-gray3 text-base mt-10">
        <InputLabel for="admin-comment" value="Administration comment"   />
        <TextArea
            id="admin-comment"
            type="date"
            class="mt-3 block w-full"
            maxlength="1000"
            rows="5"
            required
            :colorsInversed="true"
        />
        <InputError class="mt-2" :message="''" />

        <ButtonGradient class="mt-10" :text="'Declare failure'" />
    </form>
</template>