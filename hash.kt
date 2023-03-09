/**
 * Calculates the CRC-16 checksum of a byte array using the specified polynomial.
 * If no polynomial is specified, the standard CRC-16-CCITT polynomial (0x1021) is used.
 *
 * @param data The byte array to be checksummed.
 * @param polynomial The polynomial to use for the checksum calculation.
 * @return The 16-bit CRC value as a UShort.
 */
fun crc16(data: ByteArray, polynomial: UShort = 0x1021u): UShort {
    var crc: UShort = 0xffffu

    for (byte in data) {
        crc = crc xor (UShort.fromByte(byte) shl 8)
        for (i in 0 until 8) {
            crc = if ((crc and 0x8000u) != 0u) (crc shl 1) xor polynomial else crc shl 1
        }
    }

    return crc and 0xffffu
}