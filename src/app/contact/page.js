import Container from "@/components/common/container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { serif_display } from "@/lib/fonts";

export default async function Contact() {
  return (
    <Container type="section" maxWidth="max-w-2xl" customClass="bg-rose-200/40 rounded-xl py-10">

      <h1 className={`${serif_display.className} text-3xl text-center mb-10`}>Contact me</h1>

      <div className="flex flex-col items-center gap-7 justify-center">
        <div className="grid w-full max-w-xs items-center gap-1.5">
          <Label htmlFor="name">Your name</Label>
          <Input type="text" id="name" placeholder="Full name" className="border-rose-200 placeholder:text-primary/80" />
        </div>

        <div className="grid w-full max-w-xs items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" className="border-rose-200 placeholder:text-primary/80" />
        </div>

        <div className="grid w-full max-w-xs items-center gap-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" className="border-rose-200 placeholder:text-primary/80 resize-none" />
        </div>

        <Button variant="rose">
          Send message
        </Button>
      </div>
    </Container>
  )
}