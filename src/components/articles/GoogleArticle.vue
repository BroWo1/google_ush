<template>
  <div class="wikipedia-article">
    <!-- Wikipedia Header -->
    <div class="wikipedia-header">
      <div class="wikipedia-logo">
        <span class="logo-icon">🌐</span>
        <span class="logo-text">Wikipedia</span>
        <span class="logo-subtitle">The Free Encyclopedia</span>
      </div>
      <div class="article-actions">
        <v-btn variant="outlined" size="small" class="action-btn">
          <v-icon left size="16">mdi-pencil</v-icon>
          Edit
        </v-btn>
        <v-btn variant="outlined" size="small" class="action-btn">
          <v-icon left size="16">mdi-history</v-icon>
          History
        </v-btn>
      </div>
    </div>

    <div class="article-header">
      <h1 class="article-title">Google</h1>
      <div class="article-subtitle">American multinational technology corporation</div>
    </div>

    <div class="infobox">
      <div class="infobox-header">Google LLC</div>
      <div class="infobox-content">
        <div class="infobox-row">
          <span class="label">Type:</span>
          <span class="value">Subsidiary of Alphabet Inc.</span>
        </div>
        <div class="infobox-row">
          <span class="label">Founded:</span>
          <span class="value">1998</span>
        </div>
        <div class="infobox-row">
          <span class="label">Founders:</span>
          <span class="value">Two Stanford PhDs</span>
        </div>
        <div class="infobox-row">
          <span class="label">Market Share:</span>
          <span class="value">~70% of global online search</span>
        </div>
        <div class="infobox-row">
          <span class="label">Industry:</span>
          <span class="value">Internet, Technology</span>
        </div>
      </div>
    </div>

    <div class="article-content">
      
      <p class="lead-paragraph">
        <strong>Google LLC</strong> is an American internet company, founded in 1998 by two Stanford PhDs. It is deeply integrated into modern informational life.
      </p>

      <p>
        Google Search dominates 70% of the online search market globally. The word "Google" has become a verb for searching, and its products like Google Search, YouTube, and Chrome are widely used.
      </p>

      <h2 id="history">History</h2>
      
      <h3 id="founding-early-years">Founding and Early Years (1998-2004)</h3>
      <p>
        Google was founded in 1998 by two Stanford PhDs. Google Search, introduced the same year, is considered the first modern Search Engine. Around 2000, its popularity grew significantly after being integrated into Yahoo as its client search service.
      </p>

      <h3 id="expansion-ipo">Expansion (2004-Present)</h3>
      <p>
        Google went public in 2004 and expanded its business beyond search services. Gmail, which began beta testing in 2004, became the largest email service. Google Maps and Earth, launched in 2005, became dominant map services. Google acquired YouTube in 2006, which is now the second-largest social media platform.
      </p>

      <h3 id="modern-developments">Modern Developments</h3>
      <p>
        Google has continued to expand its services. In 2014, Google acquired DeepMind, which now has Gemini, a leading large language model. In 2016, Google established Waymo, a well-known self-driving company. These services have built Google's internet empire, making it one of the world's largest companies.
      </p>

      <h2 id="china-operations">Operations in China</h2>
      <p>
        Google has had a complicated history in China since entering the market in 2006, leading to its "awkward insignificance" there compared to its global presence.
      </p>

      <h3 id="google-cn-launch">Google.cn Launch (2006)</h3>
      <p>
        Google launched its Chinese search engine, Google.cn, in 2006. This version censored content, blocked politically sensitive results, and filtered to include only Chinese websites. Despite this, Google's business in China grew rapidly, and Google.cn became the second largest search engine in the Chinese market, after Baidu.
      </p>

      <h3 id="cyber-attacks-withdrawal">Cyber Attacks and Withdrawal (2010)</h3>
      <p>
        Google's business in China was short-lived. In 2010, Google stated it suffered a cyber attack from China. Consequently, it shut down Google.cn, removed censorship, and redirected requests to its global Hong Kong website. This marked the end of Google’s search service in China.
      </p>

      <h3 id="continued-restrictions">Continued Restrictions and Later Attempts</h3>
      <p>
        After 2010, Google continued to withdraw its services from China. In 2014, the Chinese government banned other Google services like Gmail and Chrome. Google later closed the Chinese versions of Google Maps (2019) and Translate (2022). There were attempts to re-enter, notably Project Dragonfly in 2018, a plan for a censored search engine, but it was shut down internally in 2019.
      </p>

      <div class="highlighted-box">
        <h4>Project Dragonfly</h4>
        <p>
          In 2018, reports surfaced about Google’s Project Dragonfly, which aimed to create a censored Google Search for China. The project was later shut down within Google in 2019.
        </p>
      </div>

      <h2 id="products-services">Products and Services</h2>
      <p>
        Google offers a wide variety of products, such as Google Search, YouTube, and Chrome, which are frequently used and deeply integrated into modern life.
      </p>

      <h3 id="core-search">Search and Advertising</h3>
      <p>
        Google Search, introduced in 1998, was the first modern Search Engine. Advertisement services based on search results regarding it later became Google’s main revenue source.
      </p>

      <h3 id="communication-productivity">Communication and Productivity</h3>
      <p>
        Google's online email service Gmail started beta testing in 2004. It has since become the largest email service globally because of its integration with other Google services. 
      </p>
      <h3 id="maps-earth">Maps and Earth</h3>
      <p>
        Google Maps and Earth, launched in 2005, became dominant map services. They are widely used for navigation by users around the world.
      </p>

      <h2 id="references">References</h2>
      <div class="references">
        <ul>
          <li>Afp. "Chronology of Google's Operations in China." <em>The Independent</em>, 23 Mar. 2010.</li>
          <li>Boston University. "Google V. China." <em>BU Today</em>, 19 June 2019.</li>
          <li><em>Britannica Money</em>. "Google Inc." 13 May 2025.</li>
          <li>"Google’s Incredible Growth: A Timeline." <em>CNM Interactive</em>.</li>
          <li>"How Google Took on China—and Lost." <em>MIT Technology Review</em>, 22 Aug. 2024.</li>
          <li>SmartAsset. "History of Google: Company and Stock." <em>Nasdaq</em>.</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<style scoped>
