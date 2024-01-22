import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { FaCheck, FaPaperPlane } from "react-icons/fa";

type SubmitBtnProps = {
  successfulSubmit: boolean;
  setSuccessfulSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SubmitBtn({ successfulSubmit, setSuccessfulSubmit}: SubmitBtnProps) {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (successfulSubmit) {
      setSuccessfulSubmit(true);
      setTimeout(() => setSuccessfulSubmit(false), 10000);
    }
  }, [successfulSubmit, setSuccessfulSubmit]);

  return (
    <button
      type="submit"
      className={`${successfulSubmit && 'bg-green-500 hover:bg-green-500 dark:bg-green-500 dark:bg-opacity-100 dark:hover:bg-green-500'} group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65`}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : successfulSubmit ? (
        <>
          Success{" "}
          <FaCheck className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
}
