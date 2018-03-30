import * as numberStatuses from '../constants/numberStatuses';
import * as numberModes from '../constants/numberModes';

const ViewStateManager = (function() {
    const Private = {
        getViewStateStep1: () => {
            return {
                numberA: {
                    visible: true,
                    mode: numberModes.IS_EDIT
                },
                numberB: {
                    visible: false,
                    mode: numberModes.IS_HIDE
                }, 
                result: {
                    mode: numberModes.IS_HIDE
                }
            };
        },
        getViewStateStep2: () => {
            return {
                numberA: {
                    visible: true,
                    mode: numberModes.IS_VIEW
                },
                numberB: {
                    visible: true,
                    mode: numberModes.IS_EDIT
                }, 
                result: {
                    mode: numberModes.IS_HIDE
                }
            };
        },
        getViewStateStep3: () => {
            return {
                numberA: {
                    visible: true,
                    mode: numberModes.IS_VIEW
                },
                numberB: {
                    visible: true,
                    mode: numberModes.IS_VIEW
                }, 
                result: {
                    mode: numberModes.IS_EDIT
                }
            };
        },
        getViewStateStep4: () => {
            return {
                numberA: {
                    visible: true,
                    mode: numberModes.IS_VIEW
                },
                numberB: {
                    visible: true,
                    mode: numberModes.IS_VIEW
                }, 
                result: {
                    mode: numberModes.IS_VIEW
                }
            };
        }
    }

    return {
        getViewState: (numberA, numberB, result) => {
            const errorA = numberA.status !== numberStatuses.SUCCESS;
            const errorB = numberB.status !== numberStatuses.SUCCESS;
            const errorResult = result 
                ? result.status !== numberStatuses.SUCCESS 
                : true;
            
            if(errorA) {
                return Private.getViewStateStep1();
            } else if(errorB) {
                return Private.getViewStateStep2();
            } else if(errorResult) {
                return Private.getViewStateStep3();
            }
    
            return Private.getViewStateStep4();
        }
    }
})();

export default ViewStateManager;