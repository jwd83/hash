/**
 * Calculates the CRC-16 checksum of a byte slice using the specified polynomial.
 *
 * @param data The byte slice to be checksummed.
 * @param polynomial The polynomial to use for the checksum calculation.
 * @returns The 16-bit CRC value as a u16.
 */
 fn crc16(data: &[u8], polynomial: u16) -> u16 {
    let mut crc: u16 = 0xffff;

    for byte in data.iter() {
        crc ^= u16::from(*byte) << 8;
        for _ in 0..8 {
            crc = if crc & 0x8000 != 0 {
                (crc << 1) ^ polynomial
            } else {
                crc << 1
            };
        }
    }

    crc & 0xffff
}

/**
 * Calculates the CRC-16 checksum of a byte slice using the standard CRC-16-CCITT polynomial.
 *
 * @param data The byte slice to be checksummed.
 * @returns The 16-bit CRC value as a u16.
 */
fn crc16_ccitt(data: &[u8]) -> u16 {
    crc16(data, 0x1021)
}
