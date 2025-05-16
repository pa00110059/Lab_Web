// 當DOM完全載入後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取DOM元素
    const header = document.querySelector('header');
    
    // 漢堡菜單控制
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if (menuToggle && mainNav && menuOverlay) {
        // 點擊漢堡菜單按鈕開關導航欄
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            // 變更圖標
            const icon = menuToggle.querySelector('.material-icons');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.textContent = 'close';
                    document.body.style.overflow = 'hidden'; // 禁止背景滾動
                } else {
                    icon.textContent = 'menu';
                    document.body.style.overflow = ''; // 恢復背景滾動
                }
            }
        });
        
        // 點擊導航項目後自動關閉菜單
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuOverlay.classList.remove('active');
                const icon = menuToggle.querySelector('.material-icons');
                if (icon) {
                    icon.textContent = 'menu';
                }
                document.body.style.overflow = '';
            });
        });
        
        // 點擊遮罩層關閉菜單
        menuOverlay.addEventListener('click', function() {
            mainNav.classList.remove('active');
            menuOverlay.classList.remove('active');
            const icon = menuToggle.querySelector('.material-icons');
            if (icon) {
                icon.textContent = 'menu';
            }
            document.body.style.overflow = '';
        });
    }
    
    // 保留導航欄滾動效果
    const scrollThreshold = 100; // 滾動閾值
    
    function checkScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // 初始檢查
    checkScroll();
    
    // 監聽滾動事件
    window.addEventListener('scroll', checkScroll);
}); 