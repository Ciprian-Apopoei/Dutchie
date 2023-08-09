import Styles from "./Checkout.module.css";
import SignInForm from "./sign-in-form";
import CartSmall from "./cart-small";

export default function SignIn() {
  return (
    <section className={Styles.checkout}>
      <div className="container_regular">
        <div className={Styles.container_inner}>
          <SignInForm />
          <CartSmall />
        </div>
      </div>
    </section>
  );
}
