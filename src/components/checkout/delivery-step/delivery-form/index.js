import Styles from "./DeliveryForm.module.css";
import Title from "@/components/title";
import Stepper from "@/components/stepper";
import IconTitle from "../../icon-title";
import SelectOption from "@/components/select-option";
import ButtonBack from "@/components/button-back";

export default function DeliveryForm() {
  return (
    <div className={Styles.delivery_form}>
      <Title level="h5">Fill it in and you're good to go!</Title>
      <div className={Styles.wrapper_delivery_form}>
        <Stepper active={2} />
        <div className={Styles.wrapper_content}>
          <ButtonBack
            text="Back to personal details"
            href="/checkout/Sign-in"
          />
          <span className={Styles.divider}></span>
          <IconTitle imgsrc="./../truck.svg" title="Delivery method" />
          <SelectOption
            title="4.00€  —  Standard delivery"
            description="Delivered before Saturday 27th"
            active="active"
          />
          <SelectOption
            title="4.00€  —  Standard delivery"
            description="Delivered before Saturday 27th"
          />
          <SelectOption
            title="4.00€  —  Standard delivery"
            description="Delivered before Saturday 27th"
          />
          <SelectOption
            title="4.00€  —  Standard delivery"
            description="Delivered before Saturday 27th"
          />
          <input type="submit" value="Proceed" />
        </div>
      </div>
    </div>
  );
}
