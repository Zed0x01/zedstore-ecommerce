const stripe = require("stripe")(process.env.STRIPE_KEY);

const makePayment = async (req, res) => {
    const data = await stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "USD",
        },
        (stripeError, stripeRes) => {
            if (stripeError) {
                console.log(stripeError);
                return res.status(500).json(stripeError);
            }
            res.status(200).json(stripeRes);
        }
    );
}

module.exports = makePayment;