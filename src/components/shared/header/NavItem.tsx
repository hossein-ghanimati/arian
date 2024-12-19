import { NavLink } from "react-router-dom";

const NavItem = (props: { title: string; href: string }) => {
  return (
    <li>
      <NavLink
        to={props.href}
        className={link => 
          `block py-2 pr-4 pl-3 
            ${link.isActive 
              ? "text-white rounded bg-primary-700 xs:bg-transparent xs:text-primary-700 xs:p-0 dark:text-white" 
              : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 xs:hover:bg-transparent xs:border-0 xs:hover:text-primary-700 xs:p-0 dark:text-gray-400 xs:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white xs:dark:hover:bg-transparent dark:border-gray-700"
            }
          `
        }
        aria-current="page"
      >
        {props.title}
      </NavLink>
    </li>
  );
};
export default NavItem;
