import React, { use } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()


    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/rahulghosh111111')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                fetch('https://api.github.com/users/rahulghosh111111')

            })
    }, [])


    // <div className='bg-gray-600 text-center text-3xl p-4 text-white'>
    // Github Followers : {data.followers} <br/>

    // <img className='rounded-full' src={data.avatar_url} alt="Git image" width={300} />
    // </div>

    return (
        <>
            <div className='h-screen bg-gradient-to-r from-gray-700 to-black'>
                <div className=' text-center text-4xl p-6 text-white font-bold' >
                    <h1>RAHUL GHOSH</h1>
                </div>

                <div className=' flex border-[1px] mx-8 my-4'>
                    <div className='  text-3xl p-8 text-white text-shadow-2xl'>

                        <img className='rounded-full' src={data.avatar_url} alt="Git image" width={450} />
                    </div>
                    <div className='p-8 text-white'>

                        <div className='text-2xl pt-4 text-white'>
                            <h2>Github Followers : {data.followers}</h2>
                        </div>
                        <div>
                            <h2 className='text-white text-2xl pt-2'> Public Github Repositories : {data.public_repos}</h2>
                        </div>
                        <div className='text-white text-2xl pt-2 space-x-4 flex flex-wrap gap-4'>
                            <a
                                href="https://www.linkedin.com/in/rahul-ghosh-b0b660254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                className="flex items-center gap-2 hover:underline hover:text-blue-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/rahulghosh111111"
                                className="flex items-center gap-2 hover:underline hover:text-blue-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub /> Github
                            </a>
                            <a
                                href="https://leetcode.com/u/Rahul_official/"
                                className="flex items-center gap-2 hover:underline hover:text-blue-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiLeetcode /> LeetCode
                            </a>
                            <a
                                href="https://github.com/rahulghosh111111?tab=repositories"
                                className="flex items-center gap-2 hover:underline hover:text-blue-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaCode /> Repositories
                            </a>
                        </div>
                        <div className='text-white text-2xl pt-2 pb-2'>Bio : {data.bio}</div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Github

// export const GithubInfoLoader = async () => {
//    const response = await fetch('https://api.github.com/users/rahulghosh111111')
//     return response.json()

// }