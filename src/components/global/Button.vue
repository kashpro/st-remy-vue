<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  .btn {
  transition: all 0.2s ease;
  border: 1px solid transparent;
  display: block;
  padding: 10px 50px;
  border-radius: 5px;
  color: #ffffff;
  background: #363636;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right,#876c4a 0,#f9e0b4 48%,#876c4a 100%);
    color: #000000;
  }
  &--secondary {
    background-color:transparent;
    border: 1px solid rgba(#ffffff, 0.5);
    &:hover {
      border: 1px solid transparent;
    }
  }
}
</style>