import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

type ConversationItemType = {
    key: string,
    name: string,
    text: string,
    date: string,
    i:number
}

const ConversationItem = ({ name, text, date, i }: ConversationItemType) => {
    return (
        <li className='relative p-4 text-white flex'>
            <Avatar className='w-12 h-12'>
                <AvatarImage src={`https://i.pravatar.cc/150?img=${i}`} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='ml-4 flex flex-col justify-between'>
                <div className='flex items-center'>
                    <span className='flex-grow'>{name}</span>
                    <span className='absolute top-5 right-4 text-xs text-[var(--text-muted)]'>{date}</span>
                </div>
                <p className='text-sm text-[var(--text-muted)]'>{text.substring(0,23) + "..."}</p>
            </div>
        </li>
    )
}

export default ConversationItem