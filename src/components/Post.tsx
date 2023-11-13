import { useState } from "react"
import { IPost } from "../models"

interface PostProps {
    post: IPost
}

export function Post({ post }: PostProps) {
    const [isShowContent, setIsShowContent] = useState(false)
    const showButtonStyle = isShowContent ? 'bg-yellow-400' : 'bg-blue-400'

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <h1 className="font-bold">
                {post.title}
            </h1>
            <button className={
                ['py-2 px-4 border', showButtonStyle].join(' ')
            }
                onClick={() => setIsShowContent(!isShowContent)}>
                Show description
            </button>
            {
                isShowContent &&
                <p className="text-center">{post.body}</p>
            }
        </div>
    )
}