import React,{useContext, useState} from 'react'
import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
import ChatContainer from '../components/ChatContainer'
import { ChatContext } from '../../context/ChatContext'
 
const HomePage = () => {

  const {selectedUser} = useContext(ChatContext);


  return (
    <div className="w-full h-screen bg-black flex items-center justify-center px-4 sm:px-[10%] py-[5%] bg-[url('./assets/bgImage.svg')]  bg-contain bg-no-repeat bg-center" >

      {/* Blurry background blobs */}
      <div className="absolute w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full blur-[120px] -top-20 -left-20 z-0"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full blur-[100px] top-40 right-10 z-0"></div>

      {/* Main glass container */}
      <div className={`relative z-10 backdrop-blur-xl bg-white/4 border border-gray-600 rounded-2xl h-full w-full overflow-hidden grid grid-cols-1 ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <Sidebar />
        <ChatContainer />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage