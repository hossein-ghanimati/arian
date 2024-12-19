import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="https://secure.gravatar.com/avatar/5118e3dfd6864e9be78763dd17fd4517?s=96&d=mm&r=g"
        className="mr-3 h-6 sm:h-9 rounded-full overflow-hidden scale-150 sm:scale-125"
        alt="Flowbite Logo"
      />
      <span className="self-center logo-text">
        Hossein
      </span>
    </Link>
  );
};

export default Logo;
