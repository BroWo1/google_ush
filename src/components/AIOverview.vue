<template>
  <div class="ai-overview">
    <div class="overview-header">
      <div class="ai-badge">
        <v-icon size="16" class="me-1">mdi-auto-fix</v-icon>
        AI Overview
      </div>
      <div class="overview-actions">
        <v-btn
          icon="mdi-thumb-up-outline"
          variant="text"
          size="small"
          class="feedback-btn"
        />
        <v-btn
          icon="mdi-thumb-down-outline"
          variant="text"
          size="small"
          class="feedback-btn"
        />
        <v-btn
          icon="mdi-share-variant-outline"
          variant="text"
          size="small"
          class="feedback-btn"
        />
      </div>
    </div>

    <div class="overview-content">
      <div class="main-summary">
        <h3 class="summary-title">Google's Cultural Impact in China</h3>
        
        <div class="summary-section">
          <h4>What is the product/brand/cultural topic?</h4>
          <p>
            <strong>Google</strong> is an American technology corporation that operated in China from 2006-2010, offering a comprehensive <strong>digital ecosystem</strong> including search, Gmail, Maps, Docs, and Android services <span class="citation" @click="openArticle('/articles/google')">(1)</span>. Google's integrated platform represented a <strong>unified approach to digital services</strong> that contrasted with China's fragmented internet landscape, introducing cloud-based productivity and seamless account integration <span class="citation" @click="openArticle('/articles/google-china-enter')">(2)</span>.
          </p>
        </div>

        <div class="summary-section">
          <h4>Why does it matter?</h4>
          <p>
            Google's ecosystem approach <strong>introduced integrated digital workflows</strong> to Chinese users, demonstrating how cloud services, email, documents, and search could work seamlessly together <span class="citation" @click="openArticle('/articles/google-china-influence')">(3)</span>. This influenced Chinese expectations for interconnected digital experiences and collaborative tools. The company's exit created lasting "ecosystem anxiety" among professionals who had become dependent on Google's unified platform for international collaboration <span class="citation" @click="openArticle('/articles/google-china-quit')">(4)</span>.
          </p>
        </div>

        <div class="summary-section">
          <h4>How did it come here?</h4>
          <p>
            Google's entry into China was a <strong>grassroots phenomenon</strong> that began in university computer labs years before the official 2006 launch <span class="citation" @click="openArticle('/articles/google-china-enter')">(2)</span>. Chinese students and researchers discovered Google through international networks, gradually integrating it into daily routines and creating user demand for localized services.
          </p>
        </div>

        <div class="summary-section">
          <h4>How has it changed since coming to China?</h4>
          <p>
            Google's China experience revealed <strong>deep philosophical divisions</strong> about the company's transformation and motivations <span class="citation" @click="openArticle('/articles/google-china-block')">(5)</span>. Western narratives portray this as Google's moral awakening to values-driven leadership, while Chinese academics argue it represents calculated business decisions rather than principled stands <span class="citation" @click="openArticle('/articles/google-china-quit')">(4)</span>. Interpretations of whether this represents corporate responsibility or commercial calculation remain <strong>fundamentally contested</strong> across cultural lines.
          </p>
        </div>

        <div class="summary-section">
          <h4>How has Chinese culture changed with it?</h4>
          <p>
            Google's cultural impact reveals <strong>stark divisions within Chinese society</strong> based on educational background and international exposure <span class="citation" @click="openArticle('/articles/google-china-retrospective')">(6)</span>. Educated professionals developed lasting expectations for information freedom and integrated services, with many continuing VPN usage for research. However, Chinese academics argue that <strong>most users remained unaffected</strong>, preferring domestic platforms like Baidu <span class="citation" @click="openArticle('/articles/google-china-block')">(5)</span>. This division reflects debates about whether Google's impact was transformational or limited to a small, internationally-oriented segment <span class="citation" @click="openArticle('/articles/google-tieba')">(7)</span>.
          </p>
        </div>

        <div class="key-findings">
          <h4>Key Research Findings</h4>
          <ul>
            <li><strong>Ecosystem Innovation:</strong> Google introduced integrated digital workflows combining search, email, documents, and cloud services that influenced Chinese expectations for seamless platform integration</li>
            <li><strong>Contested Interpretations:</strong> Google's exit sparks fundamentally different narratives—Western media emphasizes moral awakening while Chinese academics view it as calculated business decisions</li>
            <li><strong>Divided Impact:</strong> Google's influence was primarily concentrated among educated, internationally-oriented Chinese users, while the majority remained loyal to domestic platforms like Baidu</li>
            <li><strong>Professional vs. Ideological:</strong> VPN adoption and continued Google usage reflect practical needs for international collaboration rather than ideological awakening to democratic values</li>
            <li><strong>Cultural Stratification:</strong> Google's legacy reveals sharp divisions within Chinese society based on educational background, professional requirements, and international exposure</li>
          </ul>
        </div>
      </div>

      <div class="ai-disclaimer">
        <v-icon size="14" class="me-1" color="#70757a">mdi-information-outline</v-icon>
        <span>AI can make mistakes, so double-check it</span>
      </div>

      <div class="citations-section">
        <h4 class="citations-title">Sources</h4>
        <div class="citations-grid">
          <div class="citation-item" @click="openArticle('/articles/google')">
            <div class="citation-number">1</div>
            <div class="citation-content">
              <div class="citation-title">Google</div>
              <div class="citation-description">American multinational technology corporation founded in 1998</div>
              <div class="citation-date">1998-09-04</div>
            </div>
          </div>

          <div class="citation-item" @click="openArticle('/articles/google-china-enter')">
            <div class="citation-number">2</div>
            <div class="citation-content">
              <div class="citation-title">CNM: The Long Road to China</div>
              <div class="citation-description">Investigation into grassroots adoption and revolutionary impact on information discovery</div>
              <div class="citation-date">2006-01-27</div>
            </div>
          </div>

          <div class="citation-item" @click="openArticle('/articles/google-china-influence')">
            <div class="citation-number">3</div>
            <div class="citation-content">
              <div class="citation-title">Zhihu Discussion: Cultural Impact Analysis</div>
              <div class="citation-description">Chinese users share personal experiences of Google's influence on values and information seeking</div>
              <div class="citation-date">2025-05-31</div>
            </div>
          </div>

          <div class="citation-item" @click="openArticle('/articles/google-china-quit')">
            <div class="citation-number">4</div>
            <div class="citation-content">
              <div class="citation-title">Mambaberg: Google's Exit Creates Cultural Limbo</div>
              <div class="citation-description">Analysis of immediate cultural impact and information anxiety following withdrawal</div>
              <div class="citation-date">2010-03-23</div>
            </div>
          </div>

          <div class="citation-item" @click="openArticle('/articles/google-china-block')">
            <div class="citation-number">5</div>
            <div class="citation-content">
              <div class="citation-title">NBT: A Chinese Perspective</div>
              <div class="citation-description">Alternative viewpoint on commercial vs. ideological motivations for exit</div>
              <div class="citation-date">2025-05-30</div>
            </div>
          </div>

          <div class="citation-item" @click="openArticle('/articles/google-china-retrospective')">
            <div class="citation-number">6</div>
            <div class="citation-content">
              <div class="citation-title">CSJ: Services Ecosystem Impact</div>
              <div class="citation-description">Analysis of how Gmail and integrated services rewired Chinese digital expectations</div>
              <div class="citation-date">2025-05-31</div>
            </div>
          </div>

          <div class="citation-item" @click="openArticle('/articles/google-tieba')">
            <div class="citation-number">7</div>
            <div class="citation-content">
              <div class="citation-title">Tieba: User Memories and Reflections</div>
              <div class="citation-description">Authentic forum discussions about Google's lasting impact 15 years later</div>
              <div class="citation-date">2025-05-31</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const openArticle = (url) => {
  router.push(url)
}
</script>

