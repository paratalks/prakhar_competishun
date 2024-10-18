import Image from "next/image";
import { images, navLinks } from "@/constants";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <div className={"navbar-container"}>
      <div>
        <Image src={images.logo} alt={"logo"} width={80} height={80} />
      </div>
      <div className={`flex flex-row gap-x-12 max-sm:hidden`}>
        {navLinks.map((link) => (
          <div
            key={link.id}
            className={`flex flex-col gap-y-2 relative ${link.sublinks ? "group" : ""}`}
          >
            <a
              className={
                "text-gray-400 font-bold hover:text-foreground transition-colors ease-linear duration-200"
              }
              href={link.href}
            >
              {link.id == 4 ? (
                <span
                  className={
                    "bg-gradient-to-r from-primary to-foreground to-80% bg-clip-text text-transparent"
                  }
                >
                  {link.title}
                </span>
              ) : (
                <div className={"flex flex-row gap-x-1"}>
                  {link.title} {link.sublinks ? <ChevronDown /> : <></>}
                </div>
              )}
            </a>
            {link.sublinks ? (
              <div
                className={
                  "absolute w-full mt-5 group hidden group-hover:block"
                }
              >
                {link.sublinks && (
                  <div
                    className={
                      "dropdown-menu bg-transparent backdrop-blur-3xl mt-4 rounded-lg shadow-lg"
                    }
                  >
                    <div className={"flex flex-col gap-y-2 p-2"}>
                      {link.sublinks.map((sublink, index) => (
                        <a
                          className={
                            "text-gray-400 font-bold hover:text-foreground transition-colors ease-linear duration-300"
                          }
                          key={index}
                          href={sublink.href}
                        >
                          {sublink.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>

      {/*    add hover effect in the button on hovering the button a slight shadow should come out of the button of primary color  */}
      <button
        onMouseEnter={() => {}}
        className={
          "text-sm font-bold contact-us-button primary-button-animation flex flex-row bg-primary rounded-xl py-2.5 px-5"
        }
      >
        Contact Us
      </button>
    </div>
  );
};
export default NavBar;
