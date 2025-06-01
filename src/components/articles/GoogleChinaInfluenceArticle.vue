<template>
  <div class="article-body">
    <div class="zhihu-header">
      <div class="zhihu-logo">
        <span class="logo-text">知乎</span>
        <span class="logo-english">Zhihu</span>
      </div>
      <div class="zhihu-nav">
        <span class="nav-item active">首页</span>
        <span class="nav-item">会员</span>
        <span class="nav-item">发现</span>
        <span class="nav-item">等你来答</span>
      </div>
    </div>

    <div class="question-header">
      <h1 class="question-title">How did Google's brief presence in China (2006-2010) fundamentally change Chinese people's relationship with information and values? What lasting cultural impact did it have?</h1>
      <div class="question-meta">
        <span class="question-stats">关注者 2,847 人</span>
        <span class="question-stats">被浏览 156,892 次</span>
        <div class="question-tags">
          <span class="tag">Google</span>
          <span class="tag">中国互联网</span>
          <span class="tag">价值观</span>
          <span class="tag">文化变迁</span>
        </div>
      </div>
    </div>

    <div class="zhihu-answer">
      <div class="answer-header">
        <div class="user-info">
          <div class="avatar">L</div>
          <div class="user-details">
            <div class="username">Li Peng</div>
            <div class="user-bio">Semiconductor Professional in Hefei, PhD from the US.</div>
            <div class="credentials">
              <span class="credential">美国博士</span>
              <span class="credential">半导体行业从业者</span>
            </div>
          </div>
        </div>
        <div class="answer-actions">
          <button class="follow-btn">关注</button>
          <span class="answer-time">6 hours ago</span>
        </div>
      </div>

      <div class="answer-content">
        <p class="answer-text">
          When considering Google's impact, it's true that its presence changed how some of us accessed information. I personally used Google Search, Scholar for academic work, Voice, Maps, and Gmail quite a bit, and I still rely on some of these via VPN because they're not directly available in China.
        </p>
        <p class="answer-text">
          In terms of a fundamental change in Chinese people's relationship with information and values, I believe its influence now is quite limited. Google left China a long while ago, so many don't have a direct memory or experience with it. While its impact might have been more significant when it first arrived, this has waned as access became more difficult. For the majority who likely never used it, there probably wasn't a profound shift in values from Google.
        </p>
        <p class="answer-text">
          The lasting cultural impact is therefore nuanced. On one hand, for many, it's minimal. On the other, its departure, which I see as both a commercially understandable move given its inability to provide "fair and unbiased search results" in the local context, and a loss for the Chinese market and users who missed out on products like Gmail or Maps, matters. The government's blocking, while not ideal, was perhaps seen as necessary for control, particularly given Google's approach to search results. The political dimension seems to have outweighed commercial factors in its exit.
        </p>
        <p class="answer-text">
          Despite this, I see Google as a great, innovative company that has benefited society. For me, and likely others who continue to use its services like Gmail, Voice, or YouTube, it maintains a significant personal influence. This itself is a form of lasting, albeit niche, cultural presence.
        </p>

        <div class="answer-stats">
          <span class="stat">👍 2,847 赞同</span>
          <span class="stat">💬 342 评论</span>
          <span class="stat">📤 1,156 分享</span>
          <span class="stat">💰 89 感谢</span>
        </div>
      </div>
    </div>

    <div class="zhihu-answer">
      <div class="answer-header">
        <div class="user-info">
          <div class="avatar">Z</div>
          <div class="user-details">
            <div class="username">Zhang Zheng</div>
            <div class="user-bio">Semiconductor Professional in Beijing, PhD from the US.</div>
            <div class="credentials">
              <span class="credential">美国博士</span>
              <span class="credential">北京工作</span>
            </div>
          </div>
        </div>
        <div class="answer-actions">
          <button class="follow-btn">关注</button>
          <span class="answer-time">4 hours ago</span>
        </div>
      </div>

      <div class="answer-content">
        <p class="answer-text">
          I did use Google products like Search, Chrome, and Gmail in the past. However, I don't currently use them via VPN as I find it too much trouble.
        </p>
        <p class="answer-text">
          Thinking about how Google fundamentally changed our relationship with information, I'd say its early presence might have offered a new perspective on what browsers could do. Beyond that, I don't feel it brought about a massive change in how Chinese people, as a whole, relate to information or their values. My views on this likely reflect those of my generation.
        </p>
        <p class="answer-text">
          The lasting cultural impact is perhaps more about its absence than its brief presence for many. Google's withdrawal certainly limited domestic users' access to its services. From my perspective, the decision to block Google services via the firewall is unreasonable. It feels like a forced intervention in what should be user choice regarding commercial services. It seems to me that the government's stance played a more decisive role in Google's departure than the company's own commercial decisions.
        </p>
        <p class="answer-text">
          Globally, I see Google as an influential tech company that consistently pursues innovation. However, for me personally, since I don't use its services much anymore, its direct cultural or practical impact on my daily life is now minimal. The primary lasting impact for many users was the disruption caused by its exit and the subsequent restrictions.
        </p>

        <div class="answer-stats">
          <span class="stat">👍 4,192 赞同</span>
          <span class="stat">💬 567 评论</span>
          <span class="stat">📤 2,341 分享</span>
          <span class="stat">💰 156 感谢</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-body {
  line-height: 1.6;
  max-width: 1000px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif;
  color: #1a1a1a;
  background-color: #f6f6f6;
  min-height: 100vh;
}

