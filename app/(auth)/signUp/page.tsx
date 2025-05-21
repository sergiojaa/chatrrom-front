import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h2>Create Account</h2>
                <p>Join ChatRoom to connect with friends and family </p>
            </div>
            <div>
                <form typeof='submit' >
                    <div className='flex flex-col gap-5 items-center lg:flex-row'>
                        <div className='flex flex-col '>
                            <label htmlFor="firstName">
                                First Name
                            </label>
                            <input className="border border-green-300"
                                type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="firstName">
                                Last Name
                            </label>
                            <input className="border border-green-300"
                                type="text" />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}
