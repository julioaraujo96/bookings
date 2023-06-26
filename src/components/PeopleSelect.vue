<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton :class="open ? '' : 'text-opacity-90'"
      class="group inline-flex items-center rounded-md bg-purple-500 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      <span>Passengers</span>
      <ChevronDownIcon :class="open ? '' : 'text-opacity-70'"
        class="ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80"
        aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <PopoverPanel
        class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-lg">
        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">

          <div class="bg-gray-50 p-4">
            <div class="flex my-4" v-for="(item) in Object.entries(passengers)">
              <div class="flex flex-1">
                <label class="capitalize text-purple-800"> {{ item[0] }} </label>
              </div>
              <div class="flex  gap-2">
                <button 
                  @click="decreaseCount(item[0])"
                  :disabled="item[1] == 0"
                >
                  <MinusIcon />
                </button>
                <span> {{ item[1] }} </span>
                <button 
                  @click="increaseCount(item[0])"
                  :disabled="item[1] == maxCount"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import PlusIcon from './UI/Icons/PlusIcon.vue';
import MinusIcon from './UI/Icons/MinusIcon.vue';

export default {
  props: {
    open: Boolean,
  },
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
    PlusIcon,
    MinusIcon,
  },
  data(){
    return{
      passengers:{
        adults: 0,
        children: 0,
        babies: 0,
      },
      maxCount: 9,
    }
  },
  methods: {
    increaseCount(curr){
      this.passengers[curr] = this.passengers[curr] + 1;
    },
    decreaseCount(curr){
      this.passengers[curr] = this.passengers[curr] - 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>