import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
// import {textVariant} from '../utils/motion'
import { SectionWrapper } from "../../hoc";
import { success } from '../../assets'


const Works = () => {
    return (
        <>


            <h3 class="text-2xl text-gray-700 font-bold mb-6 ml-3">TaskDon Productivity</h3>

            <ol className="ml-10 md:ml-0" >
                <li className="border-l-2 border-purple-600">
                    <div class="md:flex flex-start">
                        <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full md:-ml-3.5 -ml-4">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </div>
                        <div class="block p-6 rounded-lg shadow-lg bg-[#12181f]  ml-6 mb-10 md:max-w-screen-lg">
                            <div class="flex justify-between mb-4">
                                <a href="#!" class="text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out md:text-3xl text-2xl font-bold">Empower Success</a>

                            </div>
                            <p class="text-[#818891] mb-6">
                                <h4 className=" md:text-3xl ">
                                    Our Platform Delivers Expert Assignment Help
                                    <br />for Academic Excellence.
                                </h4>
                            </p>
                            <div className="flex flex-row flex-wrap gap-4">
                                <p className="pink-text-gradient">
                                    #Programming
                                </p>
                                <p className="blue-text-gradient">#Social-Sciences</p>
                                <p className="orange-text-gradient">#Law</p>

                            </div>
                        </div>
                    </div>
                </li>
                <li class="border-l-2 border-green-600">
                    <div class="md:flex flex-start">
                        <div class="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </div>
                        <div class="block p-6 rounded-lg shadow-lg bg-[#12181f] md:max-w-screen-lg h-64 ml-6 mb-10">
                            <div class="flex justify-between mb-4">
                                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">21 000 Job Seekers</a>
                               
                            </div>
                            <p class="text-gray-700 mb-6">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
                         
                        </div>
                    </div>
                </li>
                <li class="border-l-2 border-green-600">
                    <div class="md:flex flex-start">
                        <div class="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </div>
                        <div class="block p-6 rounded-lg shadow-lg bg-[#12181f] max-w-md ml-6 mb-10">
                            <div class="flex justify-between mb-4">
                                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Awesome Employers</a>
                                <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">21 / 12 / 2021</a>
                            </div>
                            <p class="text-gray-700 mb-6">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
                            <button type="button" class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button>
                            <button type="button" class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
                        </div>
                    </div>
                </li>
            </ol>


            {/* <VerticalTimeline
                layout="1-column-left"
                className="md:mr-40 mr-5 "
                animate='true'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work  "
                    contentStyle={{ background: '#12181f', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Available"
                    dateStyle={{ color: "violet-gradient" }}
                    lineColor={"violet-gradient"}
                    iconStyle={{
                        boxShadow: '0 0 10px 5px #77e76d, 0 0 20px 10px #68e55d, 0 0 30px 15px #68e55d',
                        backgroundImage: { success },
                        color: '#fff',
                        overflow: 'hidden',
                        borderRadius: '50%'
                    }}
                    icon={<img src={success} alt='TD' />}
                >
                    <h3 className="vertical-timeline-element-title md:text-2xl font-bold font-mono text-[#52b950]">Empower Success </h3>
                    <h4 className="vertical-timeline-element-subtitle md:text-3xl font-bold">
                        Our Platform Delivers Expert Assignment Help
                        <br />for Academic Excellence.
                    </h4>
                    <div className="flex flex-row flex-wrap gap-4 text-3xl">
                        <p className="green-text-gradient "></p>
                        <p className="pink-text-gradient">#Programming</p>
                        <p className="blue-text-gradient">#Social-Sciences</p>
                        <p className="orange-text-gradient">#Law</p>
                        <p>#statistics</p>
                    </div>
                </VerticalTimelineElement>


            </VerticalTimeline> */}
        </>

    )
}

export default SectionWrapper(Works, "")