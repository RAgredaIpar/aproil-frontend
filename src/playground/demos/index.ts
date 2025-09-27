export const demos = [
    {
        path: "animated-testimonials",
        title: "AnimatedTestimonials",
        loader: () => import("./AnimatedTestimonialsDemo"),
    },
    {path: "loader", title: "Loader", loader: () => import("./LoaderDemo")},
    {path: 'carousel', title: 'Carousel', loader: () => import('./AppleCardsCarouselDemo')}
] as const;
