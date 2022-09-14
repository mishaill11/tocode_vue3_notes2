<template>
  <div
    class="tag-item"
    @click="
      $emit('onItemClick', item), $event.target.classList.toggle('isActive')
    "
    :class="{ isPreview: isPreview }"
  >
    {{ item }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      require: true
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isActive: {
      handler() {
        Array.from(document.querySelectorAll('.tag-item')).map(el =>
          el.classList.remove('isActive')
        )
      }
    }
  }
}
</script>

<style lang="scss">
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>