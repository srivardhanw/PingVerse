import React from 'react'

const DummyChat = () => {
    return (
        <div className="w-full md:w-full px-4">
            <div className="relative shadow-lg rounded-2xl">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                <div className="relative bg-white shadow-xl rounded-2xl border-gray-100 overflow-hidden">
                    <div className="h-12 bg-gray-100 flex items-center px-4 border-b border-gray-400">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="mx-auto text-sm font-medium text-gray-600">PingVerse Chat</div>
                    </div>
                    <div className="p-4 h-80 overflow-hidden">
                        <div className="flex flex-col">
                            <div className="flex mb-4">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-2">S</div>
                                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm">Hey team! Just finished the design for our new landing page 🎨</p>
                                </div>
                            </div>
                            <div className="flex mb-4 justify-end">
                                <div className="bg-purple-600 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm text-white">Looks amazing! Love the color choices.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold ml-2">J</div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-2">A</div>
                                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm">When can we launch? The team is excited!</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-purple-600 rounded-lg p-3 max-w-[80%]">
                                    <p className="text-sm text-white">Let's aim for next Friday. I'll set up a meeting to discuss the details.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold ml-2">J</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummyChat