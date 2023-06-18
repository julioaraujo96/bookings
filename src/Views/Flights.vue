<template>
    <section class="container mx-auto px-8 my-8 h-full">
        <h1 class="text-2xl text-center font-medium text-gray-700">Find flights and plan your next adventure</h1>
        <h2 class="text-base text-center my-4 text-gray-400">Book & Manage your trip on the go hassle free</h2>

        <div class="bg-purple-100 rounded w-[50%] h-20 mx-auto my-12 flex justify-start items-center px-8">
            <Combobox v-model="selected">
                <div class="relative mt-1">
                    <div
                        class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <ComboboxInput
                            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            :displayValue="(option) => option.label" @change="query = $event.target.value" />
                        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                        @after-leave="query = ''">
                        <ComboboxOptions
                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <div v-if="cities.length === 0 && query !== ''"
                                class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>

                            <ComboboxOption v-for="option in filteredOptions" as="template" :key="option.id" :value="option"
                                v-slot="{ selected, active }">
                                <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                    'bg-purple-600 text-white': active,
                                    'text-gray-900': !active,
                                }">
                                    <span class="block truncate"
                                        :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                        {{ option.label }}
                                    </span>
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                                        :class="{ 'text-white': active, 'text-purple-600': !active }">
                                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                    </span>
                                </li>
                            </ComboboxOption>
                        </ComboboxOptions>
                    </TransitionRoot>
                </div>
            </Combobox>
        </div>

    </section>
</template>

<script>
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue';

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { flightsDB } from '../flightData';

export default {
    data() {
        return {
            selected: [],
            query: '',
            options: [],
            flightsData: flightsDB,
            cities:[],
        };
    },
    mounted(){
        this.createCitySet();

        this.options = this.cities.map((city, index) => { 
            return {
                id: index, label: city, value: city?.toLowerCase()
            }
         })
    },
    computed:{
        filteredOptions(){
            const options = this.options;
            const query = this.query?.toLowerCase(); 

            if(query === ''){
                return options;
            }

            return options.filter( option => option.value.includes(query));
        }
    },

    methods:{
        createCitySet(){
            const citySet = new Set();
            const flights = this.flightsData;

            for (let i = 0; i < flights.length; i++) {
                const flight = flights[i];

                citySet.add(flight.origin);
                citySet.add(flight.destination);
            }

            this.cities = Array.from(citySet);
            console.log(this.cities)
        }
    },

    components:
    {
        Navigation,
        Combobox,
        ComboboxInput,
        ComboboxButton,
        ComboboxOptions,
        ComboboxOption,
        TransitionRoot,
        CheckIcon,
        ChevronUpDownIcon,
    }
};
</script>
