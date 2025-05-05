import Mockup1 from '../assets/images/Einvitation-mockup1.png'

function Einvitation() {
    return (
        <div className="pt-4">
            <img src={Mockup1} alt="" />
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
    )
}

export default Einvitation;