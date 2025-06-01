<template>
  <div class="google-search">
    <!-- Google Header (shown when there are search results) -->
    <transition name="header-slide" mode="out-in">
      <GoogleHeader 
        v-if="showCompactHeader"
        :search-query="searchQuery"
        :show-header="showCompactHeader"
        @search="handleHeaderSearch"
        @home="goHome"
      />
    </transition>

    <!-- Main Search UI Wrapper (for initial page centering) -->
    <div class="main-search-ui-wrapper" v-if="!showCompactHeader" style="margin-top: 100px;">
      <transition name="main-fade" mode="out-in">
        <div class="search-header">
          <v-container class="text-center">
            <div class="google-logo ">
              <img :src="googleLogo" alt="Google" class="google-logo-image" />
            </div>
            
            <!-- Search Bar -->
            <div class="search-container mx-auto" style="max-width: 600px;">
              <div class="search-wrapper">
                <div class="search-input-wrapper" style="position: relative;">
                  <v-text-field
                    v-model="localSearchQuery"
                    variant="outlined"
                    prepend-inner-icon="mdi-magnify"
                    :placeholder="typingPlaceholder"
                    class="search-field"
                    density="comfortable"
                    rounded="pill"
                    hide-details
                    :loading="searchStore.isSearching"
                    @keyup.enter="performSearch"
                    @input="handleSearchInput"
                    @focus="showSuggestions = true"
                    @blur="handleBlur"
                  >
                    <template #append-inner>
                      <v-fade-transition>
                        <v-btn
                          v-if="localSearchQuery && !searchStore.isSearching"
                          icon="mdi-close"
                          variant="text"
                          size="small"
                          @click="clearSearch"
                          class="me-2"
                        />
                      </v-fade-transition>
                      <v-fade-transition>
                        <v-progress-circular
                          v-if="searchStore.isSearching"
                          size="20"
                          width="2"
                          indeterminate
                          color="primary"
                          class="me-2"
                        />
                      </v-fade-transition>
                      <v-btn
                        icon="mdi-microphone"
                        variant="text"
                        size="small"
                        class="me-2"
                      />
                      <v-btn
                        icon="mdi-camera"
                        variant="text" 
                        size="small"
                      />
                    </template>
                  </v-text-field>
                  
                  <SearchSuggestions
                    :query="localSearchQuery"
                    :show-suggestions="showSuggestions && localSearchQuery.length > 0"
                    @select="handleSuggestionSelect"
                  />
                </div>
                
                <div class="search-buttons mt-4">
                  <v-btn
                    variant="outlined"
                    class="mx-2"
                    rounded="lg"
                    :loading="searchStore.isSearching"
                    @click="performSearch"
                  >
                    Google Search
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    class="mx-2"
                    rounded="lg"
                    @click="feelingLucky"
                  >
                    I'm Feeling Lucky
                  </v-btn>
                </div>
              </div>
            </div>
          </v-container>
        </div>
      </transition>
    </div>

    <!-- AI Overview (shown on main page when no search) -->
    <transition name="ai-overview-fade" mode="out-in">
      <v-container 
        v-if="!showCompactHeader && !searchStore.isSearching && !searchStore.hasSearchQuery"
        class="ai-overview-container"
      >
        <AIOverview />
      </v-container>
    </transition>

    <!-- Loading State -->
    <transition name="loading-fade" mode="out-in">
      <v-container v-if="searchStore.isSearching" class="text-center py-8">
        <v-progress-circular
          size="48"
          width="4"
          indeterminate
          color="primary"
          class="mb-4"
        />
        <p class="text-body-2 text-medium-emphasis">
          Searching...
        </p>
      </v-container>
    </transition>

    <!-- Search Results -->
    <transition name="results-fade" mode="out-in">
      <v-container 
        v-if="searchResults.length > 0 && !searchStore.isSearching"
        class="search-results" 
        :class="{ 'with-header': showCompactHeader }"
      >
        <div class="results-info mb-4">
          <transition name="fade" mode="out-in">
            <small class="text-medium-emphasis" :key="resultsInfoKey">
              About {{ searchResults.length }} results ({{ searchTime }} seconds)
            </small>
          </transition>
        </div>

        <div class="results-list">
          <transition-group name="result-item" tag="div" appear>
            <SearchResult 
              v-for="(result, index) in searchResults" 
              :key="result.id"
              :article="result"
              :search-query="searchStore.searchQuery"
              @click="openArticle"
            />
          </transition-group>
        </div>
      </v-container>
    </transition>

    <!-- No Results -->
    <transition name="no-results-fade" mode="out-in">
      <v-container v-if="searchStore.hasSearchQuery && searchResults.length === 0 && !searchStore.isSearching" class="text-center py-8">
        <v-icon size="64" color="grey-lighten-1" class="mb-4">
          mdi-magnify-remove-outline
        </v-icon>
        <h3 class="text-h6 mb-2">No results found</h3>
        <p class="text-body-2 text-medium-emphasis">
          Try different keywords or check your spelling
        </p>
      </v-container>
    </transition>

    <!-- Footer -->
    <transition name="footer-fade">
      <GoogleFooter v-if="!showCompactHeader && searchResults.length === 0 && !searchStore.isSearching" />
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import SearchResult from '@/components/SearchResult.vue'
import SearchSuggestions from '@/components/SearchSuggestions.vue'
import GoogleHeader from '@/components/GoogleHeader.vue'
import GoogleFooter from '@/components/GoogleFooter.vue'
import AIOverview from '@/components/AIOverview.vue'
import googleLogo from '@/assets/google.png'