/* Zhihu Header */
.zhihu-header {
  background: #fff;
  border-bottom: 1px solid #e1e4e8;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.zhihu-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #0084ff;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.logo-english {
  font-size: 14px;
  color: #8590a6;
  font-weight: 500;
}

.zhihu-nav {
  display: flex;
  gap: 32px;
}

.nav-item {
  font-size: 15px;
  color: #8590a6;
  cursor: pointer;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.nav-item.active {
  color: #0084ff;
  border-bottom-color: #0084ff;
}

.nav-item:hover {
  color: #0084ff;
}

/* Question Header */
.question-header {
  background: #fff;
  margin: 24px 24px 0 24px;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.question-title {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.question-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin-bottom: 16px;
}

.question-stats {
  font-size: 14px;
  color: #8590a6;
}

.question-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: #f4f5f5;
  color: #8590a6;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag:hover {
  background: #e1f5fe;
  color: #0084ff;
}

/* Answer Containers */
.zhihu-answer {
  background: #fff;
  margin: 20px 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
}

.answer-header {
  padding: 20px 24px 16px 24px;
  border-bottom: 1px solid #f0f2f7;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.user-info {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0084ff, #00d4aa);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.username {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
}

.user-bio {
  font-size: 14px;
  color: #8590a6;
  line-height: 1.3;
}

.credentials {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.credential {
  background: #f0f8ff;
  color: #0084ff;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  border: 1px solid #e1f5fe;
}

.answer-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.follow-btn {
  background: #0084ff;
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.follow-btn:hover {
  background: #0066cc;
}

.answer-time {
  font-size: 13px;
  color: #8590a6;
}

/* Answer Content */
.answer-content {
  padding: 0 24px 24px 24px;
}

.answer-text {
  font-size: 16px;
  line-height: 1.7;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.answer-text strong {
  font-weight: 600;
  color: #0f1419;
}

.answer-text em {
  color: #0084ff;
  font-style: normal;
  font-weight: 500;
}

/* Highlight Boxes */
.highlight-box {
  background: linear-gradient(135deg, #f0f8ff, #e8f4fd);
  border: 1px solid #b3d9ff;
  border-left: 4px solid #0084ff;
  padding: 20px;
  margin: 24px 0;
  border-radius: 0 8px 8px 0;
}

.highlight-box h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #0084ff;
}

.highlight-box ul {
  margin: 0;
  padding-left: 20px;
}

.highlight-box li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.research-box {
  background: linear-gradient(135deg, #fff3e0, #ffeaa7);
  border: 1px solid #ffcc80;
  border-left: 4px solid #ff9800;
  padding: 20px;
  margin: 24px 0;
  border-radius: 0 8px 8px 0;
}

.research-box h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #ff9800;
}

.values-comparison {
  background: #fafbfc;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.before-column,
.after-column {
  padding: 16px;
  border-radius: 6px;
}

.before-column {
  background: linear-gradient(135deg, #fff5f5, #ffebee);
  border-left: 4px solid #f44336;
}

.after-column {
  background: linear-gradient(135deg, #f0f8ff, #e8f5e8);
  border-left: 4px solid #4caf50;
}

.before-column h5,
.after-column h5 {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.before-column h5 {
  color: #d32f2f;
}

.after-column h5 {
  color: #388e3c;
}

.before-column ul,
.after-column ul {
  margin: 0;
  padding-left: 16px;
  font-size: 14px;
}

.personal-story {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-left: 4px solid #6c757d;
  padding: 20px;
  margin: 24px 0;
  border-radius: 0 8px 8px 0;
}

.personal-story h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #495057;
}

.personal-story p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: #212529;
  font-style: italic;
}

.cultural-impact-box {
  background: linear-gradient(135deg, #e8f5e8, #f0fff0);
  border: 1px solid #81c784;
  border-left: 4px solid #4caf50;
  padding: 20px;
  margin: 24px 0;
  border-radius: 0 8px 8px 0;
}

.cultural-impact-box h4 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #2e7d32;
}

.conclusion-box {
  background: linear-gradient(135deg, #fff3e0, #ffeaa7);
  border: 2px solid #ffb74d;
  border-radius: 8px;
  padding: 24px;
  margin: 32px 0;
  position: relative;
}

.conclusion-box::before {
  content: '🎯';
  position: absolute;
  top: -12px;
  left: 20px;
  background: #fff;
  padding: 0 8px;
  font-size: 20px;
}

.conclusion-box h4 {
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #f57c00;
}

.conclusion-box p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: #1a1a1a;
  font-weight: 500;
}

/* Answer Stats */
.answer-stats {
  display: flex;
  gap: 24px;
  padding: 16px 0;
  border-top: 1px solid #f0f2f7;
  margin-top: 24px;
}

.stat {
  font-size: 14px;
  color: #8590a6;
  cursor: pointer;
  transition: color 0.2s ease;
}

.stat:hover {
  color: #0084ff;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .article-body {
    margin: 0;
  }

  .zhihu-header {
    padding: 12px 16px;
  }

  .zhihu-nav {
    gap: 16px;
  }

  .nav-item {
    font-size: 14px;
  }

  .question-header,
  .zhihu-answer {
    margin: 16px;
    padding: 20px;
  }

  .question-title {
    font-size: 20px;
  }

  .answer-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .answer-stats {
    flex-wrap: wrap;
    gap: 16px;
  }

  .credentials {
    flex-direction: column;
    gap: 4px;
  }
}

/* Print Styles */
@media print {
  .zhihu-header,
  .answer-stats {
    display: none;
  }

  .article-body {
    background: white;
    max-width: none;
  }

  .zhihu-answer,
  .question-header {
    box-shadow: none;
    border: 1px solid #ccc;
    margin: 16px 0;
  }
}

/* Hover Effects */
.zhihu-answer:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: box-shadow 0.3s ease;
}

.tag:hover,
.stat:hover {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Zhihu Publisher Header Styles */
.zhihu-publisher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #0066ff;
  color: white;
  margin-bottom: 0;
}

.zhihu-brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.zhihu-brand-icon {
  font-size: 24px;
}

.zhihu-brand-text {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.zhihu-brand-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 8px;
}

.zhihu-publisher-header .action-btn {
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  text-transform: none;
  font-size: 13px;
}

.zhihu-publisher-header .action-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: white;
}

@media print {
  .zhihu-publisher-header {
    display: none;
  }
}
</style>