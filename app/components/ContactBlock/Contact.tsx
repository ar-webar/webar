"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";
import styles from "./contact.module.scss";
import Link from "next/link";

export type FormData = {
  name: string;
  email: string;
  tel: string;
  message: string;
  // isPrice: number;
};

export const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(data: FormData) {
    if (!isChecked) {
      setErrorMessage(
        "Пожалуйста, подтвердите ваше согласие с политикой конфиденциальности"
      );
      return;
    }
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div>
        <label htmlFor="name">Ваше имя*</label>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail*</label>
        <input
          type="email"
          placeholder="example@domain.com"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="email">Телефон*</label>
        <input
          type="tel"
          placeholder="+ 375 (33) 299-16-16"
          {...register("tel", { required: true })}
        />
        {/* <div className={styles.price}>
          <label htmlFor="number" >Price*</label>
          <input
            type="number"
            placeholder="0"
            {...register("name", { required: '1' })}
          />
        </div> */}
      </div>
      <div>
        <label htmlFor="message">Как мы можем вам помочь?*</label>
        <textarea
          rows={4}
          placeholder="Type your message"
          {...register("message", { required: true })}
        ></textarea>
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
      <div>
        <div className={styles.concent}>
          <span className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          </span>

          <div>
            <p>
              Я даю согласие на cбор, обработку, распространение, предоставление
              и хранение моих персональных данных в соответствии с действующей{" "}
            </p>
            <Link href="/privacy-policy/" target="_blank">
              Политикой ООО «ВЕНДИТИО» в отношении обработки и защиты
              персональных данных
            </Link>
          </div>
        </div>
        <button className={styles.send}>Отправить сообщение</button>
      </div>
    </form>
  );
};

export default Contact;
