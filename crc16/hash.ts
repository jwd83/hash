/**
 * Calculates the CRC-16 checksum of a Uint8Array using the specified polynomial.
 * If no polynomial is specified, the standard CRC-16-CCITT polynomial (0x1021) is used.
 *
 * @param data The data to be checksummed.
 * @param polynomial The polynomial to use for the checksum calculation.
 * @returns The 16-bit CRC value as a number.
 */
function crc16(data: Uint8Array, polynomial = 0x1021): number {
  // Initialize CRC to 0xffff.
  let crc = 0xffff;

  // Iterate through each byte of the data.
  for (let i = 0; i < data.length; i++) {
    // XOR the current byte with the high byte of the CRC.
    crc ^= data[i] << 8;

    // Iterate through each bit of the current byte.
    for (let j = 0; j < 8; j++) {
      // If the highest bit of the CRC is set (i.e. >= 0x8000), shift left and XOR with the polynomial.
      // Otherwise, simply shift left.
      crc = crc & 0x8000 ? (crc << 1) ^ polynomial : crc << 1;
    }
  }

  // Return the final 16-bit CRC value.
  return crc & 0xffff;
}
