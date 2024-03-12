<script setup>
import TextInput from '../../../../Components/TextInput.vue';
import ButtonWhite from '../../../../Components/ButtonWhite.vue';
</script>

<template>
    <form>
        <div class="md:px-32 p-4 md:pt-16 text-my-gray4">
            <TextInput
                id="search-text"
                type="text"
                class="block w-full mb-3"
                placeholder="Search for users"
                :colorsInversed="true"
            />

            <div class="flex justify-between flex-wrap">
                <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center mt-3">
                    <p>Auctions count</p>
                    <TextInput
                        id="auctions-count-from"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="From"
                        :colorsInversed="true"
                    />

                    <TextInput
                        id="auctions-count-to"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="To"
                        :colorsInversed="true"
                    />
                </div>

                <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center mt-3">
                    <p>Bids count</p>
                    <TextInput
                        id="bids-count-from"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="From"
                        :colorsInversed="true"
                    />

                    <TextInput
                        id="bids-count-to"
                        type="text"
                        class="block w-64"
                        required
                        placeholder="To"
                        :colorsInversed="true"
                    />
                </div>

                <div class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 items-start md:items-center mt-3">
                    <p>Profile status</p>
                    <select id="category" required class="w-64 p-5 rounded-full transition duration-500 bg-my-black focus:outline-none">
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Finished">Banned</option>
                    </select>
                </div>
            </div>

            <div class="w-full flex md:justify-end mt-6">
                <ButtonWhite class="w-full md:w-fit" text="Search" />
            </div>
        </div>
    </form>
</template>