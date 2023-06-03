/**
 * Calculates the CRC-16 checksum of a Uint8Array using the specified polynomial.
 * If no polynomial is specified, the standard CRC-16-CCITT polynomial (0x1021) is used.
 *
 * @param {Uint8Array} data - The data to be checksummed.
 * @param {number} [polynomial=0x1021] - The polynomial to use for the checksum calculation.
 * @returns {number} The 16-bit CRC value as a number.
 */
function crc16(data, polynomial = 0x1021) {
    let crc = 0xffff;

    for (let i = 0; i < data.length; i++) {
        crc ^= data[i] << 8;
        for (let j = 0; j < 8; j++) {
            crc = crc & 0x8000 ? (crc << 1) ^ polynomial : crc << 1;
        }
    }

    return crc & 0xffff;
}
