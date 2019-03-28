export const getPackages = () => ({
  type: "GET_PACKAGES"
});

export const setModalSteps = step => (
  {
    type: "SET_MODAL_STEP",
    step
  }
);

export const setLoading = loading => ({
  type: "SET_LOADING_DEPOSIT",
  loading
});

export const setUserData = user => ({
  type: "SET_USER_DATA",
  user
});

export const getDepositHistory = () => ({
  type: "GET_DEPOSIT_HISTORY"
});

export const setPaymentMethod = (method) => ({
  type: "SET_PAYMENT_METHOD",
  method
});
export const createDepositBill = (payload) => ({
  type: "CREATE_DEPOSIT_BILL",
  payload
});