import React from 'react'
import ActionsSidebarWrapper from './components/ActionsSidebar/ActionsSidebarWrapper'
import ChatWindowWrapper from './components/ChatWindow/ChatWindowWrapper'
import FriendSidebarWrapper from './components/FriendSidebar/FriendSidebarWrapper'
import Actions from './components/ActionsSidebar/Actions'
import ConversationList from './components/ActionsSidebar/ConversationList'



const page = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen">
      {/*Left Sidebar */}
      <Actions/>
      <ConversationList/>

      {/* Chat */}
      <ChatWindowWrapper />


      {/* Right Sidebar */}
      {/* <FriendSidebarWrapper /> */}
    </div>
  )
}

export default page