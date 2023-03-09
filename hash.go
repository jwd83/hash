// Calculates the CRC-16 checksum of a byte slice using the specified polynomial.
func crc16(data []byte, polynomial uint16) uint16 {
    const initialCrc uint16 = 0xffff
    crc := initialCrc

    for _, b := range data {
        crc ^= uint16(b) << 8
        for i := 0; i < 8; i++ {
            if crc & 0x8000 != 0 {
                crc = (crc << 1) ^ polynomial
            } else {
                crc <<= 1
            }
        }
    }

    return crc & 0xffff
}

// Calculates the CRC-16 checksum of a byte slice using the standard CRC-16-CCITT polynomial.
func crc16Ccitt(data []byte) uint16 {
    const polynomial uint16 = 0x1021
    return crc16(data, polynomial)
}
