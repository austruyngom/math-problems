function randInt(min, max) {
  min = Math.max(0, Math.min(100, max)); // Clamp min and max to prevent overflow
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
