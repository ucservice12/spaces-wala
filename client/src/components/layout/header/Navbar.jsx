// export default Navbar;
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {

    return (
        <>
            <div className="block md:hidden">
                <NavbarMobile />
            </div>

            <div className="hidden md:block">
                <NavbarDesktop />
            </div>


        </>
    )
};

export default Navbar;
