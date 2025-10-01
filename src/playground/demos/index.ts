export const demos = [
    {
        path: "animated-testimonials",
        title: "AnimatedTestimonials",
        loader: () => import("./AnimatedTestimonialsDemo"),
    },
    {path: "loader", title: "Loader", loader: () => import("./LoaderDemo")},
    {path: 'carousel', title: 'Carousel', loader: () => import('./AppleCardsCarouselDemo')},
    { path: 'container-scroll', title: 'ContainerScroll', loader: () => import('./ContainerScrollAnimationDemo')},
    { path: 'infinite-moving', title: 'Infinite Moving', loader: () => import('./InfiniteMovingCardsDemo') }
] as const;
