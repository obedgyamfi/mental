"use client";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdColorPalette } from "react-icons/io";
import Settings from "./Settings";
import ColorPalette from "./ColorPalette";
import Operation from "./Operation";

const Nav = ( {handleOperationChange} ) => {
  return (
   <nav className="flex-center h-auto top-0">

    <h1 className="head_text text-center">MENTAL</h1>
    <div className="flex-center h-auto">

    {/* Settings Icon
    <IoSettingsSharp 
    size = {40}
    // color = ""
    className="ioSetting-icon"
    // style = {}
    /> */}

    {/* Color pallete icon */}
    <IoMdColorPalette
    size = {40}
    // color = ""
    className="ioColorPalette-icon"
    //style = {}
    />

    {/* Operations */}
    <Operation handleOperationChange={handleOperationChange} />
    <ColorPalette />
    <Settings />


    </div>
   </nav>
  )
}

export default Nav