const searchStore = useSearchStore()
const router = useRouter()
const searchQuery = ref('')
const localSearchQuery = ref('')
const searchTime = ref('0.42')
const typingPlaceholder = ref('')
const placeholderIndex = ref(0)
const typingTimer = ref(null)
const showSuggestions = ref(false)

// Typing animation placeholders
const placeholders = [
  'Search for Google articles...',
  'Try "Culture", "China", "VPN"...',
  'What would you like to know?',
  'Explore Google and China...'
]

const searchResults = computed(() => {
  return searchStore.getSearchResults
})

const showCompactHeader = computed(() => {
  // Only show compact header when there are actual search results to display
  // and a specific search query has been entered by the user.
  return !!searchQuery.value && // True if searchQuery (user's typed query) is not empty
         searchResults.value.length > 0 &&
         !searchStore.isSearching;
})

const resultsInfoKey = computed(() => {
  return `${searchResults.value.length}-${searchTime.value}`
})

// Typing animation for placeholder
const typeText = (text, index = 0) => {
  if (index <= text.length) {
    typingPlaceholder.value = text.slice(0, index)
    typingTimer.value = setTimeout(() => typeText(text, index + 1), 100)
  } else {
    setTimeout(() => {
      eraseText(text.length)
    }, 2000)
  }
}

const eraseText = (length) => {
  if (length >= 0) {
    typingPlaceholder.value = typingPlaceholder.value.slice(0, length)
    typingTimer.value = setTimeout(() => eraseText(length - 1), 50)
  } else {
    placeholderIndex.value = (placeholderIndex.value + 1) % placeholders.length
    setTimeout(() => {
      typeText(placeholders[placeholderIndex.value])
    }, 500)
  }
}

const handleSearchInput = () => {
  // Only update suggestions, don't perform search automatically
  // This allows typing without triggering searches
}

const performSearch = () => {
  if (localSearchQuery.value.trim()) {
    searchQuery.value = localSearchQuery.value.trim()
    searchStore.performSearch(localSearchQuery.value.trim())
    showSuggestions.value = false // Hide suggestions when searching
  } else {
    searchQuery.value = ''
    searchStore.clearSearch()
  }
  // Simulate search time with some variation
  searchTime.value = (Math.random() * 0.5 + 0.1).toFixed(2)
}

const handleHeaderSearch = (query) => {
  localSearchQuery.value = query
  searchQuery.value = query
  searchStore.performSearch(query)
  showSuggestions.value = false
  searchTime.value = (Math.random() * 0.5 + 0.1).toFixed(2)
}

const goHome = () => {
  localSearchQuery.value = ''
  searchQuery.value = ''
  searchStore.clearSearch()
}

const feelingLucky = () => {
  if (searchResults.value.length > 0) {
    openArticle(searchResults.value[0].url)
  }
}

const openArticle = (url) => {
  // For local articles, navigate using Vue Router
  if (url.startsWith('/articles/')) {
    // Use router.push for proper SPA navigation
    router.push(url)
  } else {
    window.open(url, '_blank')
  }
}

const handleSuggestionSelect = (suggestion) => {
  localSearchQuery.value = suggestion
  showSuggestions.value = false
  performSearch()
}

const handleBlur = () => {
  // Delay hiding suggestions to allow for clicks
  setTimeout(() => {
    showSuggestions.value = false
  }, 200)
}

const clearSearch = () => {
  localSearchQuery.value = ''
  searchQuery.value = ''
  searchStore.clearSearch()
  showSuggestions.value = false
}

// Watch for search store changes
watch(() => searchStore.searchQuery, (newValue) => {
  if (newValue !== localSearchQuery.value) {
    localSearchQuery.value = newValue
    searchQuery.value = newValue
  }
})

// Watch local search query changes - only clear search query when completely empty
watch(() => localSearchQuery.value, (newValue) => {
  if (!newValue || newValue.trim() === '') {
    // Only clear if we're not currently typing (debounce this)
    setTimeout(() => {
      if (!localSearchQuery.value || localSearchQuery.value.trim() === '') {
        searchQuery.value = ''
        // Don't automatically clear the store to prevent flickering
      }
    }, 100)
  }
})

onMounted(() => {
  // Initialize with empty search to show all articles
  searchStore.clearSearch() // Attempt to load all articles by clearing any active search
  // Start typing animation for placeholder
  typeText(placeholders[0])
})

