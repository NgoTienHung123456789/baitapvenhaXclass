function maxMultiple(divisor, bound) {
    if (divisor < 2 || divisor > 10) {
      return("divisor is out");
    }
    if (bound < 5 || divisor > 100) {
      return("bound is out");
    }
    if (bound % divisor === 0) {
      return bound;
    } else {
      return bound - (bound % divisor);
    }
  }