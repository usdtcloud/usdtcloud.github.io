(function (a) {
    var g = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
    var h = !!(("ontouchend" in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
    var i = a("#page-rain");
    if (i.length && !g && !h) {
        var f = i[0];
        f.onload = function () {
            var j = new RainyDay({image: this, parentElement: a(".comingsoon-back-img")[0]});
            j.rain([[1, 2, 5000]]);
            j.rain([[3, 3, 1], [5, 5, 1], [6, 2, 1], [6, 2, 1], [5, 5, 1]], 100)
        };
        f.crossOrigin = "anonymous";
        f.src = i.attr("src")
    }
    var d = a(".countdown");
    if (d.length) {
        d.countdown("2019/10/21", function (j) {
            a(this).html(j.strftime("<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Second</div> </div></div>"))
        })
    }
    var c = a(".counter");
    if (c.length) {
        c.counterUp({delay: 50, time: 2000})
    }
    if (typeof (a.fn.theiaStickySidebar) !== "undefined") {
        a("#fixed-bar-coloum").theiaStickySidebar({additionalMarginTop: 50, sidebarBehavior: "stick-to-top"})
    }
    if (a.fn.meanmenu) {
        a("nav#dropdown").meanmenu({siteLogo: "<div class='mobile-menu-nav-back'><a class='logo-mobile' href='index.html'><img src='img/logo-mobile.png' alt='logo' class='img-fluid'/></a></div>"})
    }
    a("#wrapper").on("click", ".offcanvas-menu-btn", function (k) {
        k.preventDefault();
        var j = a(this), p = a(this).parents("body").find(">#wrapper"), o = a("<div />").addClass("offcanvas-mask"),
                l = a("#offcanvas-wrap"), m = l.data("position") || "left";
        if (j.hasClass("menu-status-open")) {
            p.addClass("open").append(o);
            j.removeClass("menu-status-open").addClass("menu-status-close");
            l.css({transform: "translateX(0)"})
        } else {
            n()
        }
        
        function n() {
            p.removeClass("open").find("> .offcanvas-mask").remove();
            j.removeClass("menu-status-close").addClass("menu-status-open");
            if (m === "left") {
                l.css({transform: "translateX(-100%)"})
            } else {
                l.css({transform: "translateX(100%)"})
            }
        }
        
        a(".offcanvas-mask, .offcanvas-close").on("click", function () {
            n()
        });
        return false
    });
    a(window).on("scroll", function () {
        if (a(window).scrollTop() > 700) {
            a(".scrollup").addClass("back-top")
        } else {
            a(".scrollup").removeClass("back-top")
        }
        if (a("body").hasClass("sticky-header")) {
            var m = a("#rt-sticky-placeholder"), j = a("#header-menu"), k = j.outerHeight(),
                    o = a("#header-topbar").outerHeight() || 0, l = a("#header-middlebar").outerHeight() || 0,
                    n = o + l;
            if (a(window).scrollTop() > n) {
                j.addClass("rt-sticky");
                m.height(k)
            } else {
                j.removeClass("rt-sticky");
                m.height(0)
            }
        }
    });
    a('[data-type="section-switch"]').on("click", function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var j = a(this.hash);
            if (j.length > 0) {
                j = j.length ? j : a("[name=" + this.hash.slice(1) + "]");
                a("html,body").animate({scrollTop: j.offset().top}, 1000);
                return false
            }
        }
    });
    a('a[href="#header-search"]').on("click", function (j) {
        j.preventDefault();
        var k = a("#header-search");
        k.addClass("open");
        setTimeout(function () {
            k.find("input").focus()
        }, 600);
        return false
    });
    a("#header-search, #header-search button.close").on("click keyup", function (j) {
        if (j.target === this || j.target.className === "close" || j.keyCode === 27) {
            a(this).removeClass("open")
        }
    });
    a("[data-bg-image]").each(function () {
        var j = a(this).data("bg-image");
        a(this).css({backgroundImage: "url(" + j + ")"})
    });
    a("#preloader").fadeOut("slow", function () {
        a(this).remove()
    });
    var e = a("#no-equal-gallery");
    if (e.length) {
        var b = e.imagesLoaded(function () {
            b.isotope({itemSelector: ".no-equal-item", masonry: {columnWidth: ".no-equal-item"}})
        })
    }
    a(function () {
        var j = a(".popup-youtube");
        if (j.length) {
            j.magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            })
        }
        if (a.fn.owlCarousel) {
            a(".rc-carousel").each(function () {
                var m = a(this), r = m.data("loop"), q = m.data("items"), s = m.data("margin"),
                        R = m.data("stage-padding"), k = m.data("autoplay"), l = m.data("autoplay-timeout"),
                        Q = m.data("smart-speed"), p = m.data("dots"), t = m.data("nav"), w = m.data("nav-speed"),
                        N = m.data("r-x-small"), P = m.data("r-x-small-nav"), O = m.data("r-x-small-dots"),
                        K = m.data("r-x-medium"), M = m.data("r-x-medium-nav"), L = m.data("r-x-medium-dots"),
                        H = m.data("r-small"), J = m.data("r-small-nav"), I = m.data("r-small-dots"),
                        E = m.data("r-medium"), G = m.data("r-medium-nav"), F = m.data("r-medium-dots"),
                        B = m.data("r-large"), D = m.data("r-large-nav"), C = m.data("r-large-dots"),
                        y = m.data("r-extra-large"), A = m.data("r-extra-large-nav"), z = m.data("r-extra-large-dots"),
                        n = m.data("center"), o = m.data("custom-nav") || "";
                m.addClass("owl-carousel");
                var x = m.owlCarousel({
                    loop: (r ? true : false),
                    items: (q ? q : 4),
                    lazyLoad: true,
                    margin: (s ? s : 0),
                    autoplay: (k ? true : false),
                    autoplayTimeout: (l ? l : 1000),
                    smartSpeed: (Q ? Q : 250),
                    dots: (p ? true : false),
                    nav: (t ? true : false),
                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                    navSpeed: (w ? true : false),
                    center: (n ? true : false),
                    responsiveClass: true,
                    responsive: {
                        0: {items: (N ? N : 1), nav: (P ? true : false), dots: (O ? true : false)},
                        576: {items: (K ? K : 2), nav: (M ? true : false), dots: (L ? true : false)},
                        768: {items: (H ? H : 3), nav: (J ? true : false), dots: (I ? true : false)},
                        992: {items: (E ? E : 4), nav: (G ? true : false), dots: (F ? true : false)},
                        1200: {items: (B ? B : 5), nav: (D ? true : false), dots: (C ? true : false)},
                        1400: {items: (y ? y : 6), nav: (A ? true : false), dots: (z ? true : false)}
                    }
                });
                if (o) {
                    var t = a(o), u = a(".rt-next", t), v = a(".rt-prev", t);
                    u.on("click", function (S) {
                        S.preventDefault();
                        x.trigger("next.owl.carousel");
                        return false
                    });
                    v.on("click", function (S) {
                        S.preventDefault();
                        x.trigger("prev.owl.carousel");
                        return false
                    })
                }
            })
        }
        if (a("#googleMap").length) {
            window.onload = function () {
                var p = [{
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{color: "#b7d0ea"}]
                }, {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{visibility: "off"}]
                }, {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{visibility: "off"}]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{color: "#c2c2aa"}]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{color: "#b6d1b0"}]
                }, {featureType: "poi.park", elementType: "labels.text.fill", stylers: [{color: "#6b9a76"}]}];
                var n = {
                    mapTypeControlOptions: {mapTypeIds: ["Styled"]},
                    center: new google.maps.LatLng(-37.81618, 144.95692),
                    zoom: 10,
                    disableDefaultUI: true,
                    mapTypeId: "Styled"
                };
                var k = document.getElementById("googleMap");
                var l = new google.maps.Map(k, n);
                var o = new google.maps.StyledMapType(p, {name: "Styled"});
                l.mapTypes.set("Styled", o);
                var m = new google.maps.Marker({
                    position: l.getCenter(),
                    animation: google.maps.Animation.BOUNCE,
                    icon: "img/map-marker.png",
                    map: l
                })
            }
        }
    })
})(jQuery);