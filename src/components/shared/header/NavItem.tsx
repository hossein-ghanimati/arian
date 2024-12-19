import { NavLink } from "react-router-dom";

const NavItem = (props: { title: string; href: string }) => {
  return (
    <li>
      <NavLink
        to={props.href}
        className={link => 
          `block py-2 pr-4 pl-3 
            ${link.isActive 
              ? "text-white rounded bg-primary-700 xs:bg-transparent xs:text-primary-700 xs:p-0" 
              : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 xs:hover:bg-transparent xs:border-0 xs:hover:text-primary-700 xs:p-0 "
            }
          `
        }        
      >
        {props.title}
      </NavLink>
    </li>
  );
};
export default NavItem;
