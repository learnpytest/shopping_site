import {
  PAYMENTS_STEPS,
  SET_PAYMENTS_STEPS,
  GET_CURRENT_PAYMENTS_STEP,
  SET_CURRENT_PAYMENTS_STEP,
  SET_NEXT_PAYMENTS_STEP,
  GET_NEXT_PAYMENTS_STEP,
  GET_PREV_PAYMENTS_STEP,
  SET_PREV_PAYMENTS_STEP,
} from "../store-types";

const initStepDefault = PAYMENTS_STEPS[0];
const nextStepDefault = PAYMENTS_STEPS[1];

const state = {
  paymentSteps: PAYMENTS_STEPS,
  currentStep: initStepDefault,
  nextStep: nextStepDefault,
  prevStep: "",
};
const getters = {
  [GET_CURRENT_PAYMENTS_STEP]: (state) => state.currentStep,
  [GET_NEXT_PAYMENTS_STEP]: (state) => state.nextStep,
  [GET_PREV_PAYMENTS_STEP]: (state) => state.prevStep,
};
const actions = {
  [SET_PAYMENTS_STEPS]: ({
    commit
  }, currentStep) => {
    commit(SET_CURRENT_PAYMENTS_STEP, currentStep);
    commit(SET_NEXT_PAYMENTS_STEP, currentStep);
    commit(SET_PREV_PAYMENTS_STEP);
  },
};
const mutations = {
  [SET_PREV_PAYMENTS_STEP]: (state) => {
    let indexNow = state.currentStep ?
      PAYMENTS_STEPS.findIndex((ele) => ele === state.currentStep) :
      0;
    state.prevStep = PAYMENTS_STEPS[indexNow - 1];
  },
  [SET_CURRENT_PAYMENTS_STEP]: (state, currentStep) =>
    (state.currentStep = currentStep ? currentStep : initStepDefault),
  [SET_NEXT_PAYMENTS_STEP]: (state, currentStep) => {
    let indexNow = currentStep ?
      PAYMENTS_STEPS.findIndex((ele) => ele === currentStep) :
      0;
    state.nextStep = PAYMENTS_STEPS[indexNow + 1];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};