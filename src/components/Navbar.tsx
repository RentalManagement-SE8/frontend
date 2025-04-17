interface NavbarProps {
  onLoginClick: () => void;
  onLogoutClick: () => void;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onLogoutClick, isLoggedIn }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-transparent">
      <div className="text-2xl font-bold">RentEasy</div>
      <div className="hidden md:flex gap-8 text-sm">
        <span className="cursor-pointer">Rentals</span>
        <span className="cursor-pointer">Services</span>
      </div>
      <div className="flex gap-4">
        {isLoggedIn ? (
          <button className="text-sm" onClick={onLogoutClick}>
            Logout
          </button>
        ) : (
          <button className="text-sm" onClick={onLoginClick}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
