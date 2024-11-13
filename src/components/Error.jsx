/** @format */

import toast, { Toaster } from "react-hot-toast";

export function Error() {
  toast.error("Something went wrong...");
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
      }}
    />
  );
}
