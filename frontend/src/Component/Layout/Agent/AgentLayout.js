import React ,{useState}from 'react'
//import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
export default function AgentLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
const handleToggleSidebar = () => {
  setShowSidebar(!showSidebar);
  // Log the value of showSideba
};
  return (
    <>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
       <Header onToggleSidebar={handleToggleSidebar} />
   <Sidebar showSidebar={showSidebar} onToggleSidebar={handleToggleSidebar} />

    </>
  )
}
