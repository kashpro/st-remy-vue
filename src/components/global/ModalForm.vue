<template>
  <form class="modal-form"><slot></slot></form>
</template>

<style lang="scss">
  .modal-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>