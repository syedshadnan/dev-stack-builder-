import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <div className="container mx-auto flex justify-between items-center py-4 sticky">
            <img src={Logo} alt="" />

            <ul className="flex gap-6">
  <li className="cursor-pointer text-secondary">
  Home
</li>
  <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">Technology</li>
  <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">Projects</li>
  <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">About</li>
  <li className="cursor-pointer text-gray-600 transition-colors hover:text-secondary">Contact</li>
</ul>

            <div className="flex gap-4">
                <button className="cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:text-secondary">
  Sign in
</button>
                <button className="btn btn-secondary">Secondary</button>
            </div>
        </div>
    );
};

export default Nav;