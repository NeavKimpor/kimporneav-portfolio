import Mockup1 from '../assets/images/Engineernest-mockup1.png'

function Engineernest() {
    return (
        <div className="">
            <img src={Mockup1} alt="" />
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
    )
}

export default Engineernest;