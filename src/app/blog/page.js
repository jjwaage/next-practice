import Link from 'next/link';

export default function BlogPage() {
    // Example blog post data with full content
    const blogPosts = [
        {
            title: "Baseball Analysis",
            href: "/blog/baseball-analysis",
            content: "Real post - Projects that use real MLB data to do a deeper analysis of how different statistics influence teams.",
        },
        {
            title: "Second Post",
            href: "/blog/second-post",
            content: "Example post - An overview of the latest trends in web development and design, including responsive layouts, modern frameworks, and UI/UX best practices.",
        },
        {
            title: "Third Post",
            href: "/blog/third-post",
            content: "Example post - Understanding machine learning and its applications in everyday life, from predictive analytics to personal assistants, and how it is shaping the future.",
        },
    ];

    return (
        <div className="px-8 py-4 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-black drop-shadow-md mb-8">
                Projects!
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <Link key={index} href={post.href}>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all cursor-pointer border border-gray-200">
                            <h2 className="text-2xl font-bold text-pink-500 hover:underline">
                                {post.title}
                            </h2>
                            <p className="text-lg text-gray-700 mt-2 line-clamp-3">
                                {post.content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
