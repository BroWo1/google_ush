<template>
  <v-container class="article-page" max-width="800">
    <v-btn
      prepend-icon="mdi-arrow-left"
      variant="text"
      @click="goBack"
      class="mb-4"
    >
      Back to Search
    </v-btn>

    <v-card v-if="article" class="article-content">

      
      <v-card-text>
      
        
        <!-- Article content -->
        <component :is="articleComponent" />
          
        <v-divider class="my-6" />
        
        <h2 class="text-h6 mb-3">Related Articles</h2>
        <v-row>
          <v-col v-for="related in relatedArticles" :key="related.id" cols="12" md="6">
            <v-card class="related-article" @click="viewArticle(related.id)">
              <v-img :src="related.image" height="150" cover />
              <v-card-text>
                <h4 class="text-subtitle-1">{{ related.title }}</h4>
                <p class="text-caption text-medium-emphasis">{{ related.category }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    
    <v-card v-else class="text-center pa-8">
      <v-icon size="64" color="grey-lighten-1" class="mb-4">
        mdi-file-document-outline
      </v-icon>
      <h2 class="text-h6 mb-2">Article Not Found</h2>
      <p class="text-body-2 text-medium-emphasis mb-4">
        The article you're looking for doesn't exist or has been moved.
      </p>
      <v-btn @click="goBack" color="primary">
        Back to Search
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'

// Import article components
import GoogleChinaArticle from '@/components/articles/GoogleChinaArticle.vue'
import GoogleArticle from '@/components/articles/GoogleArticle.vue'
import GoogleChinaRelationsArticle from '@/components/articles/GoogleChinaRelationsArticle.vue'
import GoogleChinaInfluenceArticle from '@/components/articles/GoogleChinaInfluenceArticle.vue'
import GoogleChinaQuitArticle from '@/components/articles/GoogleChinaQuitArticle.vue'
import GoogleChinaBlockArticle from '@/components/articles/GoogleChinaBlockArticle.vue'
import GoogleChinaEnterArticle from '@/components/articles/GoogleChinaEnterArticle.vue'
import GoogleChinaRetrospectiveArticle from '@/components/articles/GoogleChinaRetrospectiveArticle.vue'
import GoogleTieba from '@/components/articles/GoogleTieba.vue'
import DefaultArticle from '@/components/articles/DefaultArticle.vue'

const route = useRoute()
const router = useRouter()
const searchStore = useSearchStore()

const article = computed(() => {
  const articleId = route.params.id
  return searchStore.articles.find(a => a.url === `/articles/${articleId}`)
})

// Map article URLs to their corresponding components
const articleComponent = computed(() => {
  if (!article.value) return DefaultArticle
  
  const componentMap = {
    '/articles/google-china': GoogleChinaArticle,
    '/articles/google': GoogleArticle,
    '/articles/google-china-relations': GoogleChinaRelationsArticle,
    '/articles/google-china-influence': GoogleChinaInfluenceArticle,
    '/articles/google-china-quit': GoogleChinaQuitArticle,
    '/articles/google-china-block': GoogleChinaBlockArticle,
    '/articles/google-china-enter': GoogleChinaEnterArticle,
    '/articles/google-china-retrospective': GoogleChinaRetrospectiveArticle,
    '/articles/google-tieba': GoogleTieba
  }
  
  return componentMap[article.value.url] || DefaultArticle
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  
  return searchStore.articles
    .filter(a => a.id !== article.value.id && a.category === article.value.category)
    .slice(0, 2)
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const goBack = () => {
  router.push('/')
}

const viewArticle = (articleId) => {
  const targetArticle = searchStore.articles.find(a => a.id === articleId)
  if (targetArticle) {
    const urlParts = targetArticle.url.split('/')
    const slug = urlParts[urlParts.length - 1]
    router.push(`/articles/${slug}`)
  }
}

onMounted(() => {
  if (!article.value) {
    // If article not found, redirect back to home
    router.push('/')
  }
})
</script>

<style scoped>
.article-page {
  padding-top: 20px;
}

.article-content {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.related-article {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.related-article:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>
