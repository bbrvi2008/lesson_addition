import NumberUtils from '../../utils/NumberUtils';

export default {
  generate: () => {
    const a = NumberUtils.random(6, 9);
    const b = NumberUtils.random(11 - a, 14 - a);

    return {
      numberA: a,
      numberB: b,
      result: a + b
    };
  }
};


