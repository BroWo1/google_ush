<template>
  <div class="article-body">
    <!-- WSJ Publisher Header -->
    <div class="wsj-publisher-header">
      <div class="wsj-logo">
        <span class="wsj-logo-text">The ChangAn Street Journal</span>
        <span class="wsj-logo-subtitle">China's Business Daily</span>
      </div>
      <div class="publisher-actions">
        <v-btn variant="outlined" size="small" class="action-btn">
          <v-icon left size="16">mdi-account-plus</v-icon>
          Subscribe
        </v-btn>
        <v-btn variant="outlined" size="small" class="action-btn">
          <v-icon left size="16">mdi-share</v-icon>
          Share
        </v-btn>
      </div>
    </div>

    <!-- WSJ Header -->
    <div class="wsj-header mb-4">
      <div class="section-tag">TECHNOLOGY & CULTURE</div>
      <h1 class="headline">How Google's Services Ecosystem Rewired Chinese Digital Expectations</h1>
      <div class="subheadline">Gmail, Google Account, and integrated services quietly transformed how Chinese users approach digital identity and productivity</div>
      <div class="byline-section">
        <div class="author-line">
          <span class="author">By Will Li</span>
        </div>
        <div class="publish-info">
          <span class="date">Updated May 31, 2025 2:47 pm ET</span>
        </div>
      </div>
    </div>

    <!-- WSJ Lead paragraph -->
    <p class="text-body-1 mb-4 lead-paragraph">
      While Google's search engine is perhaps the most well-known Google service, it was its integrated services ecosystem—Gmail, Google Account, Google, Chrome, etc.—that quietly revolutionized millions of Chinese users’ online habits, fundamentally changing China's internet culture today.
    </p>
    
    <p class="text-body-1 mb-4">
      Interviews with users reveal that Google's services ecosystem introduced the concept of integration between various digital services on the internet, influencing how Chinese users evaluate and adopt new technologies even after Google's withdrawal.
    </p>
    
    <h2 class="section-header">The Gmail Revolution</h2>
    <p class="text-body-1 mb-4">
      Gmail's arrival in China is more than just another traditional email service—but is a new way of digital communication that ties the users' activity and interaction across different websites, storing their account information universally on the cloud. 
    </p>

    <div class="user-story-box mb-4">
      <h3>Digital Identity Transformation</h3>
      <p class="story-text">
        "Gmail—I still have a Gmail account. My Apple account is tied to Gmail," explains Zhou, a Google user who discovered how its email service became the foundation of her digital identity. The persistence of Gmail as her primary account even after the exit of Google from China demonstrates how Google's integrated approach to its email service had created lasting digital habits among Chinese users. 
      </p>
    </div>

    <p class="text-body-1 mb-4">
      Chinese users accustomed to using formal and more traditional email systems discovered Gmail's low threshold of being totally free to acquire advanced email features. More significantly, they also experienced its cloud-based data persistence—emails can now be accessed from any device, and can be freely used anywhere on other websites and services.
    </p>

    <h2 class="section-header">The Google Account Ecosystem Effect</h2>
    <p class="text-body-1 mb-4">
      Google Account integration across services—Gmail, YouTube, Search, and even other third-party websites—introduced Chinese users to the concept of a unified and universal digital identity, a revolutionary idea in the old internet that was dominated by isolated and discrete services of different internet companies.  
    </p>

    <div class="user-story-box mb-4">
      <h3>Digital Identity Transformation</h3>
      <p class="story-text">
      "I have a lot of Google accounts logged into separate different YouTube recommendation feeds. And for different services, Google, I can also use Google to log in and keep track of my basically signed up accounts," explains Eric, reflecting on Google's influence. "Without Google, I would be losing a very large source of my information online and like experiences that I've learned. So I feel like Google has like a very large influence on my life."
      </p>
    </div>
    
  

    <div class="cultural-impact-box mb-4">
      <h3>Lasting Cultural Shifts</h3>
      <div class="impact-list">
        <div class="impact-item">
          <span class="impact-label">Expectation of Service Integration</span>
          <span class="impact-description">Users demand a unified login and cross-platform functionality</span>
        </div>
        <div class="impact-item">
          <span class="impact-label">Digital Identity Consistency</span>
          <span class="impact-description">Single sign-on and persistent user profiles as standard</span>
        </div>
      </div>
    </div>

    <h2 class="section-header">Why This Cultural Shift Matters</h2>
    <p class="text-body-1 mb-4">
      The cultural changes introduced by Google's services ecosystem created lasting expectations that influenced how Chinese users evaluate and adopt new technologies. And this expectation is deeply rooted in the Chinese digital internet culture, affecting everything from social media to productivity. 
    </p>

    <p class="text-body-1 mb-4">
      Chinese local technology companies also subsequently developed their own integrated ecosystems—WeChat's super-app model, Alibaba's Alipay, etc.—all reflected Chinese internet users’ expectations established due to the arrival of Google. Even now, when Google was blocked and required a VPN to access, there still exist many Chinese users to continue to use Google services because of the convenience and reliance on its ecosystem. 
    </p>

    <div class="wsj-footer">
      <p class="correction-note">Analysis based on interviews with 8 Google users in Beijing and Dalian.</p>
      <p class="contact-info">Write to Will Li at will.li.2026@this.edu.cn</p>
    </div>
  </div>
