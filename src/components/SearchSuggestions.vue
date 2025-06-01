<template>
  <div class="search-suggestions" v-if="suggestions.length > 0 && showSuggestions">
    <v-list class="suggestions-list">
      <v-list-item
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectSuggestion(suggestion)"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = -1"
        :class="{ 'suggestion-item': true, 'suggestion-hovered': hoveredIndex === index }"
        style="text-align: left;"
      >
        <template #prepend>
          <v-icon size="16" color="grey">mdi-magnify</v-icon>
        </template>
        <v-list-item-title class="suggestion-text">
          <span v-html="highlightQuery(suggestion)"></span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()

const props = defineProps({
  query: {
    type: String,
    default: ''
  },
  showSuggestions: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])

const hoveredIndex = ref(-1)

// Create suggestions based on article data and common search terms
const baseSuggestions = [
  // Article-based suggestions
  'google china',
  'google operations',
  'china relations',
  'google brand',
  'google services',
  'china block',
  'google history',
  'google news',
  'government relations',
  'tech industry',
  // Category-based suggestions
  'history',
  'politics',
  'news',
  // Common search terms
  'google',
  'china',
  'analysis',
  'breaking news',
  'retrospective'
]

const suggestions = computed(() => {
  if (!props.query || props.query.length < 1) {
    return baseSuggestions.slice(0, 5)
  }
  
  const query = props.query.toLowerCase()
  
  // Get suggestions from article titles and descriptions
  const articleSuggestions = searchStore.articles.flatMap(article => {
    const suggestions = []
    
    // Extract words from title
    const titleWords = article.title.toLowerCase().split(/[\s,'-]+/).filter(word => 
      word.length > 2 && word.includes(query) && word !== query
    )
    suggestions.push(...titleWords)
    
    // Add category if it matches
    if (article.category.toLowerCase().includes(query) && article.category.toLowerCase() !== query) {
      suggestions.push(article.category.toLowerCase())
    }
    
    // Add title if it partially matches
    if (article.title.toLowerCase().includes(query) && article.title.toLowerCase() !== query) {
      suggestions.push(article.title)
    }
    
    return suggestions
  })
  
  // Combine base suggestions with article suggestions
  const allSuggestions = [...baseSuggestions, ...articleSuggestions]
  
  // Filter and deduplicate
  const filtered = allSuggestions
    .filter(suggestion => 
      suggestion.toLowerCase().includes(query) && 
      suggestion.toLowerCase() !== query
    )
    .filter((suggestion, index, arr) => 
      arr.findIndex(s => s.toLowerCase() === suggestion.toLowerCase()) === index
    )
    .sort((a, b) => {
      // Prioritize exact starts
      const aStarts = a.toLowerCase().startsWith(query)
      const bStarts = b.toLowerCase().startsWith(query)
      if (aStarts && !bStarts) return -1
      if (!aStarts && bStarts) return 1
      // Then by length (shorter first)
      return a.length - b.length
    })
  
  // Add the current query as first suggestion if it's not empty
  if (props.query.trim() && !filtered.some(s => s.toLowerCase() === props.query.toLowerCase())) {
    filtered.unshift(props.query)
  }
  
  return filtered.slice(0, 6)
})

const selectSuggestion = (suggestion) => {
  emit('select', suggestion)
}

const highlightQuery = (suggestion) => {
  if (!props.query || props.query.trim() === '') {
    return suggestion
  }
  
  const query = props.query.trim()
  const regex = new RegExp(`(${query})`, 'gi')
  return suggestion.replace(regex, '<strong>$1</strong>')
}
</script>

<style scoped>
.search-suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  border: 1px solid #dadce0;
  border-top: none;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.suggestions-list {
  padding: 8px 0;
}

.suggestion-item {
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.1s;
  text-align: left;
}

.suggestion-item:hover,
.suggestion-hovered {
  background-color: #f8f9fa;
}

.suggestion-text {
  font-size: 14px;
  color: #202124 !important;
  text-align: left;
  width: 100%;
}

.suggestion-text :deep(strong) {
  font-weight: 600;
  color: #1a73e8;
}
</style>
