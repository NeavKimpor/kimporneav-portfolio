import Navibar from "../components/Navibar";
import { Play } from 'lucide-react'
import KITMockup1 from '../assets/images/KIT-mockup1.png'
import EnMockup1 from '../assets/images/Engineernest-mockup1.png'
import EinMockup1 from '../assets/images/Einvitation-mockup1.png'
import ShirtMockup1 from '../assets/images/Shirt-mockup1.png'

function Home() {
    return(

        <>

            <Navibar/>

            <div className="px-3 pt-20">
                <h1 className="catch">Digital <br></br> Designer</h1>
                <p className="catch-b pb-5 pl-2 pt-4">experienced in<br></br> Web-App Design,<br></br> UX / UI, and Frontend Development.</p>

                <div>
                    <p className="catch-sub pl-2">I’m passionate about crafting clear interfaces that help users focus on what really matters.</p>
                </div>

                <hr className="border-t-1 my-6 border-black"/>
                <div className="flex ">
                    <Play fill="black"/>
                    <p className="catch-sub pl-2">I can help you with </p>
                </div>
                <div className="pl-2">
                    <div className="flex items-end gap-6 pt-8">
                        <h1 className="catch-num">01.</h1>
                        <div>
                            <p className="catch-title mb-1">Design</p>
                        </div>
                    </div>
                    <p className="catch-b pt-4">I make web designs, posters, and shirt designs that align with the user needs and requirements.</p>
                </div>
                <div className="pl-2">
                    <div className="flex items-end gap-6 pt-8">
                        <h1 className="catch-num">02.</h1>
                        <div>
                            <p className="catch-title mb-1">Code</p>
                        </div>
                    </div>
                    <p className="catch-b pt-4">Beside designing side, I also involve in the frontend development such as the landing page, and e-invitation.</p>
                </div>
                {/* <hr className="border-t-1 my-6 border-black"/> */}
                {/* Engineernest */}
                <div className="bg-black text-white mt-6 pb-6">
                    <img src={EnMockup1} alt="" />
                    <div className='px-6'>
                        <h1 className='project-title text-4xl items-start'>Engineernest</h1>
                        <p className='catch-b mt-6'>A landing page where the Recruiter and Jobseeker able to match with each other according the job positions and skills.</p>
                        <div className='mt-6'>
                            <p>Project Type: End-to-end web-app + branding</p>
                            <p>Role: UX/UI Designer + Frontend Developer</p>
                            <p>Industry: Human Resource</p>
                        </div>
                        <button className='bg-white catch-sub text-black py-3 px-16 mt-4 rounded-sm'>View Project</button>
                    </div>
                </div>
                {/* KIT */}
                <div className="bg-white">
                    <img src={KITMockup1} alt="" />
                    <div className='px-6'>
                        <h1 className='project-title text-4xl'>KIT Website</h1>
                        <p className='catch-b mt-6'>Improving the university website to help foster the university information and make sure each information is updated and user-friendly for all potential students and partners.</p>
                            <div className='mt-6'>
                                <p>Project Type: End-to-end web-app</p>
                                <p>Role: UX/UI Designer</p>
                                <p>Industry: Academic</p>
                            </div>
                        <button className='bg-black catch-sub text-white py-3 px-16 mt-4 rounded-sm'>View Project</button>
                    </div>
                </div>
                {/* E-Invitation */}
                <div className="bg-black text-white mt-6 pb-6">
                    <img src={EinMockup1} alt="" />
                    <div className='px-6'>
                        <h1 className='project-title text-4xl items-start'>E-Invitation</h1>
                        <p className='catch-b mt-6'>An electronic invitation for the engagement event. Instead of using paper invitation, we can replace with the attractive, and user-friendly e-invitation.</p>
                        <div className='mt-6'>
                            <p>Project Type: End-to-end web-app</p>
                            <p>Role: Frontend Developer</p>
                            <p>Industry: Wedding</p>
                        </div>
                        <button className='bg-white catch-sub text-black py-3 px-16 mt-4 rounded-sm'>View Project</button>
                    </div>
                </div>
                {/* Kendo */}
                <div className="bg-white">
                    <img src={ShirtMockup1} alt="" />
                    <div className='px-6'>
                        <h1 className='project-title text-4xl'>Kendo Shirt</h1>
                        <p className='catch-b mt-6'>Designing the t-shirt for Japanese Kendo Club in Thailand that showcases both cultures.</p>
                            <div className='mt-6'>
                                <p>Project Type: T-shirt Design</p>
                                <p>Role: Product Designer</p>
                                <p>Industry: Kendo</p>
                            </div>
                        <button className='bg-black catch-sub text-white py-3 px-16 mt-4 rounded-sm'>View Project</button>
                    </div>
                </div>

                <hr className="border-t-1 my-6 border-black"/>

                <div className="px-6 pb-6">
                    <p className="catch-sub mb-4">Thank you for your interest in my work!</p>
                    <p className="catch-b">© 2025 Neav Kimpor</p>
                </div>
            </div>

        </>
        
    )
}

export default Home;