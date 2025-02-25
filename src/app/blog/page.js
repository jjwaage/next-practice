import Link from 'next/link';

export default function Blogpage() {
    // Example blog post data with full content
    const blogPosts = [
        {
            title: "Baseball Analysis",
            href: "/blog/baseball-analysis", // Now linking to an internal page with an iframe
            content: "Real post - Projects that use real MLB data to do a deeper analysis of how different statistics influence teams.",
        },
        {
            title: "Second Post",
            href: "/second-post",
            content: "Example post - An overview of the latest trends in web development and design, including responsive layouts, modern frameworks, and UI/UX best practices.",
        },
        {
            title: "Third Post",
            href: "/third-post",
            content: "Example post - Understanding machine learning and its applications in everyday life, from predictive analytics to personal assistants, and how it is shaping the future.",
        },
    ];

    return (
        <div className="px-8 py-4"> {/* Add padding to the container */}
            <h1 className="text-4xl m-4 text-black text-center font-bold drop-shadow-[-4px_8px_6px_rgba(0,0,0,0.2)]">Projects!</h1>
            <div className="grid gap-8"> {/* Use grid and increase gap */}
                {blogPosts.map((post, index) => (
                    <Link key={index} href={post.href} passHref>
                        <div className="bg-white p-6 hover:shadow-2xl transition-all cursor-pointer rounded-lg"> {/* Add rounded corners */}
                            {/* Title and Link */}
                            <h2 className="text-2xl text-pink font-bold hover:underline">
                                {post.title}
                            </h2>
                            {/* Excerpt generated from content */}
                            <p className="text-lg text-gray-700 mt-2 overflow-hidden overflow-ellipsis line-clamp-3">
                                {post.content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
