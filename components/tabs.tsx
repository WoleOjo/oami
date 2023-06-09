'use client'

import { useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import TabsImage01 from '@/public/images/hero-image-01.jpeg'
import TabsImage02 from '@/public/images/tab-image-02.jpg'
import TabsImage03 from '@/public/images/tab-image-03.jpeg'
import TabsImage04 from '@/public/images/tab-image-04.jpg'
import TabsImage05 from '@/public/images/tab-image-05.jpeg'

export default function Tabs() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
	  if ( tabs.current && tabs.current.parentElement ) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])    

  return (
    <section >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t ">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Quick Help Links</h2>
            <p className="text-xl text-gray-900" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">How can we help you today?</p>
          </div>

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                onClick={() => setTab(1)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                </svg>
                <span className="text-white group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Pray with me</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-50'}`}
                onClick={() => setTab(2)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                </svg>
                <span className="text-white group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Counselling</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                onClick={() => setTab(3)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </svg>
                <span className="text-white group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Discipleship</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-50'}`}
                onClick={() => setTab(4)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
                </svg>
                <span className="text-white group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Sermons</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-50'}`}
                onClick={() => setTab(5)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.936 6.007H8.358l1.594-4.685c.3-.997-.897-1.794-1.694-.997L.284 8.3c-.598.598-.199 1.694.698 1.694H7.56l-1.594 4.685c-.3.997.897 1.794 1.694.997L15.633 7.7c.598-.598.2-1.694-.697-1.694z" />
                </svg>
                <span className="text-white group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Talk to Dr Esther</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage01} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2 text-white">God answers prayers. He heals and delivers.</h4>
                      <p className="text-lg text-white">Do you have any ailment or sickness in your body? Or do you know a loved one suffering from sicknesses and diseases? The power of God is available to heal all sorts of sicknesses. Call us today</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="https://wa.me/message/VZ3AKM3QFUJDN1" target='_blank'>
                        <span className="text-sm">Pray for me</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage02} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2 text-white">Are you overwhelmed by or worried about any situation? Talk to us</h4>
                      <p className="text-lg text-white">We want you to know that God has not left you without help. He has put in place a community of believers that understand your situation and are eager to help you through. Talk to someone today</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="https://wa.me/message/VZ3AKM3QFUJDN1" target='_blank'>
                        <span className="text-sm">Talk to us</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage03} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2 text-white">Discipleship is foundational to the expansion of God's Kingdom</h4>
                      <p className="text-lg text-white">Are you a believer and wants to do more for God? Do you want to understand the scriptures better and flow more in the gifts and fruits of the spirit? Join Pastor Olayinka as he guides you through the path of discipleship</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="https://wa.me/message/VZ3AKM3QFUJDN1" target='_blank'>
                        <span className="text-sm">Register</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage05} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2 text-white">The Word of God on the Go!</h4>
                      <p className="text-lg text-white">We have carefully archived and curated several hours of teachings for you to help your spiritual growth. You do not have to wait only till sundays before you listen to the word. You can listen now!</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" target='_blank' href="https://www.youtube.com/@olayinkaademilukaministrie231">
                        <span className="text-sm">Browse teachings</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 5 */}
                <Transition
                  show={tab === 5}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage04} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2 text-white">A safe place for ladies</h4>
                      <p className="text-lg text-white"> Dr Esther is a seasoned counsellor, adviser and medical doctor. She is also a mother and sister. With her many years of experience in minstry overseeing and managing people, you can be sure that you are in safe and secured hands. </p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="https://wa.me/message/VZ3AKM3QFUJDN1" target='_blank'>
                        <span className="text-sm">Talk to Dr Esther</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
