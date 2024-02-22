"use client";
import { Helpers } from "@/Helpers";
import { useResize } from "@/Helpers/hooks";
import { BlockList } from "net";
import { SnackbarProvider, useSnackbar } from "notistack";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const Quotations = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { val, setVal, textAreaRef } = useResize();
  const policyRef = useRef<HTMLInputElement | null>(null);
  const [selectedOption, setSelectedOption] =
    useState<String>("Frontend Developer");
  const onOptionChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log("User Selected Value - ", event.target.value);
    setSelectedOption(event.target.value);
  };
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState("Submit");
  const [currFile, setCurrFile] = useState<string>("No file selected*");
  const [size, setSize] = useState("");
  const [userFile, setUserFile] = useState<File | null>(null);
  const openFiles = () => {
    if (inputFile.current) inputFile.current.click();
  };

  useEffect(() => {
    if (currFile !== "No file selected*") {
      const isFile = !userFile ? "Selected file size:" : `${userFile.name}, `;
      setCurrFile(isFile + ` ${size}`);
    }
  }, [size]);
  return (
    <SnackbarProvider
      classes={{ containerRoot: "z-alert" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <div className={styles.about}>
        <div className={styles.contactForm}>
          <div className={styles.form}>
            <div className={styles.left}>
              <div>
                <h2>REQUEST FOR A QUOTE</h2>
                <div></div>
                <p>
                  Interested in starting a project together or have a
                  collaboration in mind? Fill out the form and {`let's `}bring
                  your ideas to life!
                </p>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <i className="fa-solid fa-phone"></i>
                    <a
                      target={`_blank`}
                      rel="noopener noreferrer"
                      href="https://wa.me/+2349169126429"
                    >
                      (+234) 807 548 9362
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <i className="fa-solid fa-envelope"></i>

                    <a
                      target={`_blank`}
                      rel="noopener noreferrer"
                      href="mailto:mosesnwigberi@gmail.com"
                    >
                      mrsyks@syks.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <i className="fa-solid fa-envelope"></i>
                    <a
                      target={`_blank`}
                      rel="noopener noreferrer"
                      href="mailto:moseschukwudinwigberi@gmail.com"
                    >
                      someemail@gmail.com
                    </a>
                  </li>
                </ul>
                <p>
                  For general enquiries and to speak directly with me kindly
                  reach me via whatsapp:
                </p>
                <button>
                  <a
                    target={`_blank`}
                    rel="noopener noreferrer"
                    href="https://wa.me/+2348075489362"
                  >
                    <b>Message me</b>
                  </a>
                </button>
                <h3>Location:</h3>
                <div>
                  <i className="fa-solid fa-building"></i>
                  Lagos State, Nigeria.
                </div>
                <br />
                <div className={styles.maps}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33020.15565385796!2d8.051868107262973!3d6.363035566481815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105b5f7b70fc171f%3A0xcd60ec82fc0e88b4!2s50%2C%20Kpiri%20Kpiri%2C%20Abakaliki%20480001%2C%20Ebonyi!5e0!3m2!1sen!2sng!4v1706905445265!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    aria-hidden="false"
                    tabIndex={0}
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="">Full Name:</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">Email:</label>
                  <input type="text" name="" id="" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">Phone:</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">How did you hear about us?</label>
                  <select className="custom-select" style={{ width: "100%" }}>
                    <option>--Choose--</option>
                    <option>Twitter</option>
                    <option>Instagram</option>
                    <option>Upwork/Guru</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    className={styles.textArea}
                    placeholder="Describe what you want"
                    name=""
                    id=""
                    cols={10}
                    ref={textAreaRef}
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    rows={1}
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">Attach File:</label>
                  <i onClick={openFiles} className="fas fa-file"></i>
                  {currFile}
                </div>

                <div className={styles.formGroup}>
                  <label
                    style={{
                      fontSize: "small",
                      fontWeight: "200",
                    }}
                    className="container"
                  >
                    <span
                      style={{
                        display: "block",
                        marginLeft: "10px !important",
                      }}
                    >
                      By submitting this form I agree to {`our'`} privacy policy
                      and terms and conditions.
                    </span>
                    <input ref={policyRef} type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <input
                  onChange={(e) =>
                    Helpers.handleFileSelected(
                      e,
                      enqueueSnackbar,
                      setSize,
                      setUserFile,
                      setCurrFile,
                      size
                    )
                  }
                  type="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                />

                <div className={styles.formGroup}>
                  <button type="submit">SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SnackbarProvider>
  );
};

export default Quotations;
