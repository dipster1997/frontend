const initialState = {

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: {
      console.log("test " + state);
      return state;
    }
  }
}