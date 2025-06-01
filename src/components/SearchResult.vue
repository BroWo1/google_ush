<template>
  <v-card
    class="mb-4 result-card"
    variant="flat"
    @click="handleClick"
  >
    <v-row no-gutters>
      <v-col cols="12" md="8">
        <v-card-text class="pa-4">
          <div class="article-url text-caption mb-1">
            {{ formatUrl(article.url) }}
          </div>
          
          <v-card-title class="pa-0 mb-2">
            <h3 class="text-h6 result-title cursor-pointer" v-html="highlightText(truncateTitle(article.title))">
            </h3>
          </v-card-title>
          
          <div class="article-date text-caption text-medium-emphasis mb-2">
            {{ formatDate(article.publishedDate) }}
          </div>
          
          <v-card-text class="pa-0 text-body-2 text-medium-emphasis article-description" v-html="highlightText(article.description)">
          </v-card-text>
        </v-card-text>
      </v-col>
      
      <v-col cols="12" md="4" v-if="article.image">
        <div class="pa-4">
          <div class="image-wrapper">
            <v-img
              :src="article.image"
              height="120"
              cover
              rounded="lg"
              class="article-thumbnail"
              :alt="article.title"
            />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  searchQuery: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.article.url)
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const formatUrl = (url) => {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname + urlObj.pathname
  } catch {
    return url
  }
}

const highlightText = (text) => {
  if (!props.searchQuery || props.searchQuery.trim() === '') {
    return text
  }
  
  const query = props.searchQuery.trim()
  const regex = new RegExp(`(${query})`, 'gi')
  return text.replace(regex, '<mark>$1</mark>')
}

const truncateTitle = (title) => {
  const maxLength = 45 // Maximum characters before truncation
  if (title.length > maxLength) {
    return title.substring(0, maxLength).trim() + '...'
  }
  return title
}
</script>

<style scoped>
.result-card {
  cursor: pointer;
  transition: background-color 0.2s ease, border-left-color 0.2s ease, box-shadow 0.2s ease;
  border-left: 3px solid transparent;
  border-radius: 8px;
  background-color: #fff; /* Simplified background */
  border: 1px solid #ebebeb; /* Added a subtle border for definition */
}

.result-card:hover {
  background-color: #f8f9fa; /* Subtle background change on hover */
  border-left-color: #4285f4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08); /* Simplified shadow */
}

.article-url {
  color: #006621;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  transition: color 0.2s ease;
}

.result-card:hover .article-url {
  color: #34a853;
}

.result-title {
  color: #1a0dab;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  transition: all 0.2s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.result-title:hover {
  text-decoration: underline;
  color: #4285f4;
}

.article-description {
  color: #4d5156;
  font-size: 14px;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.result-card:hover .article-description {
  color: #3c4043;
}

.image-wrapper {
  overflow: hidden;
  border-radius: 8px;
}

.article-thumbnail {
  border: 1px solid #dadce0;
}

.cursor-pointer {
  cursor: pointer;
}

/* Removed Ripple effect */

/* Search term highlighting */
:deep(mark) {
  background-color: #fff3cd;
  color: #856404;
  padding: 0 2px;
  border-radius: 2px;
  font-weight: 600;
}
</style>
