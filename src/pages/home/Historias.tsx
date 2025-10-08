import {LubricacionIndustrial} from "@assets/home-page"
import {InfiniteMovingCards} from "@components/aceternity";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Historias = () => {
    const t = useTranslations('Stories')
    return (
        <section className="container mx-auto flex flex-col items-center pt-10">
            <div className="flex w-full flex-col md:flex-row items-center gap-6 lg:w-auto lg:flex-row">
                <Image src={LubricacionIndustrial} alt="Industrial"
                    className="w-full max-w-[400px] lg:max-w-[500px] object-contain"/>
                <div className="flex flex-col items-center text-center">
                    <span className="px-0 text-[20pt] font-medium text-[#848C99] sm:px-5 sm:text-[25pt] lg:px-20 xl:px-15 2xl:px-10 2xl:text-[30pt]">
                        {t('Text1')}
                    </span>
                    <span
                        className="
                        bg-[#e30613] px-2 py-0 font-extrabold tracking-[.3px] text-white
                        text-[25pt] sm:px-10 sm:text-[25pt] md:px-5 lg:px-15 lg:text-[30pt] xl:px-15 xl:text-[35pt] 2xl:text-[45pt]
                        leading-snug
                        [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]
                        sm:[clip-path:polygon(14px_0,100%_0,calc(100%-14px)_100%,0_100%)]
                        md:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                        lg:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                        xl:[clip-path:polygon(22px_0,100%_0,calc(100%-22px)_100%,0_100%)]
                        2xl:[clip-path:polygon(24px_0,100%_0,calc(100%-24px)_100%,0_100%)]">
                        {t('Question1')}
                    </span>
                    <span className="text-[25pt] font-extrabold text-[#e30613] sm:text-[25pt] lg:text-[30pt] xl:text-[35pt] 2xl:text-[45pt]">
                        {t('Question2')}
                    </span>
                </div>
            </div>
            <div className="xl:flex mt-10 w-full 2xl:justify-center">
                <InfiniteMovingCards items={testimonials} />
            </div>
        </section>
    );
};
export default Historias;

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];