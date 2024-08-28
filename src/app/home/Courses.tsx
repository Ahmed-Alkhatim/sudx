import { describe } from "node:test"

export default () => {
    const categories = [
        {
            name: 'UI/UX',
            courses: [
                { title: "AWS Certified solutions Architect", description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor', duration: '20 Hours', instructor: 'Ahmed', origin_price: '$20', current_price: '$10', image_cover: 'course1.jpg' },
                { title: "AWS Certified solutions Architect", description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor', duration: '20 Hours', instructor: 'Ahmed', origin_price: '$20', current_price: '$10', image_cover: 'course2.jpg' },
                { title: "AWS Certified solutions Architect", description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor', duration: '20 Hours', instructor: 'Ahmed', origin_price: '$20', current_price: '$10', image_cover: 'course3.jpg' },
            ]
        }

    ]
    return (
        <div>
            <h3 className="text-[18px] text-gray-2 font-bold mb-4">UI/UX</h3>
            <div className="flex space-x-5 flex-nowrap overflow-scroll scrollbar-hide  ">
                {categories[0].courses.map((course) =>
                    <div className="w-[244px] p-4 rounded-[20px] border border-gray-1 space-y-4 text-gray-2 flex-shrink-0">

                        <div className="rounded-[20px] overflow-hidden ">
                            <img src="/course1.jpg" alt="" />
                        </div>

                        <div className="flex justify-between text-[12px] ">
                            <span>
                                <svg className="inline-block me-2" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                                    <rect x="0.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                                    <rect x="11.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                                    <rect x="11.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                                </svg>
                                <span className="font-bold"> UI/UX</span>
                            </span>
                            <span>
                                <svg className="inline-block me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0.375C18.4219 0.375 23.625 5.57812 23.625 12C23.625 18.4219 18.4219 23.625 12 23.625C5.57812 23.625 0.375 18.4219 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375ZM12 21.375C17.1562 21.375 21.375 17.2031 21.375 12C21.375 6.84375 17.1562 2.625 12 2.625C6.79688 2.625 2.625 6.84375 2.625 12C2.625 17.2031 6.79688 21.375 12 21.375ZM14.8594 16.5L10.875 13.5938C10.7344 13.5 10.6875 13.3125 10.6875 13.1719V5.4375C10.6875 5.15625 10.9219 4.875 11.25 4.875H12.75C13.0312 4.875 13.3125 5.15625 13.3125 5.4375V12.0938L16.4062 14.3906C16.6875 14.5781 16.7344 14.9062 16.5469 15.1875L15.6562 16.3594C15.4688 16.6406 15.1406 16.6875 14.8594 16.5Z" fill="#D9D9D9" />
                                </svg>
                                <span className="font-bold">{course.duration} </span>
                            </span>
                        </div>

                        <div>
                            <h3 className="font-bold text-[14px]">{course.title}</h3>
                            {/* <p className="text-[14px]">{course.description}</p> */}
                        </div>
                        <div className="flex justify-between items-center font-bold text-[12px]">
                            <span className="flex items-center space-x-1">
                                <div className="inline-block w-[25px] h-[25px] rounded-[25px] overflow-hidden"> <img src = "/user.jpg" alt="user" className="w-full h-full"/></div>
                                <span>{course.instructor}</span>
                            </span>
                            <span className="font-bold text-primary">{course.origin_price}</span>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}