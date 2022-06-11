const responsiveMap = {
  xs: "(max-width:575px)",
  sm: "(min-width:576px)",
  md: "(min-width:768px)",
  lg: "(min-width:992px)",
  xl: "(min-width:1200px)",
  xxl: "(min-width:1600px)",
};

//Subscribers for entire app
const subscribers = new Map();

//Screen will be shared for entire app
const screens = {};

let subUid = -1;

const responsiveObserver = {
  //whenever changes happen in your app -> to your fn
  dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach((fn) => fn(screens));
  },

  register() {
    Object.keys(responsiveMap).forEach((key) => {
      const matchMediaQuery = responsiveMap[key];
      const listener = ({ matches }) => {
        this.dispatch({
          ...screens,
          [key]: matches,
        });
      };
      const mql = window.matchMedia(matchMediaQuery);
      mql.onchange = listener;
      listener(mql);
    });
  },
  subcribe(fn) {
    //subscribe window port for the first time only
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, fn);
    fn(screens);
    return subUid;
  },
  unsubscribe(token) {
    subscribers.delete(token);
  },
};
