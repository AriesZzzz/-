function backTop() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {

            window.requestAnimationFrame(backTop);
            window.scrollTo (0,currentScroll - (currentScroll/5));
        }
}