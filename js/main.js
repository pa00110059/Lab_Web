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
    
    // 燈箱功能
    initLightbox();
});

// 燈箱功能
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    if (!lightbox || !lightboxImg || !lightboxCaption || !lightboxClose) {
        return; // 如果不在gallery頁面就退出
    }
    
    // 為每個gallery圖片添加點擊事件
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const caption = this.parentElement.querySelector('.gallery-caption');
            
            // 設置燈箱圖片和說明
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightboxCaption.textContent = caption ? caption.textContent : '';
            
            // 顯示燈箱
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // 禁止背景滾動
        });
    });
    
    // 關閉燈箱的函數
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // 恢復背景滾動
    }
    
    // 點擊關閉按鈕關閉燈箱
    lightboxClose.addEventListener('click', closeLightbox);
    
    // 點擊燈箱背景關閉燈箱
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // 按ESC鍵關閉燈箱
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
} 