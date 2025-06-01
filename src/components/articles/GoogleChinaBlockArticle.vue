<template>
  <div class="article-body">
    <!-- NYT Publisher Header -->
    <div class="nyt-publisher-header">
      <div class="nyt-logo">
        <span class="nyt-logo-text">The New York Times</span>
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

    <!-- NYT Opinion Header -->
    <div class="nyt-header mb-6">
      <div class="opinion-badge">GUEST ESSAY</div>
      <h1 class="headline">A Chinese Perspective: Google's Exit Was Business Logic, Not Moral Victory</h1>
      <div class="subheadline">The tech giant's withdrawal from China was about regulatory compliance and commercial calculation, not principles nor values</div>
      <div class="byline-section">
        <div class="author-info">
          <span class="author-name">By He ShengHui</span>
          <p class="author-bio">Dr. He is a biologist and technology researcher based in Beijing who has worked in both Chinese and American markets.</p>
        </div>
        <div class="publish-date">May 30, 2025</div>
      </div>
    </div>

    <!-- Opinion content with NYT style -->
    <p class="text-body-1 mb-4 opening-paragraph">
      Every time I use a VPN to access Google for my research work, I'm reminded of how the Western narratives of cultural impact often make normal business decisions into grand moral dramas of freedom and democracy. In this case, Google's experience in China represents only a simple regulatory compliance issue, but not the transformation of the westernization of Chinese people as many assumed.     </p>
    
    <p class="text-body-1 mb-4">
      As a person who observed the whole process from Beijing, I find the claims about Google's advances in company values and its impact on Chinese culture to be greatly exaggerated. While the truth is that, Google is only a foreign company that made calculated business decisions, and life in China continued largely unchanged.
    </p>

    <h2 class="section-header">Google Didn't Change—It Always Calculated</h2>
    <p class="text-body-1 mb-4">
      Western media likes to portray Google's China experience as a moral awakening of not only the Chinese people but also Google the company itself, transforming the company from naive idealists into an advocate that promotes values of freedom. However, this narrative is simply false. Google has always been a corporation making calculated decisions to maximize its own commercial benefits.
    </p>
    <p class="text-body-1 mb-4">
      Before China, in fact, Google had already compromised with various foreign governments on its search service, removing sensitive content when required by local laws. And after China, it continued doing the same thing—complying with regulations in some markets while exiting others when the cost of it became too high. Representing an action of commercial but not value-based. 
    </p>

    <h2 class="section-header">The Myth of Cultural Impact</h2>
    <p class="text-body-1 mb-4">
      A more misleading claim is the voice that states Google's brief and insistence on value had somehow awakened the Chinese users to concepts of information freedom and furthered the Western values of freedom and democracy, turning them to question and oppose their government. Though this actually reflects a misunderstanding of Chinese internet culture and user behavior and is from the perspective of the present.
    </p>

    <p class="text-body-1 mb-4">
      Most Chinese users never completely relied on Google for daily internet activities. Instead, the Chinese search engine Baidu is always the market dominator. And even for the seemly considerable number of users of Google, it primarily served the users of academics with higher education and with a more internationalized mindset. While the vast majority of Chinese internet users prefer the more “Chinese-ish” Baidu.
    </p>

    <p class="text-body-1 mb-4">
      Thus, the idea that Google introduced Chinese users to “independent thinking” is just condescending. Chinese internet users know their government and the truth about the foreign company Google, and know which search engine is the best for their use. Given its compliance with regulations in China, Google is simply another Baidu. And for its exit, very few Chinese had been particularly affected, hence with no fundamental effects and influences as the Western media renders.
    </p>

    <h2 class="section-header">VPN Usage: Practical, Not Ideological</h2>
    <p class="text-body-1 mb-4">
      Western media often point to the widespread usage of VPN in China as evidence of Chinese internet users seeking the “information freedom” they experienced with Google. And this is entirely another misinterpretation. Most VPN usage among educated Chinese users is practical, not ideological.
    </p>

    <p class="text-body-1 mb-4">
      As a researcher, I use VPNs to access international databases and collaborate with global research communities, not to use Google to search for Western ideals of freedom and democracy and oppose my very own government. This is not Google's so-called enlightenment in values and ideals. VPN is more of a tool for international work, but not a statement of values.
    </p>

    <h2 class="section-header">Microsoft Showed the Sustainable Path</h2>
    <p class="text-body-1 mb-4">
      The contrast with Microsoft reveals the real story of Google’s exit. Microsoft Bing kept operating in China today because Microsoft approached regulatory compliance as a normal business requirement rather than a confrontation with authoritarian values. This demonstrated that Western companies can succeed in China when they focus on serving users rather than making political statements. Google had the same option in 2010. And obviously, Google thinks that it's worth the price.
    </p>

    <p class="text-body-1 mb-4 closing-paragraph">
      Google's China experience teaches valuable lessons about international business operations, but not the ones commonly cited in Western media. Success in global markets requires understanding local regulatory frameworks as business requirements, not cultural battlegrounds. Google's withdrawal represents a calculated business decision that the company was unwilling to meet operational requirements in a particular market—perfectly normal corporate behavior that doesn't require dramatic narratives about moral awakening or cultural transformation.
    </p>

    <div class="nyt-footer">
      <p class="footer-text">He ShengHui is a biologist and technology researcher based in Beijing.</p>
    </div>
  </div>