.wikipedia-article {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #222;
  background-color: #fff;
}

.article-header {
  border-bottom: 3px solid #a2a9b1;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.article-title {
  font-size: 2.3em;
  font-weight: normal;
  margin: 0 0 5px 0;
  color: #000;
  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
}

.article-subtitle {
  font-size: 1.1em;
  color: #54595d;
  font-style: italic;
  margin-bottom: 10px;
}

.infobox {
  float: right;
  width: 300px;
  margin: 0 0 20px 20px;
  border: 1px solid #a2a9b1;
  background-color: #f8f9fa;
  padding: 0;
  clear: right;
}

.infobox-header {
  background-color: #ccccff;
  padding: 8px 12px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #a2a9b1;
  color: #000;
}

.infobox-content {
  padding: 12px;
}

.infobox-row {
  display: flex;
  margin-bottom: 6px;
  align-items: flex-start;
}

.infobox-row .label {
  font-weight: bold;
  min-width: 100px;
  margin-right: 8px;
  color: #222;
}

.infobox-row .value {
  flex: 1;
  color: #222;
}

.article-content {
  clear: both;
}

.lead-paragraph {
  font-size: 1.1em;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
  font-weight: normal;
  margin: 30px 0 15px 0;
  padding-bottom: 3px;
  border-bottom: 1px solid #a2a9b1;
  color: #000;
  font-family: 'Linux Libertine', 'Georgia', 'Times', serif;
}

h3 {
  font-size: 1.2em;
  font-weight: bold;
  margin: 25px 0 10px 0;
  color: #000;
}

h4 {
  font-size: 1.1em;
  font-weight: bold;
  margin: 20px 0 8px 0;
  color: #000;
}

p {
  margin-bottom: 15px;
  text-align: justify;
}

ul, ol {
  margin: 15px 0;
  padding-left: 30px;
}

li {
  margin-bottom: 5px;
}

.highlighted-box {
  background-color: #f6f6f6;
  border: 1px solid #a2a9b1;
  border-left: 10px solid #36c;
  padding: 15px;
  margin: 20px 0;
}

.highlighted-box h4 {
  margin-top: 0;
  color: #36c;
}

.references {
  background-color: #f8f9fa;
  border: 1px solid #a2a9b1;
  padding: 15px;
  margin-top: 30px;
}

.references ul {
  margin: 10px 0;
}

.references li {
  margin-bottom: 8px;
  font-size: 0.9em;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .wikipedia-article {
    padding: 15px;
  }
  
  .infobox {
    float: none;
    width: 100%;
    margin: 20px 0;
  }
  
  .article-title {
    font-size: 1.8em;
  }
  
  h2 {
    font-size: 1.3em;
  }
}

/* Links styling (Wikipedia-like) */
a {
  color: #0645ad;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:visited {
  color: #0b0080;
}

/* Emphasis styling */
strong {
  font-weight: bold;
}

em {
  font-style: italic;
}

/* Wikipedia Header Styles */
.wikipedia-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;
}

.wikipedia-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 24px;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.logo-subtitle {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.article-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  text-transform: none;
  font-size: 13px;
}

/* Print styles */
@media print {
  .infobox {
    float: none;
    width: 100%;
    margin: 20px 0;
  }
  
  .wikipedia-article {
    max-width: none;
    font-size: 11pt;
  }
  
  .wikipedia-header,
  .article-actions {
    display: none;
  }
}
</style>