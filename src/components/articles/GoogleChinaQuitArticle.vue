<template>
  <div class="article-body">
    <!-- Bloomberg Publisher Header -->
    <div class="bloomberg-publisher-header">
      <div class="bloomberg-logo">
        <span class="bloomberg-logo-text">Bloomberg</span>
        <span class="bloomberg-logo-subtitle">Business • Markets • Technology</span>
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

    <!-- Bloomberg Header -->
    <div class="bloomberg-header mb-4">
      <div class="category-badge">TECHNOLOGY</div>
      <h1 class="headline">Google's China Exit Leaves Digital Generation in Cultural Limbo</h1>
      <div class="subheadline">Interviews reveal how Google's sudden withdrawal reshaped information-seeking behaviors and political consciousness among Chinese internet users</div>
      <div class="byline-section">
        <div class="author-info">
          <span class="author">Will Li</span>
          <span class="location">Beijing</span>
        </div>
        <div class="publish-time">March 23, 2010, 4:47 PM EDT</div>
      </div>
    </div>

    <!-- Key Points Summary -->
    <div class="key-points mb-4">
      <h3>Cultural Impact</h3>
      <ul>
        <li>Google's abrupt exit creates "information anxiety" among educated users</li>
        <li>VPN adoption surges as users seek alternative access methods</li>
        <li>Digital divide widens between internationally-minded and domestic users</li>
        <li>Withdrawal triggers conversations about information control and political freedom</li>
      </ul>
    </div>

    <!-- Lead paragraph -->
    <p class="text-body-1 mb-4 lead-paragraph">
      When Google ceased operations in mainland China on Tuesday, millions of Chinese users didn't just lose access to a search engine—they experienced what many describe as a sudden amputation from global digital culture, creating an unexpected political awakening among a generation that had grown accustomed to unrestricted information access.
    </p>


    <h2 class="section-header">The Moment of Departure</h2>
    <p class="text-body-1 mb-4">
      "I was quite shocked and surprised," recalls Ms. Li, a Beijing-based teacher who was among millions of Chinese users affected by Google's sudden withdrawal. "I wondered why they left and what happened in the middle. I was definitely curious." Her reaction captured the feelings across China's digital community as users were shocked by the loss of their preferred search engine.

    </p>



    <p class="text-body-1 mb-4">
      The withdrawal triggered adaptations among many China's internet users due to the shocked of their relying internet service had suddenly quitted China. Discussions about VPN services and proxy servers had began flourishing through different social networks in China. 
    </p>

    <h2 class="section-header">Cultural Fragmentation</h2>

    <div class="cultural-shift-box mb-4">
      <h3>The Political Awakening</h3>
      <p class="shift-text">
        Google's withdrawal from China created a shared political vocabulary among educated Chinese users. For the very first time, many Chinese internet users began discussing concepts like "freedom of information," "digital rights," and "censorship", using Google's leave to imply a broader political discussion.
      </p>
    </div>


    
    <p class="text-body-1 mb-4">
      Google's exit had splitted of Chinese internet culture into distinct populations with fundamentally different digital cultural references and habits based on their education level and global insight. 
    </p>

    <p class="text-body-1 mb-4">
      Chinese users who maintained international internet access through VPNs and proxy services developed very different worldviews and values from the users who adapted to the local domestic platforms such as Baidu, forming different views on foreign and also domestic politics. As in the interview, interviewees with a more internationalized background and internet habits are often more likely to hold a positive opinion of Google. 
    </p>

    <h2 class="section-header">The New Information Consciousness</h2>
    <p class="text-body-1 mb-4">
      Perhaps most significantly, Google's withdrawal from China created an awareness among Chinese users of the politics regarding technology access. Many users considers that Google's as an example of how political authority directly affecting their personal lives.
    </p>

    <p class="text-body-1 mb-4">
      This political awakening continues to resonate years later. Zhou, a Chinese Google user, reflects: "I think it was unwise, but probably a forced decision." When asked about the Chinese Firewall's blocking of Google services, he explained: "From my personal perspective—I don't mind saying this—I don't think it was necessary. Completely blocking it was excessive." She advocates for a more nuanced approach: "It's about 'taking what's good and discarding the bad'—that's normal. And honestly, rejecting Google entirely is a loss for China. It's still the most powerful search engine in the world."
    </p>

    <p class="text-body-1 mb-4">
      Google's China exit represents more than a commercial decision—it marks a cultural and political turning point that divided Chinese internet users into distinct information communities with different political awareness levels, creating lasting changes in how an entire generation of Chinese internet users approaches knowledge, authority, and their relationship with both technology and the nation.
    </p>

    <div class="bloomberg-footer">
      <p class="attribution">Based on interviews with 8 Chinese Google users conducted in Beijing and Dalian</p>
      <p class="contact">Contact the reporter: will.li.2026@this.edu.cn</p>
    </div>
  </div>
