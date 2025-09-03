export const demos = [
    { path: "animated-testimonials", title: "AnimatedTestimonials", loader: () => import("./AnimatedTestimonialsDemo") },
    { path: "loader", title: "Loader", loader: () => import("./LoaderDemo") },
] as const;
