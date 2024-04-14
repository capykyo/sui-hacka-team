import { useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    companyName: "",
    email: "",
    message: "",
  });

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.persist();
      setInputs((i) => ({
        ...i,
        [e.target.id]: e.target.value,
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    },
    []
  );

  const handleServerResponse = useCallback((ok: boolean, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        companyName: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus((s) => ({ ...s, submitting: true }));
      axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((r) => {
        handleServerResponse(
          r.data.ok,
          "Thank you for your message! your message has been sent."
        );
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>{" "}
              <span className="block sm:inline">{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div
              className=" text-white text-xl font-bold px-4 py-3 rounded relative"
              role="alert"
            >
              Your message has been successfully submitted! We will get back to
              you shortly.
            </div>
          ) : (
            <>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                maxLength={128}
                placeholder="Company Name"
                className="bg-black border-2 outline-none border-white rounded-3xl text-white px-8 py-2 "
                onChange={handleOnChange}
                value={inputs.companyName}
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your E-mail"
                className="bg-black border-2 outline-none border-white rounded-3xl text-white px-8 py-2 "
                onChange={handleOnChange}
                value={inputs.email}
              />
              <textarea
                name="message"
                id="message"
                maxLength={1048576}
                placeholder="Additional information"
                className="bg-black border-2 outline-none border-white rounded-3xl text-white px-8 py-6 min-h-[16em]"
                required
                onChange={handleOnChange}
                value={inputs.message}
              ></textarea>
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2 font-bold"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
