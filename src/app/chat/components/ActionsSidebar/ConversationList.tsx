"use client"
import { useState } from 'react'
import SearchBar from './SearchBar'
import { useChatContext } from '../../contexts/ChatProvider'
import ConversationItem from './ConversationItem'
import { v4 as uuidv4 } from 'uuid';

const foo = [{
    "name": "Ede Huncote",
    "text": "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
    "date": "18/6/2024"
}, {
    "name": "Shaylynn Boken",
    "text": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
    "date": "19/10/2024"
}, {
    "name": "Geordie Naseby",
    "text": "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum",
    "date": "15/3/2025"
}, {
    "name": "Chanda Aggis",
    "text": "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
    "date": "27/5/2024"
}, {
    "name": "Rinaldo Hinstridge",
    "text": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est",
    "date": "5/9/2024"
}, {
    "name": "Daniella Dudman",
    "text": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla",
    "date": "10/9/2024"
}, {
    "name": "Darill Kalderon",
    "text": "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
    "date": "13/10/2024"
}, {
    "name": "Larissa Somers",
    "text": "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
    "date": "4/8/2024"
}, {
    "name": "Stephan Bedrosian",
    "text": "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent",
    "date": "22/2/2025"
}, {
    "name": "Gus Overlow",
    "text": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
    "date": "15/12/2024"
}]


const ConversationList = () => {
    const [searchValue, setSearchValue] = useState("");
    const { isSearchOpen } = useChatContext();
  
    return (
      <div  className={`${isSearchOpen ? "block col-span-10 row-span-12" : "hidden"} md:col-span-5 lg:col-span-4 md:row-span-12 bg-accent flex flex-col overflow-hidden min-h-0`}>
        
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
  
        <div className="flex-grow overflow-y-auto">
          <ul>
            {foo.map((item, index) => (
              <ConversationItem key={uuidv4()} name={item.name} text={item.text} date={item.date} i={index} />
            ))}
          </ul>
        </div>
  
      </div>
    );
  };
  
  export default ConversationList;
  
  