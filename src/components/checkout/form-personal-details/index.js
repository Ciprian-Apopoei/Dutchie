import Styles from "./FormPersonalDetails.module.css";
import Image from "next/image";

export default function FormPersonalDetails() {
  return (
    <form className={Styles.form_personal_details}>
      <input type="email" placeholder="E-mail" />
      <span className={Styles.divider}></span>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="last name" />
      <input type="tel" placeholder="Phone (optional)" />
      <span className={Styles.divider}></span>
      <div className={Styles.search}>
        <button>
          <Image src="./../search.svg" width={16} height={16} alt="icon" />
        </button>
        <input
          type="search"
          placeholder="Enter the first line of you address"
        />
      </div>
      <div className={Styles.form_bottom}>
        <div className={Styles.country}>
          <label>Country</label>
          <p>Netherlands</p>
        </div>
        <select>
          <option>Change country</option>
          <option>Romania</option>
          <option>Netherlands</option>
          <option>Germany</option>
        </select>
      </div>
    </form>
  );
}
