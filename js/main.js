// 當DOM完全載入後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取DOM元素
    const header = document.querySelector('header');
    
    // 移除不需要的漢堡菜單相關功能
    
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