$(document).ready(function () {
    // 点击标题滚动到顶部
    

    $('#title').click(function (event) {
        event.preventDefault();

        const $targetElement = $(".photo-caro");

        if ($targetElement.length) {
            const offsetTop = $targetElement.offset().top;
            const windowHeight = $(window).height();
            const elementHeight = $targetElement.outerHeight();
            const scrollPosition = offsetTop - (windowHeight / 2) + (elementHeight / 2);

            $('html, body').animate({
                scrollTop: scrollPosition
            }, 100, function () {
                setTimeout(function () {
                    $targetElement.addClass('floating');
                    setTimeout(function () {
                        $targetElement.removeClass('floating');
                    }, 1000);
                });
            });
        }
    });

    $('.scroll-link').click(function (event) {
        event.preventDefault();

        const targetId = $(this).attr('data-target');
        const $targetElement = $(targetId);

        if ($targetElement.length) {
            const offsetTop = $targetElement.offset().top;
            const windowHeight = $(window).height();
            const elementHeight = $targetElement.outerHeight();
            const scrollPosition = offsetTop - (windowHeight / 2) + (elementHeight / 2);

            $('html, body').animate({
                scrollTop: scrollPosition
            }, 100, function () {
                setTimeout(function () {
                    $targetElement.addClass('floating');
                    setTimeout(function () {
                        $targetElement.removeClass('floating');
                    }, 1000);
                });
            });
        }
    });

    $('.photo-caro img').click(function () {
        const anchorId = $(this).data('anchor');
        const $targetElement = $(anchorId);

        // 檢查目標元素是否存在
        if ($targetElement.length) {
            const offsetTop = $targetElement.offset().top;
            const windowHeight = $(window).height();
            const elementHeight = $targetElement.outerHeight();
            const scrollPosition = offsetTop - (windowHeight / 2) + (elementHeight / 2);

            $('html, body').animate({
                scrollTop: scrollPosition
            }, 100, function () {
                setTimeout(function () {
                    $targetElement.addClass('floating');
                    setTimeout(function () {
                        $targetElement.removeClass('floating');
                    }, 1000);
                });
            });
        }
    });

    const images = document.querySelectorAll(".content img");
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const closeBtn = document.querySelector(".close-btn");
    // 点击图片时显示放大图片
    images.forEach((img) => {
        img.addEventListener("click", function() {
            const largeSrc = img.getAttribute("src"); // 获取放大图片的路径
            overlayImg.src = largeSrc;
            overlay.style.display = "flex"; // 立即显示遮罩
            
            // 微小延迟，确保 display 设置后再添加类，触发过渡效果
        setTimeout(() => {
                overlay.classList.remove("hide"); // 移除淡出效果类
                overlay.classList.add("show"); // 添加 show 类，实现淡入效果
            }, 10); // 设置为 10 毫秒的微小延迟来触发淡入效果

        });
    });
    // 点击关闭按钮或遮罩时关闭放大图片
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay || event.target === closeBtn) {
            overlay.classList.remove("show"); // 移除淡入效果类
            overlay.classList.add("hide"); // 添加 hide 类，实现淡出效果
            setTimeout(() => {
                overlay.style.display = "none"; // 动画结束后隐藏
            }, 200); // 与 CSS 中的淡出过渡时间相同
        }
    });


});

function toggleMode() {
    // Toggle dark mode on the body element and key components
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    
    // Toggle dark mode on image carousels and content sections
    const photo = document.querySelectorAll('.photo-caro');
    photo.forEach((div) => div.classList.toggle('dark-mode'));

    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach((section) => section.classList.toggle('dark-mode'));
    
    
    // Button Text Toggle with floating effect
    const modeButton = document.getElementById('modeButton');
    if (document.body.classList.contains('dark-mode')) {
        modeButton.textContent = 'Light Mode'; // 切换为 Light Mode
        modeButton.classList.add('darkmode'); // 添加 darkmode 样式
    } else {
        modeButton.textContent = 'Dark Mode'; // 切换为 Dark Mode
        modeButton.classList.remove('darkmode'); // 移除 darkmode 样式
    }

    // 添加浮动效果
    modeButton.classList.add('floating'); 

    // 在动画结束后移除 floating 类
    setTimeout(() => {
        modeButton.classList.remove('floating');
    }, 200); // 0.4 秒，与浮动动画时间匹配
}
