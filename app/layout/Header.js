// components/Header.js
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
    { name:"Home", href:"/" },
    { name:"Login", href:"/Login" },
    { name:"Signup", href:"/signup" },
    { name:"About", href:"/about" },
    { name:"Dashboard", href:"/DashBoard" }
]

const Header = () => {
    const pathName = usePathname()
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <p className="navbar-brand">Next.js Bootstrap</p>
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {
                nav.map((v)=>{
                    let isActive = pathName==v.href ? true : false;
                    return (            <li className="nav-item">
                        <Link href={v.href}>
                          <p className="nav-link" to={isActive} style={isActive? {fontSize:'20px'}:{}}>{v.name}</p>
                        </Link>
                      </li>)
                })
            }

            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
