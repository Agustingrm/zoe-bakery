const sizes = {
  Slice: 0.3,
  Cake: 1,
};

export default function calculateCakePrice(cents, size) {
  return cents * sizes[size];
}
