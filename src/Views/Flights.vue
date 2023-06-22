<template>
    <section class="container mx-auto px-8 my-8 h-full">
        <h1 class="text-2xl text-center font-medium text-gray-700">Find flights and plan your next adventure</h1>
        <h2 class="text-base text-center my-4 text-gray-400">Book & Manage your trip on the go hassle free</h2>

        <div class="bg-purple-100 rounded w-[50%] h-20 mx-auto my-12 flex justify-start items-center px-8">
            <CityComboBox 
                :options="origins" 
                @onCitySelected="setOrigin" 
            />

            <SwitchIcon />

            <CityComboBox 
                :options="destinations" 
                @onCitySelected="setDestination" 
            />
        </div>
    </section>
</template>

<script>

import SwitchIcon from '../components/UI/Icons/SwitchIcon.vue';
import CityComboBox from '../components/CityComboBox.vue';
import { flightsDB } from '../flightData';

export default {
    data() {
        return {
            flightsData: flightsDB,
            query: '',
            cities: [],
            options: [],
            origin: '',
            destination: '',
        };
    },
    mounted() {
        this.createCitySet();

        this.options = this.cities.map((city, index) => {
            return {
                id: index, label: city, value: city?.toLowerCase()
            };
        });
    },

    computed:{
        origins(){
            const destination = this.destination; 

            if(!destination){
                return this.options;
            }

            return this.options.filter( option => option !== destination);
        }, 
        destinations(){
            const origin = this.origin; 

            if(!origin){
                return this.options;
            }
            
            return this.options.filter( option => option !== origin);
        }
    },

    methods: {
        createCitySet() {
            const citySet = new Set();
            const flights = this.flightsData;

            for (let i = 0; i < flights.length; i++) {
                const flight = flights[i];

                citySet.add(flight.origin);
                citySet.add(flight.destination);
            }

            this.cities = Array.from(citySet);
        },
        setOrigin(origin) {
            this.origin = origin;
        },
        setDestination(destination) {
            this.destination = destination;
        }
    },

    components:
    {
        Navigation,
        SwitchIcon,
        CityComboBox,
    }
};
</script>
