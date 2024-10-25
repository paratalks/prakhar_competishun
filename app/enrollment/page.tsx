"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { images } from "@/constants";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be 10 digits.",
  }),
  class: z.string({
    required_error: "Please select a class.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
});

export default function EnrollmentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      class: "",
      city: "",
      state: "",
    },
  });
  const { toast } = useToast();
  const amount = "1";
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setLoading(true);
    processPayment();

    // Here you would typically send the form data to your server
    // and then redirect to a payment page
  }
  const createOrderId = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };
  const processPayment = async () => {
    try {
      const orderId: string = await createOrderId();
      const options = {
        key: process.env.key_id,
        amount: parseFloat(amount) * 100,
        currency: "INR",
        name: "Competishun",
        description: "Best coaching for JEE Advanced and JEE Mains",
        order_id: orderId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
          const res = await result.json();
          if (res.isOk) {
            setLoading(false);
            alert("payment succeed");
            await router.push(
              `/thankyou?name=${form.getValues("name")}&phone=${form.getValues("phone")}&class=${form.getValues("class")}&transactionId=${response.razorpay_payment_id}&orderId=${response.razorpay_order_id}&currency=INR&amount=3999`,
            );
          } else {
            setLoading(false);
            alert(res.message);
          }
        },
        prefill: {
          name: form.getValues("name"),
        },
        theme: {
          color: "#3399cc",
        },
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        setLoading(false);
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/20 to-background">
      <header className="w-full p-4 border-b flex flex-row items-center">
        <Image src={images.logo} alt={"Logo"} width={50} height={50} />
        <h1 className="text-2xl flex-1 font-bold text-center pr-10">
          Competishun Student Enrollment Form
        </h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(processPayment)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className={"bg-foreground text-background rounded-xl"}
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        className={"bg-foreground text-background rounded-xl"}
                        placeholder="1234567890"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter a 10-digit phone number without spaces or dashes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={"bg-foreground text-background rounded-xl"}
                        >
                          <SelectValue placeholder="Select a class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent
                        className={"bg-foreground text-background rounded-xl"}
                      >
                        <SelectItem value="class11">Class 11</SelectItem>
                        <SelectItem value="class12">Class 12</SelectItem>
                        <SelectItem value="dropper">Dropper</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input
                        className={"bg-foreground text-background rounded-xl"}
                        placeholder="Your City"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input
                        className={"bg-foreground text-background rounded-xl"}
                        placeholder="Your State"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full rounded-xl">
                {loading ? `Submit Details` : `Loading 🫸`}
              </Button>
            </form>
          </Form>
        </div>
      </main>

      <footer className="w-full p-4 border-t text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Your Educational Institute. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