</template>

<style scoped>
.article-body {
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto;
  font-family: 'nyt-cheltenham', 'Georgia', 'Times New Roman', serif;
  color: #333;
}

.nyt-header {
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 32px;
  margin-bottom: 40px;
}

.opinion-badge {
  background-color: #000;
  color: white;
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: inline-block;
  margin-bottom: 16px;
  font-family: 'nyt-franklin', 'Arial', sans-serif;
}

.headline {
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #121212;
  font-family: 'nyt-cheltenham', 'Georgia', serif;
}

.subheadline {
  font-size: 1.25rem;
  line-height: 1.4;
  color: #666;
  margin-bottom: 32px;
  font-weight: 400;
  font-style: italic;
}

.byline-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 15px;
  font-weight: 600;
  color: #121212;
  font-family: 'nyt-franklin', 'Arial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.author-bio {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin-top: 8px;
  font-style: italic;
  margin-bottom: 0;
}

.publish-date {
  font-size: 14px;
  color: #666;
  font-family: 'nyt-franklin', 'Arial', sans-serif;
  white-space: nowrap;
}

.opening-paragraph {
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 24px !important;
  color: #121212;
}

.section-header {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 40px 0 20px 0;
  color: #121212;
  font-family: 'nyt-cheltenham', 'Georgia', serif;
}

.closing-paragraph {
  font-weight: 500;
  font-style: italic;
  border-left: 3px solid #000;
  padding-left: 20px;
  margin-top: 32px !important;
}

.nyt-footer {
  border-top: 1px solid #e2e2e2;
  margin-top: 48px;
  padding-top: 24px;
}

.footer-text {
  font-size: 14px;
  color: #666;
  font-family: 'nyt-franklin', 'Arial', sans-serif;
  margin: 0;
}

/* Typography refinements */
.text-body-1 {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

/* Drop cap for opening paragraph */
.opening-paragraph::first-letter {
  float: left;
  font-size: 4rem;
  line-height: 3.2rem;
  padding-right: 8px;
  margin-top: 4px;
  font-weight: 700;
  color: #121212;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .headline {
    font-size: 2.25rem;
  }
  
  .subheadline {
    font-size: 1.1rem;
  }
  
  .byline-section {
    flex-direction: column;
    gap: 16px;
  }
  
  .opening-paragraph::first-letter {
    font-size: 3rem;
    line-height: 2.5rem;
  }
  
  .text-body-1 {
    font-size: 1rem;
  }
  
  .section-header {
    font-size: 1.3rem;
  }
}

/* NYT Publisher Header Styles */
.nyt-publisher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 2px solid #000;
  margin-bottom: 24px;
}

.nyt-logo-text {
  font-family: 'Old English Text MT', serif;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.publisher-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  text-transform: none;
  font-size: 13px;
  border-color: #000;
  color: #000;
}

.action-btn:hover {
  background-color: #f5f5f5;
}

/* Print styles */
@media print {
  .article-body {
    max-width: none;
    font-size: 12pt;
    line-height: 1.5;
  }
  
  .headline {
    font-size: 24pt;
  }
  
  .nyt-publisher-header,
  .publisher-actions {
    display: none;
  }
}
</style>