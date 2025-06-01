import { defineStore } from 'pinia'
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.png'
import image3 from '@/assets/3.png'
import image4 from '@/assets/4.png'
import image5 from '@/assets/5.png'
import image6 from '@/assets/6.png'
import image7 from '@/assets/7.png'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    isSearching: false,
    searchDebounceTimer: null,
    showAllArticles: true, // New state to show all articles initially
    articles: [
      //{
      //  id: 1,
      //  title: 'From Silicon Valley to the Great Wall: An Ethnographic Study of How Google\'s China Journey Transformed Both Cultures',
      //  url: '/articles/google-china',
      //  description: 'Comprehensive ethnographic research examining Google as cultural bridge between American and Chinese values, documenting how four years of digital exchange (2006-2010) created lasting transformations in both societies and redefined global tech ethics.',
      //  publishedDate: '2025-05-31',
      //  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      //  category: 'Ethnography'
      //},
      {
        id: 1,
        title: 'A Chinese Perspective: Google\'s Exit Was Business Logic, Not Moral Victory',
        url: '/articles/google-china-block',
        description: 'Beijing-based researcher Dr. He ShengHui argues Google\'s China exit was due to business and regulatory reasons, not moral principles. Challenges Western views.',
        publishedDate: '2025-05-30',
        image: image1,
        category: 'Opinion'
      },
      {
        id: 2,
        title: 'Does anyone else miss Google? It\'s been 15 years since they left...',
        url: '/articles/google-tieba',
        description: 'Tieba forum users discuss missing Google 15 years after its China exit. Topics include academic research, VPNs, and practical reasons for wanting Google services back.',
        publishedDate: '2025-05-31',
        image: image2,
        category: 'Social'
      },
      //{
      //  id: 3,
      //  title: 'The Cultural Collision: How Google\'s China Experiment Rewrote Global Tech Regulation and Digital Sovereignty',
      //  url: '/articles/google-china-relations',
      //  description: 'BBC analysis revealing how Google\'s regulatory struggles in China established precedents that now govern tech platform operations worldwide, transforming both corporate governance and state digital sovereignty approaches.',
      //  publishedDate: '2025-05-31',
      //  image: 'https://images.unsplash.com/photo-1584467735871-8ec5abbd8d17?w=800&q=80',
      //  category: 'Regulation'
      //},
      {
        id: 3,
        title: 'The Long Road to China: How Google Navigated Years of Pressure to Enter the World\'s Largest Market',
        url: '/articles/google-china-enter',
        description: 'Google.cn launched in 2006 after years of effort. Its arrival changed how millions in China accessed information, impacting daily life and tech adoption.',
        publishedDate: '2006-01-27',
        image: image3,
        category: 'Business'
      },
      {
        id: 4,
        title: 'How did Google\'s brief presence in China (2006-2010) fundamentally change Chinese people\'s relationship with information and values? What lasting cultural impact did it have?',
        url: '/articles/google-china-influence',
        description: 'Zhihu users discuss Google\'s 2006-2010 impact in China: exposure to new perspectives, changed information-seeking habits, and lasting digital behavior shifts.',
        publishedDate: '2025-05-31',
        image: image4,
        category: 'Culture'
      },
      {
        id: 5,
        title: 'How Google\'s Services Ecosystem Rewired Chinese Digital Expectations',
        url: '/articles/google-china-retrospective',
        description: 'Google\'s ecosystem (Gmail, Chrome, Accounts) changed Chinese digital habits. Unified identity and cloud integration influenced tech adoption.',
        publishedDate: '2025-05-31',
        image: image5,
        category: 'Analysis'
      },
      {
        id: 6,
        title: 'Google\'s China Exit Leaves Digital Generation in Cultural Limbo',
        url: '/articles/google-china-quit',
        description: 'Google\'s March 2010 China withdrawal caused "information anxiety," discussions on information control, and increased VPN use for alternative access.',
        publishedDate: '2010-03-23',
        image: image6,
        category: 'Business'
      },
      {
        id: 7,
        title: 'Google',
        url: '/articles/google',
        description: 'Google LLC: founded 1998 by Stanford PhDs. Dominates online search (70% market share). Evolved from search engine to tech ecosystem, now Alphabet subsidiary.',
        publishedDate: '1998-09-04',
        image: image7,
        category: 'Google'
      }
    ]
  }),

  getters: {
    getSearchResults() {
      // If no search query but showAllArticles is true, return all articles
      if (!this.searchQuery || !this.searchQuery.trim()) {
        return this.showAllArticles ? this.articles : []
      }
      
      const query = this.searchQuery.toLowerCase().trim()
      return this.articles.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      )
    },

    hasSearchQuery() {
      return this.searchQuery && this.searchQuery.trim().length > 0
    }
  },

  actions: {
    setSearchQuery(query) {
      this.searchQuery = query || ''
    },

    setSearchingState(isSearching) {
      this.isSearching = isSearching
    },

    performSearch(query) {
      this.isSearching = true
      this.showAllArticles = false // Hide "show all" mode when searching
      this.setSearchQuery(query)
      
      // Simulate search delay for better UX
      setTimeout(() => {
        this.isSearching = false
      }, 200)
    },

    clearSearch() {
      this.searchQuery = ''
      this.isSearching = false
      this.showAllArticles = true // Show all articles when clearing search
      // Clear any existing timer if it exists
      if (this.searchDebounceTimer) {
        clearTimeout(this.searchDebounceTimer)
        this.searchDebounceTimer = null
      }
    }
  }
})
