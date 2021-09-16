import { useEffect, useState } from "react";

export default function Posts({ listPosts }) {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        (async() => {
            const posts = await listPosts();
            setPosts(posts);
        })();
    }, []);
    
    if (posts === null) {
        return (
            <div>
                Loading posts, please wait...
            </div>
        );
    }

    return (
        <div>
            {posts.map(p => (
                <div key={p.id}>
                    {p.title}
                </div>
            ))}
        </div>
    )
}