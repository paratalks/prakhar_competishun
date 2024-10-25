import Image from "next/image";
import { images, navLinks } from "@/constants";
import { ChevronDown, Copy, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createQuery } from "@/actions/index.action";
import { redirect } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    studentPhone: "",
    studentEmail: "",
    studentCity: "",
    studentTarget: "",
    studentQuery: "",
  });
  const isFormOpen = useRef(false);
  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await createQuery({
      name: formData.get("query-name")?.toString(),
      phone: formData.get("query-phone")?.toString(),
      query: formData.get("query-desc")?.toString(),
    });
    setFormData({
      studentName: "",
      studentPhone: "",
      studentCity: "",
      studentTarget: "",
      studentQuery: "",
    });
    isFormOpen.current = false;
  };
  useEffect(() => {
    setTimeout(() => {
      isFormOpen.current = true;
    }, 10000);
  }, [isFormOpen.current]);
  return (
    <div className={"navbar-container max-sm:px-2"}>
      <div>
        <Image
          unoptimized
          src={images.logo}
          alt={"logo"}
          width={80}
          height={80}
          className={"max-sm:w-20"}
        />
      </div>
      <div
        className={` flex-row lg:gap-x-12 sm:gap-x-5 hidden sm:flex translate-x-10`}
      >
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
                  {link.title}{" "}
                  {link.sublinks.length > 0 ? <ChevronDown /> : <></>}
                </div>
              )}
            </a>
            {link.sublinks ? (
              <div
                className={
                  "absolute w-full mt-5 group hidden group-hover:block z-40"
                }
              >
                {link.sublinks && (
                  <div
                    className={
                      "dropdown-menu bg-transparent backdrop-blur-3xl mt-4 rounded-lg shadow-lg"
                    }
                  >
                    <div className={"flex flex-col gap-y-2 p-2"}>
                      {link.sublinks.map((sublink: any, index) => (
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
      <div className={"flex flex-col md:flex-row  md:gap-x-5 items-center"}>
        <div
          className={"flex flex-row gap-x-2 -translate-y-5 md:translate-y-0"}
        >
          <Phone size={20} /> <p>{"8888-0000-21"}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button
              onClick={() => {
                isFormOpen.current = true;
              }}
              className={
                "text-xs font-bold w-fit contact-us-button primary-button-animation flex flex-row bg-primary rounded-xl py-2.5 px-5 transition-all duration-300"
              }
            >
              {"Contact Us"}
            </button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-md rounded-3xl p-8 bg-primary"
            style={{ borderRadius: 20 }}
          >
            <DialogHeader>
              <DialogTitle>{`Let's Make You Champ! 🏆`}</DialogTitle>
              <DialogDescription>
                {`Ask any doubt, hindering you from being a 'Champ'`}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col items-center space-x-2 gap-y-5">
                <Label htmlFor="" className="sr-only">
                  Name of student
                </Label>
                <Input
                  id="queryName"
                  name={"query-name"}
                  placeholder={"Full Name"}
                  className={
                    "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
                  }
                  value={formData.studentName}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      studentName: e.currentTarget.value,
                    });
                  }}
                />
                <Label htmlFor="" className="sr-only">
                  Phone of student
                </Label>
                <Input
                  id="queryPhone"
                  name={"query-phone"}
                  className={
                    "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
                  }
                  placeholder={"Mobile"}
                  value={formData.studentPhone}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      studentPhone: e.currentTarget.value,
                    });
                  }}
                />
                <Label htmlFor="" className="sr-only">
                  Email of student
                </Label>
                <Input
                  id="queryEmail"
                  name={"query-email"}
                  className={
                    "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
                  }
                  placeholder={"Email"}
                  value={formData.studentEmail}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      studentEmail: e.currentTarget.value,
                    });
                  }}
                />
                <Label htmlFor="" className="sr-only">
                  City of student
                </Label>
                <Input
                  id="queryCity"
                  name={"query-city"}
                  className={
                    "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
                  }
                  placeholder={"City"}
                  value={formData.studentCity}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      studentCity: e.currentTarget.value,
                    });
                  }}
                />
                <Label htmlFor="" className="sr-only">
                  Target course of student
                </Label>
                <Input
                  id="queryTarget"
                  name={"query-target"}
                  className={
                    "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
                  }
                  placeholder={"Target Exam (eg. JEE/NEET/NISO)"}
                  value={formData.studentTarget}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      studentTarget: e.currentTarget.value,
                    });
                  }}
                />
                <Label htmlFor="" className="sr-only">
                  Query of student
                </Label>
                <Textarea
                  id="queryDesc"
                  name={"query-desc"}
                  placeholder={"Your Query"}
                  className={
                    "bg-amber-50 text-black rounded-xl placeholder:text-gray-600"
                  }
                  cols={5}
                  value={formData.studentQuery}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      studentQuery: e.currentTarget.value,
                    });
                  }}
                />
                <div className={"w-full flex flex-row gap-5 justify-center"}>
                  <Button
                    type="submit"
                    size="sm"
                    className="px-3 rounded-2xl bg-secondary hover:bg-secondary mt-5 hover:scale-110 secondary-button-animation transition-all duration-300"
                  >
                    <Link
                      href={`/thankyou?name=${formData.studentName}&phone=${formData.studentPhone}&class=${formData.studentTarget}&email=${formData.studentEmail}`}
                    >
                      {`Make Me Champ`}
                    </Link>
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default NavBar;
