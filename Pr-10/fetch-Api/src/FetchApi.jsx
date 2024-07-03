import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [post, setPost] = useState()

    const fetchUser = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(Allpost => {
                setPost(Allpost)
            })
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <h1 className='py-3'>FetchApi</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post && post.map((post, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{post.id}</th>
                                                <td>{post.title}</td>
                                                <td>{post.body}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FetchApi
