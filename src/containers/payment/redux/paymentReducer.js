const initialState = {
  coins: [ ],
  payment: {
    fee: "",
    number: "",
    coin: "",
    amount: "",
    value: "",
    bank: "",
    name: "",
    dateend: "",
    doc: "",
  },
  fee: {
    low: 0,
    medium: 0,
    hight: 0
  },
  loading: false,
};

const payment = (state=initialState, action) => {
  switch(action.type){
    case "GET_COINS_REDUCER":
      return {
        ...state,
        coins: action.coins
      };

    case "GET_PAYMENT_DATA_REDUCER":
      return {
        ...state,
        number: action.number
      };

    case "SET_PAYMENT_REDUCER":
      return {
        ...state,
        payment: action.payload
      }

    case "GET_FEE_PAYMENT_REDUCER":
      return {
        ...state,
        fee: action.fee
      }

    case "SET_FEE_PAYMENT_REDUCER":
      return {
        ...state,
        payment: {
          ...state.payment,
          fee: action.fee
        }
      }

    case "GET_INVOICE_REDUCER":
      return {
        ...state,
        payment: {
          ...state.payment,
          ...action.payment
        }
      }

    default: {
      return {
        ...state
      };
    }
  }
};

export default payment;