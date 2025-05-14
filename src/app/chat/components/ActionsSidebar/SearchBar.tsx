"use client"

import { GoPlus } from "react-icons/go";
import { FaSearch } from "react-icons/fa";

type valueStateType = {
    searchValue: string,
    setSearchValue: (value: string) => void
}

const SearchBar = ({ searchValue, setSearchValue }: valueStateType) => {
    return (
        <div className="p-4 border-b-1 border-[var(--border)] w-full" >
            <div className="flex gap-3 text-[var(--text-muted)] md:max-w-[600px]">
                <div className="relative flex items-center flex-grow">
                    <FaSearch className="absolute left-3 text-gray-400 pointer-events-none" />
                    <input
                        className="bg-[var(--primary)] w-full text-white rounded-2xl p-2 pl-10"
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search Conversations"
                    />
                </div>
                <button className="bg-[var(--primary)] flex justify-center items-center p-1.5 rounded-full"><GoPlus className="rounded-4xl" fontSize={30} /></button>
            </div>
        </div>
    )
}

export default SearchBar

