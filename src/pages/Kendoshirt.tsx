import Mockup1 from '../assets/images/Shirt-mockup1.png'

function Kendoshirt() {
    return (
        <div>
            <img src={Mockup1} alt="" />
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
    )
}

export default Kendoshirt;