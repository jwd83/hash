#ifndef CRC16_H
#define CRC16_H

#include <stdint.h>

/**
 * Calculates the CRC-16-CCITT checksum of a byte array.
 *
 * @param data The byte array to be checksummed.
 * @param length The length of the byte array.
 * @returns The 16-bit CRC value as a uint16_t.
 */
uint16_t crc16(const uint8_t* data, size_t length);

#endif /* CRC16_H */
