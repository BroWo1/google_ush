<template>
  <div class="article-body">
    <!-- CNN Publisher Header -->
    <div class="cnn-publisher-header">
      <div class="cnn-logo">
        <span class="cnn-logo-text">CNM</span>
        <span class="cnn-logo-subtitle">Business</span>
      </div>
      <div class="publisher-actions">
        <v-btn variant="outlined" size="small" class="action-btn">
          <v-icon left size="16">mdi-television</v-icon>
          Watch Live
        </v-btn>
        <v-btn variant="outlined" size="small" class="action-btn">
          <v-icon left size="16">mdi-share</v-icon>
          Share
        </v-btn>
      </div>
    </div>

    <!-- CNN Style Header -->
    <div class="cnn-header mb-4">
      <div class="breaking-badge">BUSINESS</div>
      <h1 class="headline">The Long Road to China: How Google Navigated Years of Pressure to Enter the World's Largest Market</h1>
      <div class="byline">
        <span class="author">By Will Li</span>
        <span class="date">January 27, 2006 • 3:45 PM EST</span>
      </div>
      <div class="location">Beijing, China</div>
    </div>

    <!-- Lead paragraph -->
    <p class="text-body-1 mb-4 lead-paragraph">
      Google's arrival in China wasn't just a corporate expansion—but a revolution in how millions of Chinese internet users discovered, shared, and thought about information, creating a ripple effect that would fundamentally change the relationship between technology and daily life in the world's most populous nation.
    </p>
    
    <h2 class="text-h6 mb-3 section-header">How Google Found Its Way to Chinese Keyboards</h2>
    <p class="text-body-1 mb-4">
      The path to Google.cn began in computer labs across Chinese universities. Long before Google officially entered China, it had already been integrated into the daily routines of thousands of Chinese student users through an intricate social network of students and researchers around the world.
    </p>

    <p class="text-body-1 mb-4">
      Chinese University students' international perspective brought with them more than academic knowledge—they carried new digital habits. Ms. Li, a college student at the time, recalls her first encounter with Google: "A long time ago—maybe 20 years ago. I think it was back when I was in college. At that time, the internet wasn't even that widespread in China." Like many early adopters, her introduction came through personal networks rather than media coverage. "It was from a friend. He really liked using it and kept recommending Google to me," she explains, illustrating the grassroots nature of Google's early spread in China.
    </p>

    <div class="personal-story-box">
      <h3 class="story-header">Voices from the Digital Underground</h3>
      <p class="story-text">
        We interviewed several early Google users across China. Their stories reveal a common pattern: discovery through personal networks, gradual integration into daily internet habits, and a gradual shift in how they approached information that extended far beyond the computer. 
      </p>
    </div>
    
    <h2 class="text-h6 mb-3 section-header">The Quiet Transformation of Daily Habits</h2>
    <p class="text-body-1 mb-4">
      For many Chinese users, Google didn't just change how they searched on the internet—it changed how they thought. The service's comprehensive results and the wide diversity of opinions on it encouraged a more questioning approach to information and a more independent thought process. 
    </p>

    <p class="text-body-1 mb-4">
      David, a current high school student, exemplifies this transformation of Google in his mind. When asked about Google's influence on his personal life, he reflects: "Services like Google Scholar help me a lot in academic research. So I think the influence is quite significant." His daily routine now revolves around Google Scholar for academic papers, describing it as "more authoritative" than other search tools. This integration of Google services into academic work represents the deep integration of it into the daily routine of its Chinese users. 
    </p>

    <div class="cultural-impact-box">
      <h3 class="impact-header">Why Personal Digital Habits Matter</h3>
      <p class="impact-text">
        The significance of Google's arrival lies not in corporate strategy but in its gradual integration into personal routines. When technology becomes unconscious habit, it fundamentally alters human cognition and social interaction patterns—changes that persist long after the technology itself disappears.
      </p>
    </div>

    <h2 class="text-h6 mb-3 section-header">The Enduring Personal Legacy</h2>
    <p class="text-body-1 mb-4">
      Years later, many early Google users describe the experience with it as influential—not due to the technology itself, but because of how it changed their relationship with information and everyday habits.
    </p>

    <p class="text-body-1 mb-4">
      Eric, a current Google user, demonstrated this deep integration when asked about Google's influence. His daily digital preferences revolve around Google services, especially the search engine: "Without Google, I would be losing a very large source of my information online and like experiences that I've learned. A lot of which come from Google's search engine. So I feel like Google has like a very large influence on my life." This showcases how Google's search capabilities became foundational to how users navigate and process information.
    </p>

    <p class="text-body-1 mb-4">
      Google's China story matters precisely because it demonstrates the change in it on Chinese users’ mindset, altering their cultural approaches to knowledge and information. Creating a long-lasting effect on the Chinese culture. 
    </p>

    <div class="cnn-footer mt-6">
      <p class="text-caption">This ethnographic analysis is based on interviews with 8 Chinese Google users in Beijing and Dalian.</p>
    </div>
  </div>
