
//  --------------------------------- Shows The Path of the Checkout Steps  --------------------------------- \\

export default function CheckoutSteps(P) {
    return (
      <div className="row checkout-steps">
        <div className={P.step1 ? 'active' : ''}>Sign-In</div>
        <div className={P.step2 ? 'active' : ''}>Shipping</div>
        <div className={P.step3 ? 'active' : ''}>Payment</div>
        <div className={P.step4 ? 'active' : ''}>Place Order</div>
      </div>
    );
  }