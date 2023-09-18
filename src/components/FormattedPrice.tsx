interface Props {
  amount: number;
}

const FormattedPrice = ({ amount }: Props) => {
  const formattedAmount = new Number(amount).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
