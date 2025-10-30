import { useState } from "react";
import LoginModal from "./LoginModal";

export default function LoginPage() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
