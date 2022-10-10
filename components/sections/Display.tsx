import React, { useState } from 'react'
import Template from './Template'
import { useSelector } from 'react-redux'
import { RootState } from '../../pages/redux/store'

function Display() {
    const [selected, setSelected] = useState("Dynamic")
    const value = useSelector((state: RootState) => state.theme.value)

    const desc = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    const sections = [
        {
            tabTitle: "Dynamic",
            name: "Dynamic and steady",
            desc: desc,
            img: "https://5.imimg.com/data5/SELLER/Default/2022/3/IH/HB/MS/9295617/dynamic-crm-software-500x500.png",
        },
        {
            tabTitle: "Secured",
            name: "Improved Security",
            desc: desc,
            img: "https://www.maraktechnologies.com/images/services_intro/Cybersecurity_1.gif",
        },
        {
            tabTitle: "SEO",
            name: "User Friendly",
            desc: desc,
            img: "https://c.tenor.com/CCH937WUhZQAAAAC/creative-thinks-media-seo.gif",
        },
        {
            tabTitle: "Structured",
            name: "Structured content",
            desc: desc,
            img: "https://i.pinimg.com/originals/42/68/de/4268de8240c22d1320ae4b8ad77c2413.gif",
        },
    ]


    return (
        <div className={`${value == 'dark' ? 'dark' : ""}`}>
            <div className='max-w-7xl mx-auto flex '>
                {sections.map((section) => (
                    <div key={section.name} className="max-w-7xl mx-auto  dark:bg-gray-700 dark:text-gray-200">
                        <button className='hover:underline dark:hover:bg-gray-800 hover:border-gray-600 dark:bg-gray-700 hover:bg-gray-100 font-semibold text-2xl p-5 rounded-lg'
                            onClick={() => { setSelected(section.tabTitle) }}>
                            {section.tabTitle}
                        </button>
                        {selected == section.tabTitle && <Template name={section.name} desc={section.desc} img={section.img} />}
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Display