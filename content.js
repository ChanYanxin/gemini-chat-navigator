// 1. 在页面上强行挖出一个右侧悬浮栏容器
const navContainer = document.createElement('div');
navContainer.id = 'gemini-question-navigator';
document.body.appendChild(navContainer);

function refreshGeminiNavigator() {
    // 每次页面变动先清空，防止圆点重复生成
    navContainer.innerHTML = '';

    // 【精准定位核心】同时抓取 Gemini 可能存在的多重用户标签特征
    const userRequests = document.querySelectorAll('message-content[data-message-author="user"], .query-text, [data-query]');

    if (userRequests.length === 0) return;

    userRequests.forEach((req, index) => {
        // 1. 为原网页里的用户提问块强行打上唯一的 ID 标签，方便待会儿跳转
        const uniqueId = `gemini-user-q-${index}`;
        req.setAttribute('id', uniqueId);

        // 2. 制造右侧的小圆点
        const dot = document.createElement('div');
        dot.className = 'gemini-nav-dot';

        // 3. 让小圆点内部隐约显示提问序号（1, 2, 3...）
        dot.innerText = index + 1;

        // 4. 抓取用户提问的纯文本，作为鼠标悬停时的预览
        const fullText = req.innerText.trim();
        const previewText = fullText.length > 50 ? fullText.substring(0, 50) + '...' : fullText;
        dot.setAttribute('data-tooltip', previewText);

        // 5. 绑定点击事件：点击圆点，页面平滑滚动到对应的提问位置
        dot.addEventListener('click', () => {
            const targetElement = document.getElementById(uniqueId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        navContainer.appendChild(dot);
    });
}

// 2. 自动化监听：因为 Gemini 是单页应用（SPA），对话是动态刷新的
// 只要页面 HTML 结构发生变化，就触发防抖刷新机制
let navTimer = null;
const observer = new MutationObserver(() => {
    clearTimeout(navTimer);
    navTimer = setTimeout(refreshGeminiNavigator, 500); // 延迟500ms等待Gemini渲染完毕
});

// 开始监听整个网页的变动
observer.observe(document.body, { childList: true, subtree: true });

// 首次加载时手动执行一次
setTimeout(refreshGeminiNavigator, 1500);