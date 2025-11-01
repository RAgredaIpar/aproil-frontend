import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content?: string }) {
    if (!content) return null;

    return (
        <div className="nunito-font">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    p: (props) => (
                        <p className="text-black text-[1rem] leading-[1.45]" {...props} />
                    ),
                    h2: (props) => (
                        <h2 className="text-[#E30613] font-semibold text-[1.05rem] leading-tight mt-[20px]" {...props} />
                    ),
                    h3: (props) => (
                        <h3 className="text-[#E30613] font-semibold text-[1.05rem] leading-tight" {...props} />
                    ),
                    ul: (props) => (
                        <ul className="list-disc pl-5 text-black mt-[15px]" {...props} />
                    ),
                    ol: (props) => (
                        <ol className="list-decimal pl-5 mt-[10px] text-black" {...props} />
                    ),
                    li: (props) => <li className="leading-[1.45]" {...props} />,
                    strong: (props) => <strong className="font-semibold text-black" {...props} />,
                    a: (props) => (
                        <a className="underline text-[#E30613] hover:opacity-80" target="_blank" rel="noopener noreferrer" {...props} />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>


        </div>
    );
}
