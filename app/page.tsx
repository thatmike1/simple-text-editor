"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Tiptap from "@/components/Tiptap";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function Home() {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: "Hey, the title must be at least 5 characters long" })
      .max(100, {
        message: "Hey, the title must be less than 100 characters long",
      }),
    price: z.number().min(1, { message: "Hey, the price must be at least 1" }),
    description: z
      .string()
      .min(5, {
        message: "Hey, the description must be at least 5 characters long",
      })
      .max(1000, {
        message: "Hey, the description must be less than 1000 characters long",
      })
      .trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      price: 29.99,
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <main className='p-24'>
      <Form {...form}>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='Main title for your thing' />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Tiptap description={field.name} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
      </Form>
    </main>
  );
}
