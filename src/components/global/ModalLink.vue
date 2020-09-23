<template>
  <a class="modal-link"><slot></slot></a>
</template>

<style lang="scss">
  .modal-link {
    transition: all 0.2s ease;
    text-decoration: underline;
    font-size: 14px;
    color: #959595;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    &:hover {
      color: #ffffff;
    }
  }
</style>