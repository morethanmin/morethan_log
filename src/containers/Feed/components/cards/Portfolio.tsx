import CONFIG from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const Portfolio: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-1 mb-3 dark:text-white">📈 Portfolio</div>
      <div className="w-full md:p-4 lg:p-4 rounded-2xl bg-white dark:bg-zinc-700 mb-9">
        <div className="relative w-full after:content-[''] after:block after:pb-[100%]">
          <Image src={CONFIG.profile.image1} layout="fill" alt="" />
        </div>
        <div className="bg-white p-2 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
          <div className=" text-xl italic font-bold">{CONFIG.profile.name1}</div>
          <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            {CONFIG.profile.role1}
          </div>
          <div className="text-sm mb-2">{CONFIG.profile.bio1}</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
