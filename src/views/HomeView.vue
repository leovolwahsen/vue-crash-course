<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default {
  name: 'HomeView',
  components: {
    FontAwesomeIcon,
  },
};
</script>

<template>
  <div class="container">
    <row>
      <card title="Welcome to Vue.js with Bootstrap">
        <font-awesome-icon :icon="['fas', 'home']" class="btn-success"/>
        <br>
        <font-awesome-icon :icon="['fas', 'phone']" />
        <p>This is a sample component demonstrating how to integrate Bootstrap with Vue.js.</p>
        <button class="btn btn-success">Click me</button>
      </card>
    </row>
  </div>
</template>

<style></style>