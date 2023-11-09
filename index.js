// Reverse bits of a given 32 bits unsigned integer.

// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

var reverseBits = function (n) {
  let result = 0b0;
  let current = n;

  for (let i = 0; i < 32; i++) {
    let lastBit = current & 0b1;
    result = result << 1;
    result = result | lastBit;
    current = current >> 1;
  }

  return result >>> 0;
};
