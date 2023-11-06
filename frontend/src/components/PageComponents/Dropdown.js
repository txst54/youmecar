import React, { useState } from "react";

export default function Dropdown(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    return (
        // <select>
        //     {Object.keys(props.locations).map(location => (
        //         <option key={location} value={location}>
        //             {location}
        //         </option>
        //     ))}
        // </select>

        
        <div class="relative inline-block text-left">
            <div>
                <button 
                    type="button" 
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-inset ring-gray-300 font-['Avenir']" 
                    id="menu-button" 
                    aria-expanded="true" 
                    aria-haspopup="true" 
                    onClick={toggleDropdown}
                >
                    Locations
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Dropdown options */}
            {isDropdownOpen && (
                <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-['Avenir']" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Jester Beach / PCL</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Kinsolving</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Quarters on Nueces</a>
                    </div>
                </div>
            )}
        </div>
        
    );
}