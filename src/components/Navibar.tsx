function Navibar() {
    return (
        <div className=" flex justify-between items-start p-5">
            <p className="nav-menu pb-8">Kimpor Neav</p>
            <div className="flex flex-col items-end gap-8 nav-menu">
                <p>About</p>
                <p>Work</p>
                <p>Resume</p>
            </div>
        </div>
    )
}

export default Navibar;