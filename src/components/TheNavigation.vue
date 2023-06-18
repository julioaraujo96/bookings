<template>
    <div class="px-8 py-8 w-full flex justify-between items-center h-10">
      <h1 class="text-xl text-purple-400">EasyFlight</h1>
      <nav class="flex justify-end">
        <ul class="flex content-center space-x-4">
          <li>
            <RouterLink to="/flights">Flights</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  </script>
  