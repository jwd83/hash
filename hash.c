#include "crc16.h"

/**
 * Calculates the CRC-16-CCITT checksum of a byte array.
 *
 * @param data The byte array to be checksummed.
 * @param length The length of the byte array.
 * @returns The 16-bit CRC value as a uint16_t.
 */
uint16_t crc16(const uint8_t* data, size_t length) {
  const uint16_t POLY = 0x1021;
  uint16_t crc = 0xffff;

  for (size_t i = 0; i < length; i++) {
    crc ^= data[i] << 8;
    for (int j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ POLY : crc << 1;
    }
  }

  return crc & 0xffff;
}
