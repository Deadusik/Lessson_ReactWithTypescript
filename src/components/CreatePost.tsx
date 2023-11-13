import { useState } from "react"
import { IPost } from "../models"
import axios from 'axios'
import { Error } from "./Error"

const postData: IPost = {
    id: 0,
    title: '',
    body: ''
}

interface ICreatePostProps {
    onCreate: (post: IPost) => void
    onSubmit: () => void
}

export function CreatePost({ onCreate, onSubmit }: ICreatePostProps) {
    const [error, setError] = useState('')

    const submitHendler = async (event: React.FormEvent) => {
        event.preventDefault()

        onSubmit()

        if (error)
            setError('')

        if (titleValue.trim().length === 0 || descriptionValue.trim().length === 0) {
            setError('Title and description are reqired')
            return
        }

        postData.id = Date.now()
        postData.title = titleValue
        postData.body = descriptionValue

        const responce = await axios.post<IPost>('https://jsonplaceholder.typicode.com/posts', postData)

        onCreate(responce.data)
    }

    const changeHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
        setCallback: (value: any) => void
    ) =>
        setCallback(event.target.value)


    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')

    return (
        <form>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter post title"
                onChange={e => changeHandler(e, setTitleValue)}
                value={titleValue}
            />

            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter post description"
                onChange={e => changeHandler(e, setDescriptionValue)}
                value={descriptionValue}
            />

            {
                error &&
                <Error error={error} />
            }

            <button
                type="submit"
                className="py-2 px-4 border bg-yellow-400 hover:text-black/50"
                onClick={(e) => submitHendler(e)}>
                Create
            </button>
        </form>
    )
}