</template>

<style scoped>
.article-body {
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'CNN Sans', 'Helvetica Neue', Arial, sans-serif;
}

.cnn-header {
  border-bottom: 3px solid #cc0000;
  padding-bottom: 16px;
}

.breaking-badge {
  background-color: #cc0000;
  color: white;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 12px;
}

.headline {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  color: #2c2c2c;
}

.byline {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
  font-size: 14px;
}

.author {
  font-weight: 600;
  color: #2c2c2c;
}

.date {
  color: #666;
}

.location {
  font-size: 14px;
  color: #666;
  font-style: italic;
  margin-bottom: 24px;
}

.lead-paragraph {
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  color: #2c2c2c;
  border-left: 4px solid #cc0000;
  padding-left: 16px;
}

.section-header {
  color: #cc0000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 32px !important;
}

.personal-story-box {
  background-color: #f0f8ff;
  border-left: 4px solid #4a90e2;
  padding: 20px;
  margin: 24px 0;
  border-radius: 4px;
}

.story-header {
  color: #4a90e2;
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.story-text {
  margin: 0;
  line-height: 1.6;
  color: #2c3e50;
  font-style: italic;
}

.cultural-impact-box {
  background-color: #fff9e6;
  border: 1px solid #f39c12;
  border-left: 4px solid #f39c12;
  padding: 20px;
  margin: 24px 0;
  border-radius: 4px;
}

.impact-header {
  color: #d68910;
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.impact-text {
  margin: 0;
  line-height: 1.6;
  color: #2c3e50;
  font-weight: 500;
}

.cnn-footer {
  border-top: 1px solid #ddd;
  padding-top: 16px;
  color: #666;
  font-style: italic;
}

.text-body-1 {
  margin-bottom: 20px;
  color: #2c2c2c;
  line-height: 1.7;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .headline {
    font-size: 2rem;
  }
  
  .byline {
    flex-direction: column;
    gap: 4px;
  }
  
  .lead-paragraph {
    font-size: 1.1rem;
  }
  
  .personal-story-box,
  .cultural-impact-box {
    padding: 16px;
  }
}

/* CNN Publisher Header Styles */
.cnn-publisher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  background-color: #cc0000;
  color: white;
  margin: -16px -16px 24px -16px;
  padding: 16px;
}

.cnn-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cnn-logo-text {
  font-size: 28px;
  font-weight: bold;
  font-family: 'Arial Black', sans-serif;
  color: white;
}

.cnn-logo-subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: normal;
}

.cnn-publisher-header .action-btn {
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  text-transform: none;
  font-size: 13px;
}

.cnn-publisher-header .action-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: white;
}

@media print {
  .cnn-publisher-header {
    display: none;
  }
}
</style>