<style scoped>
.ai-overview {
  background: #f8f9fa;
  border: 1px solid #dadce0;
  border-radius: 12px;
  margin: 20px 0;
  overflow: hidden;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.overview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 12px;
  border-bottom: 1px solid #e8eaed;
  background: white;
}

.ai-badge {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #1a73e8;
}

.overview-actions {
  display: flex;
  gap: 4px;
}

.feedback-btn {
  color: #70757a !important;
}

.feedback-btn:hover {
  background-color: #f1f3f4;
}

.overview-content {
  padding: 20px;
  background: white;
}

.main-summary {
  margin-bottom: 24px;
}

.summary-title {
  font-size: 20px;
  font-weight: 400;
  color: #202124;
  margin-bottom: 16px;
  line-height: 1.4;
}

.summary-section {
  margin-bottom: 16px;
}

.summary-section h4 {
  font-size: 16px;
  font-weight: 500;
  color: #1a73e8;
  margin-bottom: 8px;
  line-height: 1.4;
}

.summary-section p {
  font-size: 14px;
  line-height: 1.6;
  color: #202124;
  margin: 0;
}

.key-findings {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
}

.key-findings h4 {
  font-size: 16px;
  font-weight: 500;
  color: #202124;
  margin-bottom: 12px;
}

.key-findings ul {
  margin: 0;
  padding-left: 20px;
}

.key-findings li {
  font-size: 14px;
  line-height: 1.6;
  color: #202124;
  margin-bottom: 8px;
}

.key-findings strong {
  color: #1a73e8;
  font-weight: 500;
}

.citation {
  color: #1a73e8;
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  padding: 0 2px;
  border-radius: 2px;
  transition: background-color 0.2s ease;
}

.citation:hover {
  background-color: #e8f0fe;
  text-decoration: underline;
}

.ai-disclaimer {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #70757a;
  padding: 12px 0;
  border-top: 1px solid #e8eaed;
  margin-top: 16px;
}

.citations-section {
  border-top: 1px solid #e8eaed;
  padding-top: 20px;
}

.citations-title {
  font-size: 16px;
  font-weight: 500;
  color: #202124;
  margin-bottom: 16px;
}

.citations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;
}

.citation-item {
  background: #f8f9fa;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  gap: 12px;
}

.citation-item:hover {
  border-color: #1a73e8;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.1);
  transform: translateY(-1px);
}

.citation-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #1a73e8;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}

.citation-content {
  flex: 1;
}

.citation-title {
  font-size: 14px;
  font-weight: 500;
  color: #1a73e8;
  margin-bottom: 4px;
  line-height: 1.4;
}

.citation-description {
  font-size: 12px;
  color: #5f6368;
  line-height: 1.4;
  margin-bottom: 4px;
}

.citation-date {
  font-size: 11px;
  color: #70757a;
}

/* Responsive design */
@media (max-width: 768px) {
  .overview-header {
    padding: 12px 16px 8px;
  }
  
  .overview-content {
    padding: 16px;
  }
  
  .citations-grid {
    grid-template-columns: 1fr;
  }
  
  .summary-title {
    font-size: 18px;
  }
}
</style>
