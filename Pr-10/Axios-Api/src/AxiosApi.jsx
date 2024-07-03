import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosApi = () => {
    const [comments, setComments] = useState();
    const FetchAxios = async () => {
        let alldata = await axios.get('https://jsonplaceholder.typicode.com/comments')
        setComments(alldata.data);
        console.log(alldata.data);
    }
    useEffect(() => {
        FetchAxios();
    }, [])

    return (
        <div style={{ backgroundColor: "#fff" }}>
            <h1 className='py-3'>AxiosApi</h1>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 d-flex flex-wrap justify-content-center">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comments && comments.map((item, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.body}</td>
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

export default AxiosApi