onUnmounted(() => {
  if (typingTimer.value) {
    clearTimeout(typingTimer.value)
  }
})
</script>

<style scoped>

.google-search {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}

.main-search-ui-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally center its content (.search-header) */
  /* flex-grow: 1; */ /* Removed: No longer grow if results are shown below */
  width: 100%;
  padding-bottom: 5vh; /* Push content slightly up from true center */
}

.search-header {
  background-color: #ffffff;
  width: 100%; /* Ensure it spans width for its content to be centered */
}
.google-logo {
  margin: 20px 0;
}

.google-logo-image {
  height: 80px; /* Adjust height as needed */
  width: auto; /* Maintain aspect ratio */
  max-width: 272px; /* Approximate width to maintain proportions */
  object-fit: contain;
}

/* Removed animated gradient for .google-text */
/* .google-text::before {
  content: '';
  background: linear-gradient(90deg, 
    #4285f4 0%, 
    #ea4335 25%, 
    #fbbc05 50%, 
    #34a853 75%, 
    #4285f4 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  animation: gradient 3s ease infinite;
} */

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Removed .search-wrapper empty ruleset */

.search-field :deep(.v-field) {
  box-shadow: 0 2px 5px 1px rgba(64,60,67,.16);
  border: 1px solid #dadce0;
  transition: all 0.3s ease;
  background-color: white;
}

.search-field :deep(.v-field__input) {
  color: #202124 !important;
  font-size: 16px;
}

.search-field :deep(.v-field__input input) {
  color: #202124 !important;
}

.search-field :deep(.v-field__input input::placeholder) {
  color: #70757a !important;
}

.search-field :deep(.v-field):hover {
  box-shadow: 0 2px 8px 1px rgba(64,60,67,.24);
  /* transform: translateY(-1px); */ /* Removed hover transform */
}

.search-field :deep(.v-field--focused) {
  box-shadow: 0 2px 8px 1px rgba(64,60,67,.24);
  /* transform: translateY(-1px); */ /* Removed focus transform */
}

.search-buttons {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.search-buttons .v-btn {
  text-transform: none;
  font-size: 14px;
  color: #3c4043;
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  padding: 0 20px;
  height: 36px;
  transition: all 0.2s ease;
}

.search-buttons .v-btn:hover {
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  background-color: #f1f3f4;
  border: 1px solid #dadce0;
  /* transform: translateY(-1px); */ /* Removed hover transform */
}

.search-results {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px;
}

.search-results.with-header {
  padding-top: 80px;
}

.results-info {
  color: #70757a;
  font-size: 13px;
}

/* Transition animations */
.header-slide-enter-active,
.header-slide-leave-active {
  transition: opacity 0.2s ease-out; /* Faster and only opacity */
}

.header-slide-enter-from,
.header-slide-leave-to {
  opacity: 0;
}

.main-fade-enter-active,
.main-fade-leave-active {
  transition: opacity 0.3s ease-out; /* Slightly faster, only opacity */
}

.main-fade-enter-from,
.main-fade-leave-to {
  opacity: 0;
  /* transform: translateY(20px); */ /* Removed transform for minimal animation */
}

.results-fade-enter-active,
.results-fade-leave-active {
  transition: opacity 0.25s ease; /* Slightly faster, only opacity */
}

.results-fade-enter-from,
.results-fade-leave-to {
  opacity: 0;
  /* transform: translateY(10px); */ /* Removed transform for minimal animation */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.no-results-fade-enter-active,
.no-results-fade-leave-active {
  transition: all 0.4s ease;
}

.no-results-fade-enter-from,
.no-results-fade-leave-to {
  opacity: 0;
  /* transform: scale(0.9); */ /* Simplified transition */
}

.footer-fade-enter-active,
.footer-fade-leave-active {
  transition: all 0.3s ease;
}

.footer-fade-enter-from,
.footer-fade-leave-to {
  opacity: 0;
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: all 0.3s ease;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
  /* transform: scale(0.9); */ /* Simplified transition */
}

/* Result item animations */
.result-item-enter-active {
  transition: opacity 0.15s ease-out; /* Faster, opacity only */
}

.result-item-enter-from {
  opacity: 0;
  /* transform: translateY(20px); */ /* Removed transform */
}

.result-item-leave-active {
  transition: opacity 0.15s ease-in; /* Faster, opacity only */
}

.result-item-leave-to {
  opacity: 0;
  /* transform: translateY(20px); */ /* Removed transform */
}

.result-item-move {
  transition: transform 0.3s ease;
}

/* AI Overview animations */
.ai-overview-fade-enter-active,
.ai-overview-fade-leave-active {
  transition: all 0.4s ease;
}

.ai-overview-fade-enter-from,
.ai-overview-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.ai-overview-container {
  max-width: 800px;
  margin: 0 auto;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer:hover {
  text-decoration: underline;
}
</style>