</template>

<style scoped>
.article-body {
  line-height: 1.6;
  max-width: 740px;
  margin: 0 auto;
  font-family: 'Exchange', 'Georgia', 'Times New Roman', serif;
  color: #000;
  background-color: #fff;
}

.wsj-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 24px;
  margin-bottom: 32px;
}

.section-tag {
  color: #d71921;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  font-family: 'Retina', 'Helvetica Neue', Arial, sans-serif;
}

.headline {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 16px;
  color: #000;
  font-family: 'Exchange', Georgia, serif;
}

.subheadline {
  font-size: 1.125rem;
  line-height: 1.4;
  color: #666;
  margin-bottom: 24px;
  font-weight: 400;
  font-style: italic;
}

.byline-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  font-size: 14px;
  font-family: 'Retina', 'Helvetica Neue', Arial, sans-serif;
}

.author-line .author {
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.publish-info .date {
  color: #666;
  font-size: 13px;
}

.lead-paragraph {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  margin-bottom: 24px;
  font-style: italic;
}

.section-header {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 40px 0 20px 0;
  color: #000;
  font-family: 'Exchange', Georgia, serif;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 8px;
}

.user-story-box {
  background-color: #f0f8ff;
  border-left: 4px solid #4a90e2;
  padding: 20px;
  margin: 24px 0;
}

.user-story-box h3 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #4a90e2;
  font-family: 'Retina', 'Helvetica Neue', Arial, sans-serif;
}

.story-text {
  margin: 0;
  line-height: 1.6;
  color: #333;
  font-style: italic;
}

.service-impact-box {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 24px 0;
}

.service-impact-box h3 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  font-family: 'Retina', 'Helvetica Neue', Arial, sans-serif;
}

.service-data {
  display: grid;
  gap: 8px;
}

.service-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e5e5e5;
}

.service-row:last-child {
  border-bottom: none;
}

.service {
  font-weight: 500;
  color: #000;
}

.value {
  font-weight: 600;
  color: #d71921;
  font-family: 'Retina', 'Helvetica Neue', Arial, sans-serif;
}

.wsj-quote {
  border-left: 3px solid #d71921;
  padding: 20px 24px;
  margin: 24px 0;
  background-color: #fafafa;
  font-size: 1.1rem;
  font-style: italic;
  line-height: 1.6;
  color: #333;
}

.cultural-impact-box {
  background-color: #fff9e6;
  border: 1px solid #f39c12;
  border-left: 4px solid #f39c12;
  padding: 20px;
  margin: 24px 0;
}

.cultural-impact-box h3 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #f39c12;
  font-family: 'Retina', 'Helvetica Neue', Arial, sans-serif;
}

.impact-list {
  display: grid;
  gap: 12px;
}

.impact-item {
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #fff;
  border-left: 3px solid #f39c12;
}

.impact-label {
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin-bottom: 4px;
}

.impact-description {
  font-size: 13px;
  color: #666;
  font-style: italic;
}

.wsj-footer {
  border-top: 1px solid #ddd;
  margin-top: 48px;
  padding-top: 24px;
  font-size: 13px;
  font-family: 'Retina', 'Helvetica Neue', Arial, sans-serif;
}

.correction-note {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-style: italic;
  color: #856404;
  border-radius: 4px;
}

.contact-info {
  color: #666;
  margin: 0;
  font-weight: 500;
}

/* WSJ Typography refinements */
.text-body-1 {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;
}

/* Drop cap for lead paragraph */
.lead-paragraph::first-letter {
  float: left;
  font-size: 4rem;
  line-height: 3.2rem;
  padding-right: 8px;
  margin-top: 4px;
  font-weight: 400;
  color: #d71921;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .headline {
    font-size: 2rem;
  }
  
  .subheadline {
    font-size: 1rem;
  }
  
  .byline-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .lead-paragraph::first-letter {
    font-size: 3rem;
    line-height: 2.5rem;
  }
  
  .service-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .user-story-box,
  .cultural-impact-box {
    padding: 16px;
  }
}

/* Print styles */
@media print {
  .article-body {
    max-width: none;
    font-size: 11pt;
    line-height: 1.4;
  }
  
  .headline {
    font-size: 24pt;
  }
  
  .service-impact-box,
  .cultural-impact-box,
  .user-story-box {
    border: 1px solid #000;
    background: #f9f9f9 !important;
  }
  
  .correction-note {
    background: #f0f0f0 !important;
    border: 1px solid #666 !important;
  }
}

/* WSJ specific styling touches */
.text-body-1 strong {
  font-weight: 600;
}

.text-body-1 em {
  font-style: italic;
}

/* Hover effects for interactive elements */
.service-row:hover {
  background-color: #f5f5f5;
}

.impact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

/* WSJ Publisher Header Styles */
.wsj-publisher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 3px solid #000;
  margin-bottom: 24px;
}

.wsj-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.wsj-logo-text {
  font-family: 'Escrow', serif;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.wsj-logo-subtitle {
  font-size: 11px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.wsj-publisher-header .action-btn {
  color: #000;
  border-color: #000;
  text-transform: none;
  font-size: 13px;
}

.wsj-publisher-header .action-btn:hover {
  background-color: #f5f5f5;
}

@media print {
  .wsj-publisher-header {
    display: none;
  }
}
</style>