import { FormEventHandler } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import styles from "../styles/Deposit.module.css";

type FormData = {
  amount: number;
  fee: number;
};

const DepositPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const deposit = handleSubmit(async (data) => {
    // TODO: use some form library for better typing
    console.log(data);
    // get l1 transaction from background?

    // send L1 transaction
    // depositEtherTx
    // window.send
    // await window.ethereum.request({
    //   method: 'eth_sendTransaction',
    //   params: [{
    //     data,
    //     to,
    //     value,
    //     from: this.$store.state.account.accounts[0],
    //   }]
    // })
  });

  return (
    <div className={styles.container}>
      <h1>Deposit Ether</h1>
      <form onSubmit={deposit}>
        <div className={styles.formControl}>
          <label htmlFor="amount">Amount</label>
          <input
            className={clsx(styles.value, errors.fee && styles.error)}
            {...register("amount", { required: true, valueAsNumber: true })}
          />
          {errors.amount && <p className={styles.error}>Required Field</p>}
        </div>

        <div className={styles.formControl}>
          <label htmlFor="fee">Fee</label>
          <input
            className={clsx(styles.value, errors.fee && styles.error)}
            {...register("fee", { required: true, valueAsNumber: true })}
          />
          {errors.fee && <p className={styles.error}>Required Field</p>}
        </div>

        <div className={styles.formControl}>
          <button className={styles.mainButton} type="submit">
            Deposit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepositPage;
