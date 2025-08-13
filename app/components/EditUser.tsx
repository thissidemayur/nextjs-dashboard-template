"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { z } from "zod";
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

const formSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Username must be atleast 2 character" })
    .max(50),
  email: z.string().email({ message: "Invalid email address " }),
  phone: z.string().min(10).max(15),
  role: z.enum(["admin", "user"]),
});

export default function EditUserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "mayur pal",
      phone: "+91 6283750133",
      email: "thissidemayur@gmail.com",
      role: "admin",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit User</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit User</SheetTitle>
          <SheetDescription asChild>
            <Form {...form}>
              <form
                className="space-y-8"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* username */}
                <FormField
                  control={form.control}
                  name="userName"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>UserName</FormLabel>
                      <FormControl>
                        <Input placeholder="johnDoe" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* phone number */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91124564323" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your Phone Number number through which you can
                        login
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="gmail@gmail.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your email number through which you can login
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* role */}
                <FormField
                  control={form.control}
                  name="role"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        This is your email display name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* submit button */}
                <Button>Update Profile</Button>
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
