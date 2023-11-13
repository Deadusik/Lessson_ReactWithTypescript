import { useContext } from 'react'
import { CreatePost } from '../components/CreatePost';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { Modal } from '../components/Modal';
import { Post } from '../components/Post';
import { usePosts } from '../hooks/posts';
import { IPost } from '../models';
import { ModalContext } from '../context/ModalContext';

export function PostsPage() {
    const { posts, error, isLoaded, addPost } = usePosts()

    const { isShow, open, close } = useContext(ModalContext)

    const createHandler = (post: IPost) => {
        close()
        addPost(post)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {
                isLoaded && !error &&
                posts.map((postItem, index) =>
                    <Post
                        post={postItem}
                        key={index} />)
            }
            {!isLoaded && <Loading />}
            {error && <Error error={error} />}

            {
                isShow &&
                <Modal onClose={close} title='Create new post'>
                    <CreatePost onCreate={createHandler} onSubmit={close} />
                </Modal>
            }

            <button
                className='bottom-5 right-5 rounded-full bg-yellow-400 text-white text-2xl px-4 py-2 fixed'
                onClick={open}>
                +
            </button>
        </div>
    )
}