</template>

<style scoped>
.article-body {
  line-height: 1.6;
  max-width: 780px;
  margin: 0 auto;
  font-family: 'Bloomberg', 'Helvetica Neue', Arial, sans-serif;
  color: #000;
  background-color: #fff;
}

.bloomberg-header {
  border-bottom: 3px solid #000;
  padding-bottom: 24px;
  margin-bottom: 32px;
}

.category-badge {
  background-color: #000;
  color: #fff;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 16px;
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
  color: #000;
  font-family: 'Bloomberg', Georgia, serif;
}

.subheadline {
  font-size: 1.25rem;
  line-height: 1.4;
  color: #666;
  margin-bottom: 24px;
  font-weight: 400;
}

.byline-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  font-size: 14px;
}

.author-info {
  display: flex;
  gap: 8px;
  align-items: center;
}

.author {
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.location {
  color: #666;
  font-style: italic;
}

.publish-time {
  color: #666;
  font-size: 13px;
}

.key-points {
  background-color: #fff3e0;
  border: 1px solid #f39c12;
  border-left: 4px solid #f39c12;
  border-radius: 0;
  padding: 20px;
  margin: 24px 0;
}

.key-points h3 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #d68910;
}

.key-points ul {
  margin: 0;
  padding-left: 20px;
  list-style-type: disc;
}

.key-points li {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
}

.lead-paragraph {
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  margin-bottom: 24px;
  padding: 0 0 0 16px;
  border-left: 4px solid #000;
}

.section-header {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 40px 0 20px 0;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #000;
  padding-bottom: 8px;
}

.user-reaction-box {
  background-color: #e8f4fd;
  border-left: 4px solid #2196f3;
  padding: 20px;
  margin: 24px 0;
  border-radius: 4px;
}

.user-reaction-box h3 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 700;
  color: #1976d2;
}

.reaction-text {
  margin: 0;
  line-height: 1.6;
  color: #333;
  font-style: italic;
}

.cultural-shift-box {
  background-color: #fff3e0;
  border: 1px solid #ff9800;
  border-left: 4px solid #ff9800;
  padding: 20px;
  margin: 24px 0;
  border-radius: 4px;
}

.cultural-shift-box h3 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 700;
  color: #f57c00;
}

.shift-text {
  margin: 0;
  line-height: 1.6;
  color: #333;
  font-weight: 500;
}

.long-term-impact {
  background-color: #f0f0f0;
  border: 2px solid #000;
  padding: 24px;
  margin: 32px 0;
}

.long-term-impact h3 {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #000;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.impact-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #000;
}

.metric {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #666;
  margin-bottom: 8px;
}

.value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  font-family: 'Courier New', monospace;
}

.bloomberg-footer {
  border-top: 2px solid #000;
  margin-top: 48px;
  padding-top: 24px;
  font-size: 13px;
  color: #666;
}

.attribution {
  margin-bottom: 8px;
  font-style: italic;
}

.contact {
  margin: 0;
  font-weight: 600;
  color: #000;
}

.text-body-1 {
  margin-bottom: 20px;
  color: #333;
  line-height: 1.7;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .headline {
    font-size: 2rem;
  }
  
  .subheadline {
    font-size: 1.1rem;
  }
  
  .byline-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .impact-grid {
    grid-template-columns: 1fr;
  }
  
  .key-points {
    margin: 16px -16px;
    border-radius: 0;
    border-left: 4px solid #f39c12;
    border-right: none;
  }
  
  .user-reaction-box,
  .cultural-shift-box {
    padding: 16px;
  }
}

/* Print styles */
@media print {
  .article-body {
    max-width: none;
    color: #000;
  }
  
  .long-term-impact,
  .key-points,
  .user-reaction-box,
  .cultural-shift-box {
    border: 2px solid #000;
    background: #f8f9fa !important;
  }
  
  .category-badge {
    background: #000 !important;
    color: #fff !important;
  }
}

/* Bloomberg Publisher Header Styles */
.bloomberg-publisher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  background-color: #000;
  color: white;
  margin: -16px -16px 24px -16px;
  padding: 16px;
}

.bloomberg-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bloomberg-logo-text {
  font-size: 28px;
  font-weight: bold;
  color: white;
  font-family: 'Arial', sans-serif;
}

.bloomberg-logo-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.bloomberg-publisher-header .action-btn {
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  text-transform: none;
  font-size: 13px;
}

.bloomberg-publisher-header .action-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: white;
}

@media print {
  .bloomberg-publisher-header {
    display: none;
  }
}
</style>