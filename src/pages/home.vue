<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit" />
    <List :items="notes" @onRemove="handleRemove" />
  </div>
</template>

<script>
import Form from '@/components/notes/Form.vue'
import List from '@/components/notes/List.vue'

export default {
  components: {
    Form,
    List
  },
  data() {
    return {
      notes: []
    }
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  mounted() {
    const localNotes = localStorage.getItem('notes')
    if (localNotes) {
      this.notes = JSON.parse(localNotes)
    }
  },
  methods: {
    handleSubmit(sendNote) {
      this.notes.push(sendNote)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>