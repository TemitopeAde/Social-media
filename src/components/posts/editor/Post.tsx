import UserAvatar from "@/components/UserAvatar"
import { PostData } from "@/lib/types"
import { formatRelativeDate } from "@/lib/utils"
import { formatRelative } from "date-fns"
import Link from "next/link"

interface  PostProps {
    post: PostData
}

export default function Post({post}: PostProps) {
    return <article className="space-y-3 rounded-2xl bg-card p-5 shadow-sm">
        <div className="flex flex-wrap gap-3">
            <Link href={`/users/${post.user.username}`}>
                <UserAvatar avatarUrl={post.user.avatarUrl} />
            </Link>

            <div>
                <Link className="block font-medium hover:underline" href={`/users/${post.user.username}`}>
                    {post.user.displayName}
                </Link>

                <Link href={`/post/${post.id}`}>
                    {formatRelativeDate(post.createdAt)}
                </Link>
            </div>
        </div>
        <div className="whitespace-pre-line break-words">
            {post.content}
        </div>
    </article>
}