import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createQuery } from "@/actions/index.action";

const ContactUsButton = ({ variant = "primary" }) => {
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
      studentEmail: "",
      studentPhone: "",
      studentCity: "",
      studentTarget: "",
      studentQuery: "",
    });
    isFormOpen.current = false;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={() => {
            isFormOpen.current = true;
          }}
          className={`text-xs font-bold w-fit contact-us-button ${variant}-button-animation flex flex-row bg-${variant} rounded-xl py-2.5 px-5 transition-all duration-300`}
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
              required={true}
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
              required={true}
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
              required={true}
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
              required={true}
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
              required={true}
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
              required={true}
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
                  href={`/formThankYou?name=${formData.studentName}&phone=${formData.studentPhone}&class=${formData.studentTarget}&email=${formData.studentEmail}`}
                >
                  {`Make Me Champ`}
                </Link>
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default ContactUsButton;
