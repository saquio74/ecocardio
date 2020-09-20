<template>
  <div class="hello">
   <!--Navbar -->
    <nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
