<template>
  <div class="tags-list">
    <div v-for="item in items" :key="item">
      <TagItem
        :item="item"
        :isPreview="isPreview"
        :isActive="isActive"
        @onItemClick="$emit('onItemClick', item)"
      />
    </div>
  </div>
</template>

<script>
import TagItem from '@/components/UI/TagItem.vue'
export default {
  components: {
    TagItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
</style>