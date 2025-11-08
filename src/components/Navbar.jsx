//1 hepler dung de noi class tring co dieu kien
import { cn } from "../lib/utils";
//cac hook React
import { useEffect, useState } from "react";
//icon components tu libary lucide-react
import { Menu, X } from "lucide-react";

//array cau hinh cac muc navigation
//name: hien thi
//href: la anchor link trong trang
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  //isScrolled: la 1 boolean hien thi navbar da cuon qua nguong
  //tac dung: dung de thay doi padding, background, shadow khi nguoi dung cuon
  const [isScrolled, setIsScrolled] = useState(false);
  //isMenuOpen boolean dong/mo menu khi o mobile overlay
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //goi 1 useEffect
  //muc dich: khi ng dung cuon trang, cap nhat isScrolled de doi style navbar
  //useEffect voi 1 empty array nghia la: khi effect chay moi lan khi mount, dang ky listener va cleanup khi unmount-dung
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      //giai thich tai sao lai < 10px
      //khi nguoi dung cuon xun hon 10px: isScrolled = true, navbar thu nho, add background, do bong
      //khi o vi tri dau trang: isScrolled = false, navbar to hon, trong suot
      //Muc dich: giup navbar de nhin hon khi ng dung cuon
    };

    //them 1 event listener tren object window de lang nghe su kien scroll cua nguoi dung
    //moi khi ng dung cuon trang, thi trinh duyet se goi den function handleScroll
    window.addEventListener("scroll", handleScroll);
    //day la 1 cleanup function. khi component unmount - hoac khi effect sap chay lai
    // thi react se go bo listener, tranh de listener chay sau khi component da huy
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        //fixed wfull z-40: navbar co dinh phia tren, rong 100% va z-index 40
        //transition-all duration-300: khi thay doi class thi chuyen doi muot trong 3s
        "fixed w-full z-40 transition-all duration-300",
        //su dung toan tu 3 ngoi
        //neu isScrolled = true: padding -3 nen mo backdrop-blur-md shadow-xs tao hieu ung navbar dinh noi khi cuon
        //neu isScrolled = false: padding -5
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> My</span>
            {""}
            Portfolio
          </span>
        </a>

        {/*desktop nav */}
        {/**hidden md:flex - an navbar tren mobile, hien thi khi ma hinh >= md
         * space-x-8: khoang cach giua cac item
         */}
        <div className="hidden md:flex space-x-8">
          {/**su dung 1 method map de tao 1 array moi va truyen 1 function co cac bien item va key
           * key: se su dung cac index
           * class: text mo va hover doi mau
           */}
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {/**name cac navbar se lay item.name */}
              {item.name}
            </a>
          ))}
        </div>

        {/** mobile nav */}

        {/**su dung button de hien/an menu
         * nut chi hien thi tren mobile
         * goi 1 action click
         * setIsMenuOpen la setter cua state isMenuOpen
         * truyen function vao setter, React truyen gia tri state hien tai vao prev
         * (prev) => !prev: nghia la lay gtri hien tai va doi nguoc no
         * 
         * aria-label thuoc tinh ARIA cho screen readers mo ta chuc nang cua button
         * dung toan tu de thay doi nhan mo ta theo trang thau
         * neu menu mo(isMenuOpen = true) -> label la "Close Menu"
         * neu menu dong -> label la 'Open Menu'
         * tai sao dung
         * ta can: user use trinh doc man hinh can biet action cua nut ngay lap tuc -> thay doi label theo trang thai giup ho hieu
         * 
         * duoi su dung 1 toan tu 3 ngoi nua co muc dich
         * neu isMenuOpen la true -> hien thi menu va icon X voi size 24
         * neu isMenuOpen = false -> hien thi icon Menu
         */}
        <button
          className="md:hidden p-2 text-foreground z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          {""}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
