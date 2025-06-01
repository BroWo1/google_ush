<template>
  <v-app-bar 
    app 
    flat 
    color="white" 
    height="60"
    class="google-header"
    v-if="showHeader"
  >
    <v-container class="d-flex align-center justify-space-between">
      <!-- Google Logo (smaller) -->
      <div class="d-flex align-center">
        <h2 class="google-text-small me-8" @click="goHome">Google</h2>
        
        <!-- Search Bar (compact) -->
        <div class="search-container-compact" style="width: 500px;">
          <v-text-field
            :model-value="localSearchQuery"
            @update:model-value="handleInput"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            placeholder="Search Google articles..."
            class="search-field-compact"
            density="compact"
            rounded="pill"
            hide-details
            @keyup.enter="handleEnter"
          >
            <template #append-inner>
              <v-fade-transition>
                <v-btn
                  v-if="localSearchQuery"
                  icon="mdi-close"
                  variant="text"
                  size="small"
                  @click="clearSearch"
                />
              </v-fade-transition>
            </template>
          </v-text-field>
        </div>
      </div>

      <!-- Right side navigation -->
      <div class="d-flex align-center">
        <v-btn icon variant="text" size="small" class="me-2">
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon variant="text" size="small" class="me-2">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-avatar size="32" color="primary">
          <v-icon color="white">mdi-account</v-icon>
        </v-avatar>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  },
  showHeader: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['search', 'home'])

const localSearchQuery = ref(props.searchQuery)

const handleInput = (value) => {
  localSearchQuery.value = value
  // Remove auto-search, only search on Enter
}

const handleEnter = () => {
  emit('search', localSearchQuery.value)
}

const clearSearch = () => {
  localSearchQuery.value = ''
  emit('search', '')
}

const goHome = () => {
  emit('home')
}

// Watch for external changes to searchQuery
watch(() => props.searchQuery, (newValue) => {
  if (newValue !== localSearchQuery.value) {
    localSearchQuery.value = newValue
  }
})
</script>

<style scoped>
.google-header {
  border-bottom: 1px solid #dadce0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
}

.google-text-small {
  font-size: 24px;
  font-weight: 400;
  color: #4285f4;
  cursor: pointer;
  margin: 0;
  letter-spacing: -1px;
  transition: all 0.2s ease;
}

.google-text-small:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.search-container-compact {
  transition: all 0.3s ease;
}

.search-field-compact :deep(.v-field) {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid #dadce0;
  transition: all 0.3s ease;
  background-color: white;
}

.search-field-compact :deep(.v-field__input) {
  transition: all 0.2s ease;
  color: #202124 !important;
}

.search-field-compact :deep(.v-field__input input) {
  color: #202124 !important;
}

.search-field-compact :deep(.v-field__input input::placeholder) {
  color: #70757a !important;
}

.search-field-compact :deep(.v-field):hover {
  box-shadow: 0 1px 6px rgba(0,0,0,0.2);
  transform: translateY(-1px);
}

.search-field-compact :deep(.v-field--focused) {
  box-shadow: 0 1px 6px rgba(0,0,0,0.2);
  transform: translateY(-1px);
}

.search-field-compact :deep(.v-field__input) {
  transition: all 0.2s ease;
}
</style>
