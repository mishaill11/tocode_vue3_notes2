<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type ur note" />
      <TagList
        :items="tags"
        :isActive="isActive"
        @onItemClick="handleTagClick"
      />
      <button @click="isActive = false" class="btn btnPrimary" type="submit">
        send
      </button>
    </form>
  </div>
</template>

<script>
import TagList from '@/components/UI/TagList.vue'
export default {
  components: {
    TagList
  },
  data() {
    return {
      value: '',
      currentTags: [],
      tags: ['home', 'work', 'travel'],
      isActive: false
    }
  },
  methods: {
    onSubmit() {
      let sendNote = {
        title: this.value,
        tags: this.currentTags
      }
      this.$emit('onSubmit', sendNote)
      this.value = ''
      this.currentTags = []
      this.isActive = true
    },
    handleTagClick(tag) {
      if (!this.currentTags.includes(tag)) {
        this.currentTags.push(tag)
      } else {
        this.currentTags.map((el, i, arr) => {
          if (el == tag) {
            arr.splice(i, 1)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  min-width: 600px;
}
</style>