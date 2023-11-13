import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { IPost } from '../models'



export function usePosts() {
    useEffect(() => {
        fetchPosts()
    }, [])

    const [posts, setPosts] = useState<IPost[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState('')

    function addPost(post: IPost) {
        setPosts(prev => [...prev, post])
    }

    async function fetchPosts() {
        try {
            const responce = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
            setPosts(responce.data)
            setIsLoaded(true)
        } catch (e: unknown) {
            const error = e as AxiosError
            setIsLoaded(true)
            setError(error.message)
        }
    }

    return { posts, error, isLoaded, addPost }
}